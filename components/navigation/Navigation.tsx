// Add portfolio link to your navigation items
const navigationItems = [
  // ... existing items
  {
    href: `/${lang}/portfolio`,
    label: lang === 'cs' ? 'Portfolio' : 'Portfolio',
    isActive: pathname.includes('/portfolio')
  },
  // ... rest of items
];