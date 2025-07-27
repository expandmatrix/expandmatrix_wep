// This file should be deleted - content moved to /app/[lang]/sluzby/ai-balicky/page.tsx
// Redirect component for backward compatibility

import { redirect } from 'next/navigation';
import { isValidLocale } from '@/lib/getDictionary';

export default async function AIBalickyRedirect({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  
  // Redirect to correct path
  redirect(`/${locale}/sluzby/ai-balicky`);
}
