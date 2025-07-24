# Expand Matrix - Design Guide

Moderní, futuristický design guide pro web Expand Matrix zaměřený na AI integraci a automatizaci businessu.

## 🎨 Barvy

### Hlavní paleta
```css
:root {
  /* Pozadí */
  --bg-primary: #0A0A0A;        /* Hlavní černé pozadí */
  --bg-secondary: #1A1A1A;      /* Sekundární tmavé pozadí */
  --bg-tertiary: #2A2A2A;       /* Terciární pozadí pro karty */
  
  /* Text */
  --text-primary: #FFFFFF;       /* Hlavní bílý text */
  --text-secondary: #B0B0B0;     /* Sekundární šedý text */
  --text-muted: #808080;         /* Ztlumený text */
  
  /* Akcenty */
  --accent-primary: #00FF7F;     /* Neonově zelená - hlavní akcent */
  --accent-glow: #00FF7F80;      /* Průhledná verze pro glow efekty */
  --accent-dark: #00CC66;        /* Tmavší verze pro hover stavy */
  
  /* Utility */
  --border-color: #333333;       /* Barva okrajů */
  --shadow-color: #00000080;     /* Barva stínů */
  --gradient-start: #0A0A0A;     /* Začátek gradientu */
  --gradient-end: #1A1A1A;       /* Konec gradientu */
}
```

### Tailwind CSS integrace
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#1A1A1A',
        'bg-tertiary': '#2A2A2A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B0B0',
        'text-muted': '#808080',
        'accent-primary': '#00FF7F',
        'accent-glow': '#00FF7F80',
        'accent-dark': '#00CC66',
        'border-color': '#333333',
      }
    }
  }
}
```

## 📝 Typografie

### Fonty
- **Primární font**: Inter (sans-serif) - pro čistý, moderní vzhled
- **Sekundární font**: JetBrains Mono (monospace) - pro kód a technické prvky
- **Fallback**: system-ui, -apple-system, sans-serif

### Velikosti a váhy
```css
:root {
  /* Nadpisy */
  --text-6xl: 3.75rem;    /* 60px - Hero nadpisy */
  --text-5xl: 3rem;       /* 48px - Hlavní nadpisy */
  --text-4xl: 2.25rem;    /* 36px - Sekční nadpisy */
  --text-3xl: 1.875rem;   /* 30px - Podnadpisy */
  --text-2xl: 1.5rem;     /* 24px - Menší nadpisy */
  --text-xl: 1.25rem;     /* 20px - Zvýrazněný text */
  
  /* Tělo textu */
  --text-lg: 1.125rem;    /* 18px - Velký text */
  --text-base: 1rem;      /* 16px - Základní text */
  --text-sm: 0.875rem;    /* 14px - Malý text */
  --text-xs: 0.75rem;     /* 12px - Extra malý text */
  
  /* Váhy */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
}
```

### Typografické třídy
```css
.heading-hero {
  font-size: var(--text-6xl);
  font-weight: var(--font-extrabold);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.heading-primary {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: 1.2;
  color: var(--text-primary);
}

.heading-secondary {
  font-size: var(--text-4xl);
  font-weight: var(--font-semibold);
  line-height: 1.3;
  color: var(--text-primary);
}

.text-body {
  font-size: var(--text-lg);
  font-weight: var(--font-normal);
  line-height: 1.6;
  color: var(--text-secondary);
}
```

## 🔲 UI Prvky

### Tlačítka

#### Primární CTA tlačítko
```css
.btn-primary {
  background: var(--accent-primary);
  color: var(--bg-primary);
  font-weight: var(--font-semibold);
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px var(--accent-glow);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn-primary:hover {
  background: var(--accent-dark);
  transform: translateY(-2px);
  box-shadow: 0 0 30px var(--accent-glow);
}
```

#### Sekundární tlačítko
```css
.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  font-weight: var(--font-medium);
  padding: 1rem 2rem;
  border: 2px solid var(--border-color);
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  box-shadow: 0 0 15px var(--accent-glow);
}
```

### Karty a sekce
```css
.card {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 25px var(--accent-glow);
  transform: translateY(-5px);
}

.section {
  padding: 5rem 0;
  background: var(--bg-primary);
}

.section-alt {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
}
```

### Formulářové prvky
```css
.input {
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: var(--text-primary);
  font-size: var(--text-base);
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 10px var(--accent-glow);
}

.input::placeholder {
  color: var(--text-muted);
}
```

## ✨ Efekty a animace

### Glow efekty
```css
.glow-text {
  color: var(--accent-primary);
  text-shadow: 0 0 10px var(--accent-glow);
}

.glow-border {
  border: 2px solid var(--accent-primary);
  box-shadow: 0 0 20px var(--accent-glow);
}

.glow-bg {
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
}
```

### Pulse animace
```css
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px var(--accent-glow);
  }
  50% {
    box-shadow: 0 0 40px var(--accent-primary);
  }
}

