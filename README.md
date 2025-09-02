# ExpandMatrix Web Application

Moderná webová aplikácia postavená na Next.js s Strapi CMS backend.

## 🚀 Rýchly štart

### Predpoklady
- Node.js 18+
- npm alebo yarn
- Prístup k Strapi CMS

### Inštalácia

1. **Klonujte repozitár**
   ```bash
   git clone https://github.com/expandmatrix/expandmatrix_wep.git
   cd expandmatrix_wep
   ```

2. **Nainštalujte závislosti**
   ```bash
   npm install
   # alebo
   ./setup.sh
   ```

3. **Nastavte environment premenné**
   ```bash
   cp .env.example .env.local
   ```
   
   Upravte `.env.local` s vašimi skutočnými hodnotami:
   ```env
   STRAPI_API_URL=https://cms.expandmatrix.com
   STRAPI_API_TOKEN=your_actual_strapi_token
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Spustite vývojový server**
   ```bash
   npm run dev
   ```

   Aplikácia bude dostupná na `http://localhost:3000`

5. **Kontrola kvality kódu**
   ```bash
   npm run lint
   npm run type-check
   ```

## 🏗️ Štruktúra projektu

```
├── app/                    # Next.js App Router
│   ├── [lang]/            # Viacjazyčné stránky
│   └── api/               # API routes
├── components/            # React komponenty
├── lib/                   # Utility funkcie a API
├── dictionaries/          # Jazykové súbory
├── scripts/              # Utility skripty
└── public/               # Statické súbory
```

## 🌐 Viacjazyčnosť

Aplikácia podporuje:
- 🇨🇿 Čeština (`cs`)
- 🇬🇧 Angličtina (`en`)

Jazykové súbory sa nachádzajú v `dictionaries/`.

## 📝 Blog systém

### Kategórie
Kategórie sú spravované cez Strapi CMS s podporou i18n:
- Kolekcia: `category_i18n`
- Podporované jazyky: cs, en
- Automatické načítanie podľa jazyka

### Články
- Markdown podpora
- SEO optimalizácia
- Kategorizácia
- Autor systém

## 🔧 Užitočné skripty

```bash
# Vývoj
npm run dev

# Build
npm run build

# Produkcia
npm start

# Linting
npm run lint
npm run type-check
```

## 🔒 Bezpečnosť

- API tokeny sú chránené cez environment premenné
- `.env.local` je v `.gitignore`
- Všetky API volania sú autentifikované
- Error handling pre všetky Strapi volania

## VPS page with Systrix theme

The VPS landing page lives under `app/[lang]/systrix/vps`. Each language is served from the `[lang]` segment, for example:

- `app/cs/systrix/vps`
- `app/en/systrix/vps`

When running locally, navigate to `http://localhost:3000/en/systrix/vps` (replace `en` with another language code if needed) to view the page.

The `systrix-theme.module.css` file in the same folder overrides default styles. If you remove this theme file and related imports, the main VPS content still works because the page relies on components in `components/vps/`.

