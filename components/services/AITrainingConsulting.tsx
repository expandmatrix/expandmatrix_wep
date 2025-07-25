import Link from 'next/link';
import { GraduationCap, Users, BookOpen, ArrowRight } from 'lucide-react';
import { type Locale } from '@/lib/getDictionary';

interface AITrainingConsultingProps {
  dict: any;
  lang: Locale;
}

export default function AITrainingConsulting({ dict, lang }: AITrainingConsultingProps) {
  const features = lang === 'cs' ? [
    {
      icon: GraduationCap,
      title: 'Certifikované kurzy',
      description: 'Získejte oficiální certifikace v oblasti AI a strojového učení'
    },
    {
      icon: Users,
      title: 'Firemní školení',
      description: 'Připravte celý tým na práci s AI technologiemi'
    },
    {
      icon: BookOpen,
      title: 'Praktické workshopy',
      description: 'Hands-on přístup k učení s reálnými projekty'
    }
  ] : [
    {
      icon: GraduationCap,
      title: 'Certified Courses',
      description: 'Get official certifications in AI and machine learning'
    },
    {
      icon: Users,
      title: 'Corporate Training',
      description: 'Prepare your entire team to work with AI technologies'
    },
    {
      icon: BookOpen,
      title: 'Practical Workshops',
      description: 'Hands-on approach to learning with real projects'
    }
  ];

  return (
    <section className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
              {lang === 'cs' ? 'AI Školení & Konzultace' : 'AI Training & Consulting'}
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              {lang === 'cs'
                ? 'Připravte svůj tým na budoucnost s našimi komplexními AI školeními a certifikačními programy.'
                : 'Prepare your team for the future with our comprehensive AI training and certification programs.'
              }
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={`/${lang}/${lang === 'cs' ? 'sluzby/ai-skoleni' : 'services/ai-training'}`}
              className="group inline-flex items-center px-10 py-5 bg-accent-primary text-bg-primary font-bold text-lg rounded-full transition-all duration-500 hover:bg-accent-primary/90 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,127,0.4)]"
            >
              <span>
                {lang === 'cs' ? 'Zjistit více o školení' : 'Learn more about Training'}
              </span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 rounded-3xl blur-3xl"></div>
            <div className="relative bg-bg-secondary border border-accent-primary/20 rounded-3xl p-8">
              <div className="text-center">
                <GraduationCap className="w-20 h-20 text-accent-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {lang === 'cs' ? 'Začněte ještě dnes' : 'Start Today'}
                </h3>
                <p className="text-text-secondary mb-6">
                  {lang === 'cs'
                    ? 'Získejte konkurenční výhodu s našimi AI školeními'
                    : 'Gain competitive advantage with our AI training'
                  }
                </p>
                <div className="bg-accent-primary/10 rounded-2xl p-6">
                  <div className="text-3xl font-black text-accent-primary mb-2">
                    {lang === 'cs' ? '95%' : '95%'}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {lang === 'cs' ? 'Úspěšnost absolventů' : 'Graduate Success Rate'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
