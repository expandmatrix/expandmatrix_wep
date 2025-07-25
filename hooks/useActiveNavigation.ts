'use client';

import { usePathname } from 'next/navigation';

export function useActiveNavigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    // Handle exact matches for home page
    if (href.endsWith('/') && pathname.endsWith('/')) {
      return href === pathname;
    }
    
    // Handle other pages
    const normalizedHref = href.replace(/\/$/, '');
    const normalizedPathname = pathname.replace(/\/$/, '');
    
    return normalizedPathname === normalizedHref || 
           normalizedPathname.startsWith(normalizedHref + '/');
  };

  return { isActive, pathname };
}