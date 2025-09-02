require('dotenv').config();
const fetch = require('node-fetch');

// Simulace strapiApi
const strapiApi = {
  async getCategories() {
    const url = `${process.env.STRAPI_API_URL}/api/categories`;
    const token = process.env.STRAPI_API_TOKEN;
    
    console.log('🔗 URL:', url);
    console.log('🔑 Token přítomen:', !!token);
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('📊 Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data || data;
  }
};

// Simulace getBlogCategories funkce
async function getBlogCategories() {
  const fallbackCategories = [
    {
      id: '1',
      slug: 'news',
      name: { cs: 'Novinky', en: 'News' },
      description: { cs: 'Nejnovější trendy a novinky', en: 'Latest trends and news' },
      icon: 'newspaper',
      order: 1,
      isActive: true
    },
    {
      id: '2', 
      slug: 'case-studies',
      name: { cs: 'Case Studies', en: 'Case Studies' },
      description: { cs: 'Úspěšné projekty a jejich výsledky', en: 'Successful projects and results' },
      icon: 'file-text',
      order: 2,
      isActive: true
    },
    {
      id: '3',
      slug: 'guide',
      name: { cs: 'Návody', en: 'Guide' },
      description: { cs: 'Praktické návody krok za krokem', en: 'Step-by-step practical guides' },
      icon: 'book-open',
      order: 3,
      isActive: true
    }
  ];

  try {
    console.log('Načítám kategorie ze Strapi CMS...');
    const strapiCategories = await strapiApi.getCategories();
    console.log('Strapi kategorie:', strapiCategories);
    
    if (!strapiCategories || !Array.isArray(strapiCategories)) {
      console.warn('Neplatná data kategorií ze Strapi, používám fallback');
      return fallbackCategories;
    }

    if (strapiCategories.length === 0) {
      console.warn('Žádné kategorie ze Strapi, používám fallback');
      return fallbackCategories;
    }

    // Mapování kategorií ze Strapi na náš formát
    const categoryMapping = {
      'news': {
        name: { cs: 'Novinky', en: 'News' },
        description: { cs: 'Nejnovější trendy a novinky', en: 'Latest trends and news' },
        icon: 'newspaper'
      },
      'case-studies': {
        name: { cs: 'Case Studies', en: 'Case Studies' },
        description: { cs: 'Úspěšné projekty a jejich výsledky', en: 'Successful projects and results' },
        icon: 'file-text'
      },
      'Case-Studies': {
        name: { cs: 'Case Studies', en: 'Case Studies' },
        description: { cs: 'Úspěšné projekty a jejich výsledky', en: 'Successful projects and results' },
        icon: 'file-text'
      },
      'guide': {
        name: { cs: 'Návody', en: 'Guide' },
        description: { cs: 'Praktické návody krok za krokem', en: 'Step-by-step practical guides' },
        icon: 'book-open'
      },
      'guíde': {
        name: { cs: 'Návody', en: 'Guide' },
        description: { cs: 'Praktické návody krok za krokem', en: 'Step-by-step practical guides' },
        icon: 'book-open'
      },
      'test': {
        name: { cs: 'Test', en: 'Test' },
        description: { cs: 'Testovací kategorie', en: 'Test category' },
        icon: 'file-text'
      }
    };

    // Filtrujeme a mapujeme kategorie
    const mappedCategories = strapiCategories
      .filter(category => {
        if (!category || !category.slug) {
          console.warn('Neplatná kategorie:', category);
          return false;
        }
        return true;
      })
      .map((category, index) => {
        console.log(`Zpracovávám kategorii: ${category.slug}`);
        const mapping = categoryMapping[category.slug];
        
        // Pokud není mapování, vytvoříme obecné
        const finalMapping = mapping || {
          name: { 
            cs: category.name || category.slug, 
            en: category.name || category.slug 
          },
          description: { 
            cs: category.description || 'Popis kategorie', 
            en: category.description || 'Category description' 
          },
          icon: 'file-text'
        };
        
        if (!finalMapping.name || !finalMapping.description) {
          console.error('Neplatné mapování pro kategorii:', category.slug, finalMapping);
          return null;
        }
        
        return {
          id: category.id.toString(),
          slug: category.slug,
          name: finalMapping.name,
          description: finalMapping.description,
          icon: finalMapping.icon,
          order: index + 1,
          isActive: true
        };
      })
      .filter(Boolean);

    if (mappedCategories.length === 0) {
      console.warn('Žádné validní kategorie po mapování, používám fallback');
      return fallbackCategories;
    }

    console.log('✅ Úspěšně načteno kategorií ze Strapi:', mappedCategories.length);
    return mappedCategories.sort((a, b) => a.order - b.order);
    
  } catch (error) {
    console.error('❌ Chyba při načítání kategorií ze Strapi:', error);
    return fallbackCategories;
  }
}

// Spuštění testu
getBlogCategories()
  .then(categories => {
    console.log('\n🎯 Finální kategorie:');
    categories.forEach(cat => {
      console.log(`- ${cat.name.cs} (${cat.slug}) - order: ${cat.order}, active: ${cat.isActive}`);
    });
  })
  .catch(error => {
    console.error('❌ Chyba při testování:', error);
  });