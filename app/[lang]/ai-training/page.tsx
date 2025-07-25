// This file should be deleted - content moved to /app/[lang]/services/ai-training/page.tsx
// Redirect component for backward compatibility

import { redirect } from 'next/navigation';
import { isValidLocale } from '@/lib/getDictionary';

export default async function AITrainingRedirect({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'en';
  
  // Redirect to correct path
  redirect(`/${locale}/services/ai-training`);
}
