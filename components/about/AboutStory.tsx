'use client';

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

interface AboutStoryProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function AboutStory({ dict, lang }: AboutStoryProps) {
  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
              {lang === 'cs' ? 'Naše cesta' : 'Our Journey'}
            </h2>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                {lang === 'cs'
                  ? 'Expand Matrix vznikla v roce 2019 s jasnou vizí: demokratizovat přístup k umělé inteligenci a pomoci firmám všech velikostí využít její transformační sílu.'
                  : 'Expand Matrix was founded in 2019 with a clear vision: to democratize access to artificial intelligence and help companies of all sizes harness its transformational power.'
                }
              </p>
              <p>
                {lang === 'cs'
                  ? 'Začínali jsme jako malý tým nadšenců pro AI, kteří viděli obrovský potenciál v automatizaci obchodních procesů. Dnes jsme předním poskytovatelem AI řešení s více než 500 úspěšnými projekty.'
                  : 'We started as a small team of AI enthusiasts who saw enormous potential in business process automation. Today, we are a leading AI solutions provider with over 500 successful projects.'
                }
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 border border-accent-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-transparent rounded-3xl" />
              <div className="relative z-10">
                <Rocket className="w-16 h-16 text-accent-primary mb-6" />
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {lang === 'cs' ? 'Naše vize' : 'Our Vision'}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {lang === 'cs'
                    ? 'Být průkopníky v oblasti AI automatizace a pomoci vytvořit svět, kde technologie slouží lidem a umožňuje jim dosáhnout jejich plného potenciálu.'
                    : 'To be pioneers in AI automation and help create a world where technology serves people and enables them to reach their full potential.'
                  }
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}