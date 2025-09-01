# Systém schvalování článků

Tento dokument popisuje implementaci systému pro ruční kontrolu a schvalování článků před jejich publikací na webu Expand Matrix.

## Přehled

Systém umožňuje:
- Načítání článků z Strapi CMS
- Ruční kontrolu článků před publikací
- Schvalování a publikování článků
- Stahování článků z publikace
- Sledování statistik schvalování

## Komponenty systému

### 1. Article Approval Service (`lib/articleApprovalService.ts`)

Hlavní služba pro správu schvalování článků obsahuje:

- **Rozhraní pro stav schválení**: `ArticleApprovalStatus`
- **Akce schválení**: `ApprovalAction` (approve, reject, request_changes)
- **Hlavní třída**: `ArticleApprovalService`

#### Klíčové metody:

```typescript
// Získání článků čekających na schválení
getPendingArticles(): Promise<ArticleApprovalStatus[]>

// Získání publikovaných článků
getPublishedArticles(): Promise<ArticleApprovalStatus[]>

// Schválení/zamítnutí článku
approveArticle(action: ApprovalAction): Promise<boolean>

// Stažení článku z publikace
unpublishArticle(articleId: number, reviewerId: string, reason?: string): Promise<boolean>

// Validace článku před schválením
validateArticleForApproval(articleId: number): Promise<ValidationResult>

// Statistiky schvalování
getApprovalStats(): Promise<ApprovalStats>
```

### 2. CLI Script pro správu (`scripts/manageApprovals.mjs`)

Příkazový řádek pro administrátory umožňuje:

#### Dostupné příkazy:

```bash
# Zobrazit články čekající na schválení
node scripts/manageApprovals.mjs pending

# Zobrazit publikované články
node scripts/manageApprovals.mjs published

# Zobrazit statistiky
node scripts/manageApprovals.mjs stats

# Schválit článek
node scripts/manageApprovals.mjs approve <article_id> <reviewer_id> ["poznámky"]

# Stáhnout článek z publikace
node scripts/manageApprovals.mjs unpublish <article_id> <reviewer_id> ["důvod"]

# Zobrazit nápovědu
node scripts/manageApprovals.mjs help
```

#### Příklady použití:

```bash
# Zobrazit články čekající na schválení
node scripts/manageApprovals.mjs pending

# Schválit článek s ID 123
node scripts/manageApprovals.mjs approve 123 admin "Článek je v pořádku a připraven k publikaci"

# Stáhnout článek z publikace
node scripts/manageApprovals.mjs unpublish 124 admin "Obsahuje zastaralé informace"
```

### 3. Integrace s blog systémem

#### Upravené funkce v `lib/blogApi.ts`:

- **`getBlogCategories()`**: Načítá kategorie z Strapi CMS
- **`getBlogArticles()`**: Načítá pouze publikované články
- **`getArticleBySlug()`**: Načítá konkrétní článek podle slug
- **`getCategoryBySlug()`**: Načítá kategorii podle slug

#### Mapování kategorií:

```typescript
const categoryMapping = {
  'Case Studies': { id: 'case-studies', name: 'Case Studies', nameCs: 'Případové studie' },
  'Guide': { id: 'guide', name: 'Guide', nameCs: 'Průvodce' },
  'News': { id: 'news', name: 'News', nameCs: 'Novinky' }
};
```

## Konfigurace

### Proměnné prostředí (`.env`)

```env
# Strapi CMS Configuration
STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token_here

# Next.js Configuration
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```

### Požadavky

- Node.js 18+
- Strapi CMS 4.x
- Platný API token pro Strapi

## Workflow schvalování

### 1. Vytvoření článku
- Autor vytvoří článek v Strapi CMS
- Článek je automaticky v režimu "draft" (nepublikovaný)

### 2. Kontrola článku
- Administrátor spustí `node scripts/manageApprovals.mjs pending`
- Zobrazí se seznam článků čekajících na schválení

### 3. Schválení článku
- Administrátor zkontroluje obsah článku
- Spustí příkaz pro schválení: `node scripts/manageApprovals.mjs approve <id> <reviewer> ["poznámky"]`
- Článek se automaticky publikuje (nastaví se `publishedAt`)

### 4. Stažení z publikace (pokud potřeba)
- V případě problému lze článek stáhnout: `node scripts/manageApprovals.mjs unpublish <id> <reviewer> ["důvod"]`

## Validace článků

Před schválením se provádí automatická validace:

- ✅ Článek má vyplněný název
- ✅ Článek má vyplněný obsah
- ✅ Článek má přiřazenou kategorii
- ✅ Článek má přiřazeného autora
- ✅ Článek není již publikovaný

## Statistiky a monitoring

Systém poskytuje přehled:
- Počet článků čekajících na schválení
- Počet publikovaných článků
- Celkový počet článků
- Míra publikování (procento schválených článků)

## Bezpečnost

- Všechny operace vyžadují platný Strapi API token
- Změny jsou logovány s ID reviewera
- Validace vstupních dat před každou operací

## Troubleshooting

### Časté problémy:

1. **"Chybí konfigurace Strapi API"**
   - Zkontrolujte `.env` soubor
   - Ověřte, že `STRAPI_API_URL` a `STRAPI_API_TOKEN` jsou správně nastavené

2. **"Cannot find module 'node-fetch'"**
   - Spusťte `npm install node-fetch`

3. **"Strapi API error: 401"**
   - Zkontrolujte platnost API tokenu
   - Ověřte, že token má správná oprávnění

4. **"Strapi API error: 404"**
   - Zkontrolujte, že Strapi běží na správné URL
   - Ověřte, že content-type 'articles' existuje

## Rozšíření systému

Systém je navržen pro snadné rozšíření:

- Přidání dalších validačních pravidel
- Implementace e-mailových notifikací
- Přidání více úrovní schvalování
- Integrace s externími systémy

## Závěr

Systém schvalování článků poskytuje robustní řešení pro kontrolu kvality obsahu před publikací. Kombinuje automatizované procesy s lidskou kontrolou a zajišťuje, že na web se dostanou pouze kvalitní a schválené články.