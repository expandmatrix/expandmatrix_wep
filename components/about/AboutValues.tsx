'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Heart, 
  Shield, 
  Zap, 
  Target, 
  Users, 
  BookOpen, 
  CheckCircle,
  Lightbulb,
  Globe,
  Lock,
  TrendingUp
} from 'lucide-react';

interface AboutValuesProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function AboutValues({ dict, lang }: AboutValuesProps) {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const values = [
    {
      icon: Brain,
      title: lang === 'cs' ? 'AI Inovace' : 'AI Innovation',
      shortDesc: lang === 'cs' 
        ? 'Nejnovější technologie a cutting-edge řešení'
        : 'Latest technology and cutting-edge solutions',
      fullDesc: lang === 'cs'
        ? 'Neustále sledujeme nejnovější trendy v umělé inteligenci a implementujeme cutting-edge technologie pro naše klienty. Investujeme do výzkumu a vývoje, abychom zůstali na špičce inovací.'
        : 'We constantly monitor the latest trends in artificial intelligence and implement cutting-edge technologies for our clients. We invest in research and development to stay at the forefront of innovation.',
      color: 'from-accent-primary to-blue-400',
      features: [
        lang === 'cs' ? 'Nejnovější AI modely' : 'Latest AI models',
        lang === 'cs' ? 'Vlastní ML algoritmy' : 'Custom ML algorithms',
        lang === 'cs' ? 'Kontinuální výzkum' : 'Continuous research'
      ]
    },
    {
      icon: Heart,
      title: lang === 'cs' ? 'Zákaznický přístup' : 'Customer Focus',
      shortDesc: lang === 'cs'
        ? 'Individuální řešení a dlouhodobé partnerství'
        : 'Individual solutions and long-term partnerships',
      fullDesc: lang === 'cs'
        ? 'Každý projekt přizpůsobujeme specifickým potřebám klienta a poskytujeme dlouhodobou podporu. Věříme v budování vztahů založených na důvěře a vzájemném respektu.'
        : 'We customize each project to specific client needs and provide long-term support. We believe in building relationships based on trust and mutual respect.',
      color: 'from-pink-400 to-red-400',
      features: [
        lang === 'cs' ? 'Individuální řešení' : 'Individual solutions',
        lang === 'cs' ? '24/7 podpora' : '24/7 support',
        lang === 'cs' ? 'Dlouhodobé partnerství' : 'Long-term partnership'
      ]
    },
    {
      icon: Shield,
      title: lang === 'cs' ? 'Bezpečnost & Etika' : 'Security & Ethics',
      shortDesc: lang === 'cs'
        ? 'Odpovědné AI s nejvyšší úrovní zabezpečení'
        : 'Responsible AI with the highest level of security',
      fullDesc: lang === 'cs'
        ? 'Zajišťujeme nejvyšší standardy bezpečnosti a etiky při vývoji AI řešení. Dodržujeme všechny regulace a implementujeme best practices pro odpovědné AI.'
        : 'We ensure the highest standards of security and ethics in AI solution development. We comply with all regulations and implement best practices for responsible AI.',
      color: 'from-emerald-400 to-teal-400',
      features: [
        lang === 'cs' ? 'GDPR compliance' : 'GDPR compliance',
        lang === 'cs' ? 'Etické AI' : 'Ethical AI',
        lang === 'cs' ? 'Data security' : 'Data security'
      ]
    },
    {
      icon: Zap,
      title: lang === 'cs' ? 'Rychlost & Efektivita' : 'Speed & Efficiency',
      shortDesc: lang === 'cs'
        ? 'Rychlé nasazení s maximální efektivitou'
        : 'Rapid deployment with maximum efficiency',
      fullDesc: lang === 'cs'
        ? 'Optimalizujeme procesy pro rychlé dodání výsledků bez kompromisů v kvalitě. Používáme agilní metodiky a automatizované nástroje pro maximální efektivitu.'
        : 'We optimize processes for rapid results delivery without compromising quality. We use agile methodologies and automated tools for maximum efficiency.',
      color: 'from-yellow-400 to-orange-400',
      features: [
        lang === 'cs' ? 'Rychlé prototypy' : 'Rapid prototyping',
        lang === 'cs' ? 'Agilní vývoj' : 'Agile development',
        lang === 'cs' ? 'Automatizace' : 'Automation'
      ]
    },
    {
      icon: Target,
      title: lang === 'cs' ? 'Přesnost & Kvalita' : 'Precision & Quality',
      shortDesc: lang === 'cs'
        ? 'Dokonalost v každém detailu'
        : 'Perfection in every detail',
      fullDesc: lang === 'cs'
        ? 'Každý projekt realizujeme s maximální precizností a důrazem na kvalitu. Testujeme, validujeme a optimalizujeme každé řešení pro dosažení nejlepších výsledků.'
        : 'We execute every project with maximum precision and emphasis on quality. We test, validate and optimize every solution to achieve the best results.',
      color: 'from-purple-400 to-indigo-400',
      features: [
        lang === 'cs' ? 'Důkladné testování' : 'Thorough testing',
        lang === 'cs' ? 'Quality assurance' : 'Quality assurance',
        lang === 'cs' ? 'Kontinuální optimalizace' : 'Continuous optimization'
      ]
    },
    {
      icon: Users,
      title: lang === 'cs' ? 'Týmová spolupráce' : 'Team Collaboration',
      shortDesc: lang === 'cs'
        ? 'Síla týmu a otevřená komunikace'
        : 'Team strength and open communication',
      fullDesc: lang === 'cs'
        ? 'Věříme v sílu týmové spolupráce a otevřené komunikace. Každý člen týmu přispívá svými unikátními dovednostmi k úspěchu projektů.'
        : 'We believe in the power of teamwork and open communication. Every team member contributes their unique skills to project success.',
      color: 'from-cyan-400 to-blue-400',
      features: [
        lang === 'cs' ? 'Cross-functional týmy' : 'Cross-functional teams',
        lang === 'cs' ? 'Otevřená komunikace' : 'Open communication',
        lang === 'cs' ? 'Knowledge sharing' : 'Knowledge sharing'
      ]
    },
    {
      icon: BookOpen,
      title: lang === 'cs' ? 'Kontinuální učení' : 'Continuous Learning',
      shortDesc: lang === 'cs'
        ? 'Neustálé vzdělávání a růst'
        : 'Constant education and growth',
      fullDesc: lang === 'cs'
        ? 'Investujeme do vzdělávání našeho týmu a sledujeme nejnovější trendy v AI. Podporujeme kulturu učení a experimentování s novými technologiemi.'
        : 'We invest in our team education and follow the latest AI trends. We support a culture of learning and experimenting with new technologies.',
      color: 'from-green-400 to-emerald-400',
      features: [
        lang === 'cs' ? 'Pravidelné školení' : 'Regular training',
        lang === 'cs' ? 'Konference & workshopy' : 'Conferences & workshops',
        lang === 'cs' ? 'Certifikace' : 'Certifications'
      ]
    },
    {
      icon: Globe,
      title: lang === 'cs' ? 'Globální dosah' : 'Global Reach',
      shortDesc: lang === 'cs'
        ? 'Mezinárodní perspektiva a lokální znalosti'
        : 'International perspective and local knowledge',
      fullDesc: lang === 'cs'
        ? 'Kombinujeme globální perspektivu s hlubokými lokálními znalostmi. Rozumíme kulturním rozdílům a přizpůsobujeme řešení specifickým potřebám každého trhu.'
        : 'We combine global perspective with deep local knowledge. We understand cultural differences and adapt solutions to specific needs of each market.',
      color: 'from-indigo-400 to-purple-400',
      features: [
        lang === 'cs' ? 'Mezinárodní zkušenosti' : 'International experience',
        lang === 'cs' ? 'Lokální znalosti' : 'Local knowledge',
        lang === 'cs' ? 'Kulturní adaptace' : 'Cultural adaptation'
      ]
    }
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 25% 25%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0,255,127,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 75% 25%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(0,255,127,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 25% 25%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0,255,127,0.05) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-text-primary mb-6">
            {lang === 'cs' ? 'Naše hodnoty' : 'Our Values'}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Principy, které nás vedou při vytváření inovativních AI řešení pro naše klienty'
              : 'The principles that guide us in creating innovative AI solutions for our clients'
            }
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group perspective-1000"
            >
              <motion.div
                className="relative h-80 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              >
                {/* Card Container */}
                <motion.div
                  className="relative w-full h-full preserve-3d"
                  animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="relative bg-bg-secondary/30 backdrop-blur-xl rounded-3xl p-6 border border-accent-primary/20 group-hover:border-accent-primary/40 transition-all duration-300 h-full flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10 flex-1 flex flex-col">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <value.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-text-primary mb-4">
                          {value.title}
                        </h3>
                        
                        {/* Short Description */}
                        <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                          {value.shortDesc}
                        </p>
                        
                        {/* Click Indicator */}
                        <div className="flex items-center justify-center">
                          <motion.div
                            className="px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                          >
                            {lang === 'cs' ? 'Klikněte pro více' : 'Click for more'}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="relative bg-bg-secondary/40 backdrop-blur-xl rounded-3xl p-6 border border-accent-primary/40 h-full flex flex-col">
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-10 rounded-3xl`} />
                      
                      <div className="relative z-10 flex-1 flex flex-col">
                        {/* Full Description */}
                        <p className="text-text-secondary leading-relaxed mb-6 text-sm flex-1">
                          {value.fullDesc}
                        </p>
                        
                        {/* Features */}
                        <div className="space-y-3">
                          {value.features.map((feature, featureIndex) => (
                            <motion.div 
                              key={featureIndex} 
                              className="flex items-center"
                              initial={{ opacity: 0, x: -20 }}
                              animate={flippedCard === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            >
                              <CheckCircle className="w-4 h-4 text-accent-primary mr-3 flex-shrink-0" />
                              <span className="text-text-primary font-medium text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
