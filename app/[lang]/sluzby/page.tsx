import ServicesHero from '@/components/services/ServicesHero';
import CustomAISystems from '@/components/services/CustomAISystems';
import AISolutionPackages from '@/components/services/AISolutionPackages';
import AITrainingConsulting from '@/components/services/AITrainingConsulting';
import ServicesCTA from '@/components/services/ServicesCTA';
import { getDictionary } from '@/lib/getDictionary';
import type { Locale } from '@/lib/getDictionary';

export default async function SluzbyPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-bg-primary">
      <ServicesHero dict={dict} lang={lang} />
      <CustomAISystems dict={dict} lang={lang} />
      <AISolutionPackages dict={dict} lang={lang} />
      <AITrainingConsulting dict={dict} lang={lang} />
      <ServicesCTA dict={dict} lang={lang} />
    </main>
  );
}
