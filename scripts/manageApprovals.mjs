#!/usr/bin/env node

import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

// Barvy pro konzoli
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleString('cs-CZ');
}

class StrapiClient {
  constructor() {
    this.baseURL = process.env.STRAPI_API_URL;
    this.token = process.env.STRAPI_API_TOKEN;
    
    if (!this.baseURL || !this.token) {
      throw new Error('Chybí konfigurace Strapi API (STRAPI_API_URL, STRAPI_API_TOKEN)');
    }
  }
  
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}/api${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    
    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
    }
    
    return response.json();
  }
  
  async getArticles(filters = {}) {
    const params = new URLSearchParams({
      'populate': 'author,category',
      'sort': 'createdAt:desc',
      ...filters
    });
    
    const data = await this.request(`/articles?${params}`);
    return data.data;
  }
  
  async updateArticle(id, data) {
    return this.request(`/articles/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ data })
    });
  }
}

let strapi = null;

function getStrapiClient() {
  if (!strapi) {
    strapi = new StrapiClient();
  }
  return strapi;
}

function transformArticle(strapiArticle) {
  const attrs = strapiArticle.attributes;
  return {
    id: strapiArticle.id,
    title: attrs.title,
    slug: attrs.slug,
    excerpt: attrs.excerpt,
    content: attrs.content,
    author: attrs.author?.data?.attributes?.name || 'Neznámý autor',
    category: attrs.category?.data?.attributes?.name || 'Bez kategorie',
    publishedAt: attrs.publishedAt,
    createdAt: attrs.createdAt,
    updatedAt: attrs.updatedAt,
    status: attrs.publishedAt ? 'published' : 'pending_review'
  };
}

function displayArticle(article, index) {
  console.log(`\n${colorize(`${index + 1}.`, 'cyan')} ${colorize(article.title, 'bright')}`);
  console.log(`   ${colorize('ID:', 'yellow')} ${article.id}`);
  console.log(`   ${colorize('Slug:', 'yellow')} ${article.slug}`);
  console.log(`   ${colorize('Autor:', 'yellow')} ${article.author}`);
  console.log(`   ${colorize('Kategorie:', 'yellow')} ${article.category}`);
  console.log(`   ${colorize('Stav:', 'yellow')} ${getStatusColor(article.status)}`);
  console.log(`   ${colorize('Vytvořeno:', 'yellow')} ${formatDate(article.createdAt)}`);
  if (article.publishedAt) {
    console.log(`   ${colorize('Publikováno:', 'yellow')} ${formatDate(article.publishedAt)}`);
  }
}

function getStatusColor(status) {
  switch (status) {
    case 'published': return colorize(status, 'green');
    case 'pending_review': return colorize(status, 'yellow');
    case 'rejected': return colorize(status, 'red');
    case 'approved': return colorize(status, 'blue');
    default: return status;
  }
}

async function showPendingArticles() {
  try {
    console.log(colorize('\n📋 Články čekající na schválení:', 'bright'));
    console.log(colorize('=' .repeat(50), 'cyan'));
    
    const articles = await getStrapiClient().getArticles({ 'filters[publishedAt][$null]': true });
    const pendingArticles = articles.map(transformArticle);
    
    if (pendingArticles.length === 0) {
      console.log(colorize('\n✅ Žádné články nečekají na schválení!', 'green'));
      return;
    }
    
    pendingArticles.forEach((article, index) => {
      displayArticle(article, index);
    });
    
    console.log(colorize(`\n📊 Celkem: ${pendingArticles.length} článků`, 'bright'));
  } catch (error) {
    console.error(colorize('❌ Chyba při načítání článků:', 'red'), error.message);
  }
}

async function showPublishedArticles() {
  try {
    console.log(colorize('\n📰 Publikované články:', 'bright'));
    console.log(colorize('=' .repeat(50), 'cyan'));
    
    const articles = await getStrapiClient().getArticles({ 'filters[publishedAt][$notNull]': true });
    const publishedArticles = articles.map(transformArticle);
    
    if (publishedArticles.length === 0) {
      console.log(colorize('\n📭 Žádné články nejsou publikované.', 'yellow'));
      return;
    }
    
    // Zobrazíme pouze posledních 10 článků
    const recentArticles = publishedArticles.slice(0, 10);
    
    recentArticles.forEach((article, index) => {
      displayArticle(article, index);
    });
    
    if (publishedArticles.length > 10) {
      console.log(colorize(`\n... a dalších ${publishedArticles.length - 10} článků`, 'cyan'));
    }
    
    console.log(colorize(`\n📊 Celkem publikováno: ${publishedArticles.length} článků`, 'bright'));
  } catch (error) {
    console.error(colorize('❌ Chyba při načítání publikovaných článků:', 'red'), error.message);
  }
}

async function approveArticle(articleId, reviewerId, notes) {
  try {
    console.log(colorize(`\n🔍 Schvaluji článek ${articleId}...`, 'yellow'));
    
    const result = await getStrapiClient().updateArticle(articleId, {
      publishedAt: new Date().toISOString()
    });
    
    console.log(colorize(`\n🎉 Článek ${articleId} byl úspěšně schválen a publikován!`, 'green'));
    if (notes) {
      console.log(colorize(`📝 Poznámky: ${notes}`, 'cyan'));
    }
    return true;
  } catch (error) {
    console.error(colorize('❌ Chyba při schvalování článku:', 'red'), error.message);
    return false;
  }
}

async function unpublishArticle(articleId, reviewerId, reason) {
  try {
    console.log(colorize(`\n📤 Stahuji článek ${articleId} z publikace...`, 'yellow'));
    
    const result = await getStrapiClient().updateArticle(articleId, {
      publishedAt: null
    });
    
    console.log(colorize(`\n📤 Článek ${articleId} byl stažen z publikace`, 'yellow'));
    if (reason) {
      console.log(colorize(`📝 Důvod: ${reason}`, 'yellow'));
    }
    return true;
  } catch (error) {
    console.error(colorize('❌ Chyba při rušení publikace článku:', 'red'), error.message);
    return false;
  }
}

async function showStats() {
  try {
    console.log(colorize('\n📊 Statistiky schvalování článků:', 'bright'));
    console.log(colorize('=' .repeat(40), 'cyan'));
    
    const allArticles = await getStrapiClient().getArticles();
    const total = allArticles.length;
    const published = allArticles.filter(a => a.attributes.publishedAt).length;
    const pending = total - published;
    
    console.log(`${colorize('📝 Čekající na schválení:', 'yellow')} ${colorize(pending.toString(), 'bright')}`);
    console.log(`${colorize('📰 Publikované:', 'green')} ${colorize(published.toString(), 'bright')}`);
    console.log(`${colorize('📚 Celkem článků:', 'blue')} ${colorize(total.toString(), 'bright')}`);
    
    if (total > 0) {
      const publishedPercentage = ((published / total) * 100).toFixed(1);
      console.log(`${colorize('📈 Míra publikování:', 'magenta')} ${colorize(publishedPercentage + '%', 'bright')}`);
    }
  } catch (error) {
    console.error(colorize('❌ Chyba při načítání statistik:', 'red'), error.message);
  }
}

function showHelp() {
  console.log(colorize('\n📖 Nápověda - Správa schvalování článků', 'bright'));
  console.log(colorize('=' .repeat(50), 'cyan'));
  console.log('');
  console.log(colorize('Dostupné příkazy:', 'bright'));
  console.log(`  ${colorize('pending', 'green')}                    - Zobrazit články čekající na schválení`);
  console.log(`  ${colorize('published', 'green')}                  - Zobrazit publikované články`);
  console.log(`  ${colorize('stats', 'green')}                     - Zobrazit statistiky`);
  console.log(`  ${colorize('approve <id> <reviewer> [notes]', 'green')} - Schválit článek`);
  console.log(`  ${colorize('unpublish <id> <reviewer> [reason]', 'green')} - Stáhnout z publikace`);
  console.log(`  ${colorize('help', 'green')}                     - Zobrazit tuto nápovědu`);
  console.log('');
  console.log(colorize('Příklady:', 'bright'));
  console.log(`  ${colorize('node scripts/manageApprovals.mjs pending', 'cyan')}`);
  console.log(`  ${colorize('node scripts/manageApprovals.mjs approve 123 admin "Článek je v pořádku"', 'cyan')}`);
  console.log(`  ${colorize('node scripts/manageApprovals.mjs unpublish 124 admin "Potřebuje úpravy"', 'cyan')}`);
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  console.log(colorize('🔐 Systém schvalování článků - Expand Matrix', 'bright'));
  
  try {
    switch (command) {
      case 'pending':
        await showPendingArticles();
        break;
        
      case 'published':
        await showPublishedArticles();
        break;
        
      case 'stats':
        await showStats();
        break;
        
      case 'approve':
        if (args.length < 3) {
          console.error(colorize('❌ Použití: approve <article_id> <reviewer_id> [notes]', 'red'));
          process.exit(1);
        }
        await approveArticle(args[1], args[2], args[3]);
        break;
        
      case 'unpublish':
        if (args.length < 3) {
          console.error(colorize('❌ Použití: unpublish <article_id> <reviewer_id> [reason]', 'red'));
          process.exit(1);
        }
        await unpublishArticle(args[1], args[2], args[3]);
        break;
        
      case 'help':
      case '--help':
      case '-h':
        showHelp();
        break;
        
      default:
        if (command) {
          console.error(colorize(`❌ Neznámý příkaz: ${command}`, 'red'));
        }
        showHelp();
        process.exit(1);
    }
  } catch (error) {
    console.error(colorize('❌ Kritická chyba:', 'red'), error.message);
    process.exit(1);
  }
}

// Spuštění hlavní funkce
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  showPendingArticles,
  showPublishedArticles,
  approveArticle,
  unpublishArticle,
  showStats
};