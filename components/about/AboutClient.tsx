'use client';

import { motion, useScroll, useTransform, useInView, useMotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Code,
  Database,
  Cpu,
  Globe,
  Shield,
  Clock,
  Lightbulb,
  Heart,
  Star,
  Rocket,
  Eye,
  Lock,
  Gauge
} from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface AboutClientProps {
  dict: any;
  lang: Locale;
}

function CTAContainer({ lang }: { lang: Locale }) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
      style={{
        perspective: 1000,
      }}
    >
      {/* Main CTA Container with 3D Effect */}
      <motion.div
        className="relative bg-gradient-to-br from-bg-secondary/80 via-bg-secondary/60 to-bg-secondary/40 backdrop-blur-2xl border border-accent-primary/20 rounded-3xl overflow-hidden"
        style={{
          rotateX,
          rotateY,
        }}
        whileHover={{
          scale: 1.02,
          borderColor: 'rgba(0, 255, 127, 0.4)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          {/* Primary Glow */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl"
            animate={{
              opacity: isHovered ? 0.8 : 0.4,
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Animated Shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent rounded-3xl"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center">
          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-8 left-8 text-accent-primary/30"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            
            <motion.div
              className="absolute top-8 right-8 text-accent-primary/30"
              animate={{
                rotate: -360,
                y: [0, -10, 0],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Zap className="w-6 h-6" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-8 left-8 text-accent-primary/30"
              animate={{
                rotate: 360,
                x: [0, 10, 0],
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Rocket className="w-6 h-6" />
            </motion.div>
          </div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-tight"
          >
            {lang === 'cs' ? (
              <>
                Připraveni{' '}
                <span className="text-accent-primary relative inline-block">
                  transformovat
                  <motion.div 
                    className="absolute -inset-2 bg-accent-primary/10 blur-2xl rounded-lg"
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
                <br />
                váš business?
              </>
            ) : (
              <>
                Ready to{' '}
                <span className="text-accent-primary relative inline-block">
                  transform
                  <motion.div 
                    className="absolute -inset-2 bg-accent-primary/10 blur-2xl rounded-lg"
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
                <br />
                your business?
              </>
            )}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {lang === 'cs'
              ? 'Získejte bezplatnou konzultaci a zjistěte, jak AI může transformovat vaše procesy. Náš tým expertů vám ukáže cestu k efektivnější budoucnosti.'
              : 'Get a free consultation and discover how AI can transform your processes. Our team of experts will show you the path to a more efficient future.'
            }
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0, 255, 127, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-accent-primary text-bg-primary font-bold text-lg px-12 py-5 rounded-full transition-all duration-300 overflow-hidden"
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-dark to-accent-primary"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <span className="relative z-10 flex items-center">
                {lang === 'cs' ? 'Začít hned teď' : 'Get Started Now'}
                <motion.div
                  className="ml-3"
                  animate={{
                    x: isHovered ? 5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(0, 255, 127, 0.6)',
                color: '#00FF7F',
                boxShadow: '0 0 30px rgba(0, 255, 127, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-transparent border-2 border-accent-primary/30 text-text-primary font-semibold text-lg px-12 py-5 rounded-full transition-all duration-300 overflow-hidden group"
            >
              {/* Hover Background */}
              <motion.div
                className="absolute inset-0 bg-accent-primary/10 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative z-10">
                {lang === 'cs' ? 'Kontaktovat nás' : 'Contact Us'}
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-text-secondary text-sm"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
              <span>{lang === 'cs' ? 'Bezplatná konzultace' : 'Free consultation'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>{lang === 'cs' ? 'Bez závazků' : 'No commitment'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span>{lang === 'cs' ? '24/7 podpora' : '24/7 support'}</span>
            </div>
          </motion.div>
        </div>

        {/* Corner Accent Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-br-3xl" />
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent-primary/20 to-transparent rounded-tl-3xl" />
      </motion.div>

      {/* External Glow Effect */}
      <motion.div 
        className="absolute -inset-4 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl blur-2xl"
        animate={{
          opacity: isHovered ? 0.8 : 0.4,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

export default function AboutClient({ dict, lang }: AboutClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(countRef);

    useEffect(() => {
      if (!isInView) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return { count, ref: countRef };
  };

  const stats = [
    { 
      icon: Target, 
      value: 500, 
      suffix: '+', 
      label: lang === 'cs' ? 'Úspěšných projektů' : 'Successful Projects',
      color: 'text-accent-primary'
    },
    { 
      icon: Users, 
      value: 150, 
      suffix: '+', 
      label: lang === 'cs' ? 'Spokojených klientů' : 'Happy Clients',
      color: 'text-blue-400'
    },
    { 
      icon: TrendingUp, 
      value: 85, 
      suffix: '%', 
      label: lang === 'cs' ? 'Zvýšení efektivity' : 'Efficiency Increase',
      color: 'text-purple-400'
    },
    { 
      icon: Award, 
      value: 98, 
      suffix: '%', 
      label: lang === 'cs' ? 'Spokojenost klientů' : 'Client Satisfaction',
      color: 'text-yellow-400'
    }
  ];

  const team = [
    {
      name: 'David Novák',
      role: lang === 'cs' ? 'CEO & AI Stratég' : 'CEO & AI Strategist',
      image: '/team/david.jpg',
      expertise: ['AI Strategy', 'Business Development', 'Digital Transformation'],
      experience: lang === 'cs' ? '10+ let zkušeností' : '10+ years experience',
      description: lang === 'cs' 
        ? 'Vizionář v oblasti AI s bohatými zkušenostmi v transformaci podniků pomocí umělé inteligence.'
        : 'AI visionary with extensive experience in transforming businesses through artificial intelligence.',
      linkedin: '#',
      email: 'david@expandmatrix.com'
    },
    {
      name: 'Anna Svobodová',
      role: lang === 'cs' ? 'CTO & ML Inženýr' : 'CTO & ML Engineer',
      image: '/team/anna.jpg',
      expertise: ['Machine Learning', 'Deep Learning', 'Python/TensorFlow'],
      experience: lang === 'cs' ? '8+ let zkušeností' : '8+ years experience',
      description: lang === 'cs'
        ? 'Expertka na strojové učení s hlubokými znalostmi nejmodernějších AI technologií.'
        : 'Machine learning expert with deep knowledge of cutting-edge AI technologies.',
      linkedin: '#',
      email: 'anna@expandmatrix.com'
    },
    {
      name: 'Tomáš Procházka',
      role: lang === 'cs' ? 'Lead Developer' : 'Lead Developer',
      image: '/team/tomas.jpg',
      expertise: ['Full-Stack Development', 'API Integration', 'Cloud Architecture'],
      experience: lang === 'cs' ? '7+ let zkušeností' : '7+ years experience',
      description: lang === 'cs'
        ? 'Zkušený vývojář specializující se na komplexní AI aplikace a cloudové architektury.'
        : 'Experienced developer specializing in complex AI applications and cloud architectures.',
      linkedin: '#',
      email: 'tomas@expandmatrix.com'
    },
    {
      name: 'Marie Kratochvílová',
      role: lang === 'cs' ? 'UX/UI Designer' : 'UX/UI Designer',
      image: '/team/marie.jpg',
      expertise: ['User Experience', 'Interface Design', 'Design Systems'],
      experience: lang === 'cs' ? '6+ let zkušeností' : '6+ years experience',
      description: lang === 'cs'
        ? 'Kreativní designérka zaměřená na vytváření intuitivních uživatelských rozhraní pro AI aplikace.'
        : 'Creative designer focused on creating intuitive user interfaces for AI applications.',
      linkedin: '#',
      email: 'marie@expandmatrix.com'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: lang === 'cs' ? 'AI Inovace' : 'AI Innovation',
      description: lang === 'cs'
        ? 'Neustále sledujeme nejnovější trendy v umělé inteligenci a implementujeme cutting-edge technologie pro naše klienty.'
        : 'We constantly monitor the latest trends in artificial intelligence and implement cutting-edge technologies for our clients.',
      color: 'from-accent-primary to-blue-400',
      features: [
        lang === 'cs' ? 'Nejnovější AI modely' : 'Latest AI models',
        lang === 'cs' ? 'Vlastní ML algoritmy' : 'Custom ML algorithms',
        lang === 'cs' ? 'Kontinuální výzkum' : 'Continuous research'
      ]
    },
    {
      icon: Gauge,
      title: lang === 'cs' ? 'Efektivita' : 'Efficiency',
      description: lang === 'cs'
        ? 'Zaměřujeme se na maximalizaci efektivity procesů a dosažení měřitelných výsledků pro naše klienty.'
        : 'We focus on maximizing process efficiency and achieving measurable results for our clients.',
      color: 'from-purple-400 to-pink-400',
      features: [
        lang === 'cs' ? 'Automatizace procesů' : 'Process automation',
        lang === 'cs' ? 'Optimalizace nákladů' : 'Cost optimization',
        lang === 'cs' ? 'Měřitelné výsledky' : 'Measurable results'
      ]
    },
    {
      icon: Shield,
      title: lang === 'cs' ? 'Bezpečnost' : 'Security',
      description: lang === 'cs'
        ? 'Bezpečnost dat a AI implementací je naší prioritou. Dodržujeme nejvyšší standardy ochrany informací.'
        : 'Data security and AI implementation safety is our priority. We adhere to the highest information protection standards.',
      color: 'from-yellow-400 to-orange-400',
      features: [
        lang === 'cs' ? 'GDPR compliance' : 'GDPR compliance',
        lang === 'cs' ? 'Šifrování dat' : 'Data encryption',
        lang === 'cs' ? 'Bezpečné API' : 'Secure APIs'
      ]
    },
    {
      icon: Heart,
      title: lang === 'cs' ? 'Partnerství' : 'Partnership',
      description: lang === 'cs'
        ? 'Budujeme dlouhodobé partnerství s našimi klienty a poskytujeme kontinuální podporu a rozvoj.'
        : 'We build long-term partnerships with our clients and provide continuous support and development.',
      color: 'from-green-400 to-teal-400',
      features: [
        lang === 'cs' ? 'Dlouhodobá spolupráce' : 'Long-term cooperation',
        lang === 'cs' ? '24/7 podpora' : '24/7 support',
        lang === 'cs' ? 'Kontinuální rozvoj' : 'Continuous development'
      ]
    }
  ];

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Particle System */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-accent-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
              x: [0, Math.sin(i) * 100, 0],
              y: [0, Math.cos(i) * 50, 0],
            }}
            transition={{
              duration: 10 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5 text-accent-primary mr-2" />
              <span className="text-accent-primary font-medium">
                {lang === 'cs' ? 'O naší AI agentuře' : 'About Our AI Agency'}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-text-primary mb-6 leading-tight">
              <span className="block">
                {lang === 'cs' ? 'Transformujeme' : 'Transforming'}
              </span>
              <span className="block bg-gradient-to-r from-accent-primary to-accent-dark bg-clip-text text-transparent">
                {lang === 'cs' ? 'Budoucnost' : 'The Future'}
              </span>
              <span className="block">
                {lang === 'cs' ? 'S AI' : 'With AI'}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              {lang === 'cs' 
                ? 'Jsme tým AI expertů, kteří pomáhají firmám automatizovat procesy, snižovat náklady a dosahovat lepších výsledků pomocí umělé inteligence.'
                : 'We are a team of AI experts who help companies automate processes, reduce costs, and achieve better results using artificial intelligence.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const { count, ref } = useCounter(stat.value);
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div
                    className="relative mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 mx-auto bg-bg-secondary/50 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-accent-primary/20 group-hover:border-accent-primary/40 transition-all duration-300">
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </motion.div>
                  
                  <div className="text-3xl md:text-4xl font-black text-text-primary mb-2">
                    {count}{stat.suffix}
                  </div>
                  
                  <div className="text-text-secondary font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
                <p>
                  {lang === 'cs'
                    ? 'Naše mise zůstává stejná: pomáhat firmám růst rychleji, pracovat efektivněji a dosahovat lepších výsledků prostřednictvím inteligentní automatizace.'
                    : 'Our mission remains the same: helping companies grow faster, work more efficiently, and achieve better results through intelligent automation.'
                  }
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 border border-accent-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-transparent rounded-3xl" />
                <div className="relative z-10">
                  <Rocket className="w-16 h-16 text-accent-primary mb-6" />
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    {lang === 'cs' ? 'Naše vize' : 'Our Vision'}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {lang === 'cs'
                      ? 'Být průkopníky v oblasti AI automatizace a pomoci vytvořit svět, kde technologie slouží lidem a umožňuje jim dosáhnout jejich plného potenciálu.'
                      : 'To be pioneers in AI automation and help create a world where technology serves people and enables them to reach their full potential.'
                    }
                  </p>
                  <div className="flex items-center text-accent-primary font-medium">
                    <Eye className="w-5 h-5 mr-2" />
                    <span>{lang === 'cs' ? 'Budoucnost je zde' : 'The future is here'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
              {lang === 'cs' ? 'Náš tým expertů' : 'Our Expert Team'}
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              {lang === 'cs'
                ? 'Spojili jsme síly nejlepších AI specialistů, vývojářů a strategů pro vytvoření výjimečných řešení.'
                : 'We have brought together the best AI specialists, developers, and strategists to create exceptional solutions.'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative bg-bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 border border-accent-primary/20 group-hover:border-accent-primary/40 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent-primary/20 to-accent-dark/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-10 h-10 text-accent-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-text-primary mb-2">
                          {member.name}
                        </h3>
                        <p className="text-accent-primary font-medium mb-2">
                          {member.role}
                        </p>
                        <p className="text-text-secondary text-sm mb-3">
                          {member.experience}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {member.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="text-text-primary font-semibold text-sm">
                        {lang === 'cs' ? 'Specializace:' : 'Expertise:'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs font-medium rounded-full border border-accent-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-text-secondary">
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-sm hover:text-accent-primary transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
              {lang === 'cs' ? 'Naše hodnoty' : 'Our Values'}
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              {lang === 'cs'
                ? 'Principy, které nás vedou při vytváření inovativních AI řešení pro naše klienty.'
                : 'The principles that guide us in creating innovative AI solutions for our clients.'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 border border-accent-primary/20 group-hover:border-accent-primary/40 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} p-4 mb-6`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-text-primary mb-4">
                      {value.title}
                    </h3>
                    
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {value.description}
                    </p>
                    
                    <div className="space-y-3">
                      {value.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-accent-primary mr-3 flex-shrink-0" />
                          <span className="text-text-primary font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with Homepage Design */}
      <section className="py-32 bg-bg-primary relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Animated Gradient Mesh */}
          <motion.div 
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating Energy Orbs */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-accent-primary/20 rounded-full blur-sm"
              style={{
                left: `${15 + (i * 12) % 70}%`,
                top: `${20 + (i * 8) % 60}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <CTAContainer lang={lang} />
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent origin-center max-w-6xl mx-auto"
        />
      </section>
    </div>
  );
}