.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}
```

### Floating animace
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.float {
  animation: float 3s ease-in-out infinite;
}
```

### Fade-in animace
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}
```

### Blurry bubliny
```css
.bubble {
  position: absolute;
  background: var(--accent-glow);
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

.bubble-lg {
  width: 200px;
  height: 200px;
}

.bubble-md {
  width: 100px;
  height: 100px;
}

.bubble-sm {
  width: 50px;
  height: 50px;
}
```

## 📱 Responsivita

### Breakpointy
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### Responsivní typografie
```css
@media (max-width: 768px) {
  .heading-hero {
    font-size: 2.5rem;
  }
  
  .heading-primary {
    font-size: 2rem;
  }
  
  .text-body {
    font-size: 1rem;
  }
}
```

### Responsivní spacing
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 3rem;
  }
}
```

## 🌍 Rozšíření pro vícejazyčnost

### Jazykově specifické styly
```css
/* České texty - delší slova */
[lang="cs"] .heading-hero {
  letter-spacing: -0.01em;
}

/* Anglické texty - kratší, více prostoru */
[lang="en"] .heading-hero {
  letter-spacing: -0.03em;
}

/* RTL jazyky (připraveno na budoucnost) */
[dir="rtl"] .text-align-start {
  text-align: right;
}
```

### Adaptivní layout pro různé jazyky
```css
.lang-adaptive {
  min-height: 4rem; /* Rezerva pro delší překlady */
}

@media (max-width: 768px) {
  .lang-adaptive {
    min-height: 5rem; /* Více prostoru na mobilech */
  }
}
```

## 🔧 Implementační příklady

### Hero sekce
```css
.hero {
  background: var(--bg-primary);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 20%;
  left: 10%;
  width: 300px;
  height: 300px;
  background: var(--accent-glow);
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.1;
}
```

### Navigace
```css
.nav {
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  padding: 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--accent-primary);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: var(--accent-primary);
  box-shadow: 0 0 10px var(--accent-glow);
}
```

## 📋 Checklist pro nové stránky

- [ ] Použít tmavé pozadí (`--bg-primary`)
- [ ] Implementovat glow efekty na CTA prvky
- [ ] Přidat fade-in animace pro obsah
- [ ] Zajistit responsivitu na všech zařízeních
- [ ] Otestovat kontrasty pro přístupnost
- [ ] Přidat blurry bubliny pro atmosféru
- [ ] Implementovat hover efekty
- [ ] Použít správné typografické hierarchie
- [ ] Přidat loading stavy s pulse animacemi
- [ ] Otestovat ve všech podporovaných jazycích

## 🎯 Klíčové principy

1. **Minimalizmus**: Méně je více - čisté, jednoduché rozhraní
2. **Futurismus**: Moderní, technologický vzhled s neonovými akcenty
3. **Přístupnost**: Dostatečný kontrast a čitelnost
4. **Konzistence**: Jednotný design napříč všemi stránkami
5. **Interaktivita**: Jemné animace a hover efekty
6. **Responsivita**: Perfektní zobrazení na všech zařízeních
7. **Performance**: Optimalizované animace a efekty

---

*Tento design guide je živý dokument a bude se aktualizovat s rozvojem projektu Expand Matrix.*