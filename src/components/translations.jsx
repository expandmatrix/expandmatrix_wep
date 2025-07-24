import React from 'react';
import { MessageCircle, Linkedin, Facebook, Crown, BookOpen, Lightbulb, TrendingUp, BarChart3, Zap, Target, Rocket, Users, Award, Heart, CheckCircle, Play, ArrowRight, Star, Clock, Shield, Home, Briefcase, ShoppingCart, Filter, ExternalLink, Search, User, Calendar, Tag, Mail } from 'lucide-react';

export const translations = {
  en: {
    layout: {
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        blog: 'Blog',
        about: 'About Us',
        community: 'Community',
        vps: 'VPS Hosting',
      },
      ctaButton: 'Get Started Free',
      language: 'Language',
      footer: {
        tagline: 'Futuristic AI agency for business automation. We save you up to 80% of time and costs.',
        quickLinks: 'Quick Links',
        services: 'Services',
        serviceLinks: {
          custom: 'Custom AI Systems',
          packages: 'AI Packages',
          training: 'AI Training',
          automation: 'Automation',
          vps: 'VPS Hosting',
        },
        newsletter: 'Newsletter',
        newsletterPrompt: 'Subscribe to our newsletter and get exclusive tips.',
        emailPlaceholder: 'Your email',
        subscribeButton: 'Subscribe',
        copyright: '© 2024 Expand Matrix. All rights reserved.',
      },
    },
    home: {
      title: 'Automate your business and save up to',
      titleHighlight: '80% of time',
      subtitle: 'We are a futuristic AI agency that helps companies automate processes, reduce costs, and grow faster than ever before.',
      ctaPrimary: 'Get Started Free',
      ctaSecondary: 'Watch Demo',
      stats: [
        { label: 'Time Saved' },
        { label: 'Satisfied Clients' },
        { label: 'Project Success Rate' },
        { label: 'Support' },
      ],
      services: {
        title: 'Our',
        titleHighlight: 'Services',
        subtitle: 'A complete portfolio of AI solutions for modern businesses.',
        items: [
          { title: 'Custom AI Systems', description: 'We create advanced AI solutions tailored to your needs.', features: ['Custom AI models', 'System integration', '24/7 support'] },
          { title: 'Process Automation', description: 'We automate repetitive tasks and save you time.', features: ['Workflow automation', 'Real-time reports', 'ROI tracking'] },
          { title: 'AI Training', description: 'We prepare your team for the future with AI technologies.', features: ['Interactive workshops', 'Online courses', 'Certification'] },
        ],
        viewAll: 'View All Services',
      },
      testimonials: {
        title: 'What our',
        titleHighlight: 'clients say',
        items: [
          { name: 'John Doe', company: 'TechCorp Inc.', text: 'Expand Matrix automated our entire sales process. We save 6 hours a day!' },
          { name: 'Jane Smith', company: 'E-shop Plus', text: 'The AI chatbot from Expand Matrix increased our conversions by 45%. Amazing!' },
        ],
      },
      finalCta: {
        title: 'Ready to revolutionize your business?',
        subtitle: 'Get a free consultation and find out how AI can transform your company.',
        button: 'Get Started Now',
      },
    },
    servicesPage: {
        title: "Our",
        titleHighlight: "Services",
        subtitle: "A complete portfolio of AI solutions, from custom development to ready-made packages and training.",
        tabs: {
            custom: "Custom AI Systems",
            packages: "AI Packages",
            training: "AI Training",
        },
        custom: {
            title: "Custom AI Systems",
            subtitle: "We create unique AI solutions tailored exactly to your business needs and requirements.",
            items: [
                { title: "AI Chatbots & Assistants", description: "Intelligent conversational AI for customer service and sales.", features: ["24/7 availability", "Multilingual support", "CRM integration", "Analytics dashboard"], timeline: "4-8 weeks", investment: "From $7,000" },
                { title: "Predictive Analytics", description: "AI models for trend forecasting and business intelligence.", features: ["Sales forecasting", "Churn prediction", "Demand planning", "Risk assessment"], timeline: "6-12 weeks", investment: "From $9,000" },
                { title: "Process Automation", description: "Comprehensive business process automation using AI.", features: ["Workflow design", "Document processing", "Data integration", "Performance monitoring"], timeline: "8-16 weeks", investment: "From $12,000" },
            ],
            contactExpert: "Contact an Expert",
            process: {
                title: "Our Development Process",
                steps: [
                    { title: "Analysis", desc: "Detailed mapping of your needs" },
                    { title: "Design", desc: "AI architecture and UX design" },
                    { title: "Development", desc: "Agile development with regular updates" },
                    { title: "Deployment", desc: "Launch and ongoing support" },
                ]
            }
        },
        packages: {
            title: "AI Packages",
            subtitle: "Ready-made AI solutions for a quick start. Implementation within 2-4 weeks.",
            items: {
                general: { name: "General AI Package", price: "$2,499", period: "one-time", description: "Complete AI solution for small and medium businesses.", features: ["AI Chatbot for web", "Email automation", "Lead scoring system", "Basic analytics dashboard", "2 months of support", "Training for 5 users"], popular: true },
                ecommerce: { name: "E-commerce AI Suite", price: "$3,999", period: "one-time", description: "Specialized AI tools for online stores.", features: ["Personalized recommendations", "Dynamic pricing AI", "Inventory optimization", "Customer behavior analysis", "Automated marketing campaigns", "3 months of support"], popular: false },
                realestate: { name: "Real Estate AI", price: "$4,499", period: "one-time", description: "AI solutions for real estate companies.", features: ["Property valuation AI", "Lead qualification system", "Market trend analysis", "Automated scheduling", "Document generation", "CRM integration"], popular: false },
            },
            orderButton: "Order Package",
            mostPopular: "Most Popular",
            comparison: {
                title: "Package Comparison",
                feature: "Feature",
                general: "General",
                ecommerce: "E-commerce",
                realestate: "Real Estate",
                features: {
                    chatbot: "AI Chatbot",
                    dashboard: "Analytics Dashboard",
                    personalization: "Personalization",
                },
                basic: "Basic"
            }
        },
        training: {
            title: "AI Training & Education",
            subtitle: "Prepare your team for the future with AI technologies. Interactive workshops and online courses.",
            priceLabel: "Price",
            capacityLabel: "Capacity",
            registerButton: "Register",
            items: [
                {
                    title: "AI Fundamentals Workshop",
                    duration: "2 days",
                    description: "AI basics for managers and team leaders.",
                    topics: ["AI Introduction", "Business applications", "ROI calculation", "Implementation strategy"],
                    price: "$600",
                    participants: "Max 12 people"
                },
                {
                    title: "Machine Learning Bootcamp",
                    duration: "5 days",
                    description: "Intensive course for developers and data analysts.",
                    topics: ["Python for ML", "Algorithms", "Model training", "Deployment"],
                    price: "$1,400",
                    participants: "Max 8 people"
                },
                {
                    title: "AI Strategy Masterclass",
                    duration: "1 day",
                    description: "Strategic AI transformation planning for C-level.",
                    topics: ["AI roadmap", "Change management", "Risk assessment", "Competitive advantage"],
                    price: "$1,000",
                    participants: "Max 6 people"
                }
            ],
            video: {
                title: "Preview from our courses",
                playButton: "Play preview",
                features: [
                    { text: "Certified courses" },
                    { text: "Practical projects" },
                    { text: "Ongoing support" }
                ]
            }
        },
        finalCta: {
            title: "Ready to start your AI transformation?",
            subtitle: "Get a free consultation and find out which solution is best for you.",
            primaryButton: "Free Consultation",
            secondaryButton: "Download Pricelist",
        }
    },
    portfolioPage: {
      title: "Our",
      titleHighlight: "Portfolio",
      subtitle: "Discover how we've helped our clients transform their business with AI technologies.",
      mainButton: "Browse Projects",
      filters: [
        { id: 'all', name: 'All Projects' },
        { id: 'automation', name: 'Automation' },
        { id: 'ecommerce', name: 'E-commerce' },
        { id: 'realestate', name: 'Real Estate' },
        { id: 'business', name: 'Business Intelligence' }
      ],
      featured: "Featured",
      allProjects: "All Projects",
      clientLabel: "Client:",
      durationLabel: "Duration:",
      featuredTitle: "Featured",
      projectsTitle: "Projects",
      testimonialsTitle: "What our",
      testimonialsTitleHighlight: "clients say",
      finalCta: {
        title: "Want a similar project?",
        subtitle: "Contact us, and together we will create an AI solution just for your needs.",
        primaryButton: "Contact Us",
        secondaryButton: "Download Case Study"
      },
      modal: {
        resultsTitle: "Project Results",
        techTitle: "Technologies",
        ctaButton: "I want a similar project"
      }
    },
    blogPage: {
      title: "Our",
      titleHighlight: "Blog",
      subtitle: "The latest insights, tutorials, and case studies from the world of AI and business automation.",
      searchPlaceholder: "Search articles...",
      categories: [
        { id: 'all', name: 'All Articles' },
        { id: 'tutorials', name: 'Tutorials' },
        { id: 'news', name: 'News' },
        { id: 'case-studies', name: 'Case Studies' }
      ],
      featuredBadge: "Featured",
      readButton: "Read Article",
      readMore: "Read More",
      loadMore: "Load More Articles",
      sidebar: {
        newsletter: {
          title: "Newsletter",
          prompt: "Get the latest articles and AI tips directly to your inbox.",
          placeholder: "your@email.com",
          button: "Subscribe",
          disclaimer: "No spam. Unsubscribe anytime."
        },
        topArticles: {
          title: "Top Articles"
        },
        tags: {
          title: "Popular Topics"
        },
        categories: {
          title: "Categories"
        }
      }
    },
    aboutPage: {
        title: "About",
        titleHighlight: "Us",
        subtitle: "We are a team of enthusiasts who believe that AI can change the way companies operate. Our goal is to democratize access to advanced AI technologies.",
        stats: [
            { label: "Satisfied Clients" },
            { label: "Project Success Rate" },
            { label: "Average Time Saved" },
            { label: "Support" }
        ],
        timeline: {
            title: "Our",
            titleHighlight: "Journey",
            subtitle: "From a small startup to a leading AI agency. Every step has brought us closer to our vision.",
            items: [
                { year: "2020", title: "Expand Matrix Founded", description: "Three visionaries decided to change how companies approach AI technologies." },
                { year: "2021", title: "First AI Automation", description: "Successfully implemented the first 10 AI projects with an average time saving of 65%." },
                { year: "2022", title: "E-commerce Expansion", description: "Expanded our portfolio with specialized AI solutions for online stores." },
                { year: "2023", title: "100+ Satisfied Clients", description: "Reached a major milestone and established our AI community." },
                { year: "2024", title: "AI Leadership", description: "Became one of the leading AI agencies in the country with international expansion." }
            ]
        },
        team: {
            title: "Our",
            titleHighlight: "Team",
            subtitle: "A group of experts changing the world with AI technologies.",
            members: [
                { name: "John Doe", role: "CEO & Co-founder", bio: "15 years of experience in the tech world, an expert in AI strategy and business transformation.", skills: ["AI Strategy", "Business Development", "Leadership"] },
                { name: "Jane Smith", role: "CTO & Co-founder", bio: "AI researcher with a PhD in machine learning, architect of our most complex systems.", skills: ["Machine Learning", "AI Architecture", "Research"] },
                { name: "Peter Jones", role: "Head of Development", bio: "Full-stack developer with a passion for AI integration, ensuring the quality of our solutions.", skills: ["Full-stack Development", "AI Integration", "DevOps"] },
                { name: "Anna Williams", role: "Head of Customer Success", bio: "Customer experience expert, ensuring the success of every project from start to finish.", skills: ["Customer Success", "Project Management", "Training"] }
            ]
        },
        values: {
            title: "Our",
            titleHighlight: "Values",
            subtitle: "The principles that guide us in every decision and project.",
            items: [
                { title: "Innovation", description: "We constantly seek new ways for AI to improve business processes." },
                { title: "Efficiency", description: "Every solution we provide must deliver measurable value and time savings." },
                { title: "Trust", description: "We build long-term partnerships based on transparency and results." }
            ]
        },
        finalCta: {
            title: "Join our AI revolution",
            subtitle: "Have a vision for how AI can transform your business? Let's realize it together.",
            primaryButton: "Start Collaboration",
            secondaryButton: "Visit Our Offices"
        }
    },
    communityPage: {
        title: "AI",
        titleHighlight: "Community",
        subtitle: "Join the largest AI community. Networking, knowledge sharing, and collaboration with top AI experts and business leaders.",
        stats: [
            { label: "Active Members" },
            { label: "Successful Projects" },
            { label: "Expert Contributors" },
            { label: "Member Satisfaction" }
        ],
        options: {
            title: "Choose your",
            titleHighlight: "community",
            subtitle: "Each platform has its specific advantages. You can be part of all of them!",
            items: [
                { title: "FREE Discord", price: "Free", description: "Join our free AI community and start your journey.", buttonText: "Join for Free", memberCount: "2,500+ members" },
                { title: "LinkedIn Group", price: "Free", description: "A professional network of AI experts and business leaders.", buttonText: "Join on LinkedIn", memberCount: "1,200+ members" },
                { title: "Facebook Community", price: "Free", description: "An informal space for sharing experiences and tips.", buttonText: "Join on Facebook", memberCount: "800+ members" },
                { title: "Premium Discord", price: "$49/month", description: "Exclusive access to premium content and direct support.", buttonText: "Upgrade to Premium", memberCount: "150+ members" },
            ],
            benefits: {
              free: ["Access to basic channels", "Weekly AI news", "Basic Q&A support", "Networking with others", "Free webinars", "AI resources sharing"],
              linkedin: ["Professional networking", "Business case studies", "AI job opportunities", "Expert insights", "Industry updates", "Partnership opportunities"],
              facebook: ["Casual AI discussions", "Practical tips and tricks", "Success stories", "Tool recommendations", "Community events", "Beginner friendly"],
              premium: ["VIP channels with experts", "1-on-1 consultations (2x/month)", "Priority support", "Early access to news", "Exclusive webinars", "Custom AI audits", "Private mastermind group", "Direct access to founders"]
            },
            mostPopular: "Most Popular",
        },
        events: {
            title: "Upcoming",
            titleHighlight: "Events",
            subtitle: "Regular workshops, webinars, and networking sessions for the entire community.",
            items: [
                { title: "AI Automation Workshop", type: "Online Workshop", platform: "Discord + Zoom" },
                { title: "Case Study: E-commerce AI", type: "Webinar", platform: "YouTube Live" },
                { title: "AI Tools Showdown", type: "Live Demo", platform: "Discord" }
            ],
            attendees: "attendees",
            capacity: "Capacity",
            register: "Reserve a Spot",
            viewAll: "View All Events"
        },
        benefits: {
            title: "What the",
            titleHighlight: "community",
            subtitle: "will bring you",
            items: [
                { title: "New Knowledge", description: "Get the latest trends, best practices, and insider tips from AI experts." },
                { title: "Networking", description: "Connect with like-minded professionals, find partners, and mentors." },
                { title: "Faster Growth", description: "Accelerate your professional growth with community support and expert guidance." }
            ]
        },
        faq: {
            title: "Frequently Asked",
            titleHighlight: "Questions",
            items: [
                { question: "What's the difference between the free and premium Discord?", answer: "The free Discord provides basic community access, while Premium offers direct access to experts, 1-on-1 consultations, and exclusive content." },
                { question: "Can I upgrade from free to premium at any time?", answer: "Yes, you can upgrade at any time. Payment is billed monthly, and you can cancel anytime with no strings attached." },
                { question: "Are events only for premium members?", answer: "No, most events are available to all members. However, premium members get early access and some exclusive sessions." },
                { question: "How often are live sessions held?", answer: "We host at least 2-3 events per week across all platforms. Premium members also have access to weekly mastermind sessions." }
            ]
        },
        finalCta: {
            title: "Join the AI revolution today",
            subtitle: "Start for free, upgrade when you want. No commitments, just value and community.",
            primaryButton: "Join Discord",
            secondaryButton: "Upgrade to Premium"
        }
    },
    vpsPage: {
      title: "VPS",
      titleHighlight: "Hosting",
      subtitle: "High-performance VPS servers for your AI applications and web projects. Fast SSD storage, full control and top-tier security. All servers are ready within 15 minutes.",
      hero: {
        description: "High-performance VPS servers for your AI applications and web projects. Fast SSD storage, full control and top-tier security. All servers are ready within 15 minutes."
      },
      toggles: {
        withTax: "Prices with VAT",
        withBackup: "With Backup",
        taxTooltip: "Adds 21% VAT to prices",
        backupTooltip: "Doubles storage and adds backup service"
      },
      packages: {
        title: "",
        subtitle: "",
        specs: {
          cpu: "vCPU cores",
          ram: "RAM",
          storage: "fast SSD"
        },
        features: {
          highPerformance: "Vysoký výkon",
          ssdStorage: "SSD úložiště",
          monitoring: "24/7 monitoring",
          rootAccess: "Plná root kontrola",
          higherPerformance: "Vyšší výkon",
          fastSsd: "Rychlé SSD",
          prioritySupport: "Prioritní podpora",
          moreRam: "Více RAM pro aplikace",
          professionalPerformance: "Profesionální výkon",
          nvmeStorage: "NVMe úložiště",
          dedicatedSupport: "Dedikovaná podpora",
          enterpriseFeatures: "Enterprise funkcionalita",
          maximumPerformance: "Maximální výkon",
          fastestNvme: "Nejrychlejší NVMe",
          vipSupport: "VIP podpora",
          unlimitedPossibilities: "Neomezené možnosti"
        },
        popular: "Nejoblíbenější",
        orderButton: "Objednat nyní",
        osSelection: "Operační systém"
      },
      cta: {
        title: "Potřebujete pomoc s výběrem?",
        subtitle: "Naši experti vám pomohou vybrat ideální VPS konfiguraci pro vaše potřeby. Kontaktujte nás zdarma.",
        consultationButton: "Bezplatná konzultace",
        calculatorButton: "Cenový kalkulátor",
        stats: {
          activationTime: "Doba aktivace",
          support: "Technická podpora",
          uptime: "Dostupnost"
        }
      }
    }
  },
  cs: {
    layout: {
      nav: {
        home: 'Home',
        services: 'Služby',
        portfolio: 'Portfolio',
        blog: 'Blog',
        about: 'O nás',
        community: 'Komunita',
        vps: 'VPS Hosting',
      },
      ctaButton: 'Začít zdarma',
      language: 'Jazyk',
      footer: {
        tagline: 'Futuristická AI agency pro business automatizace. Ušetříme vám až 80 % času a nákladů.',
        quickLinks: 'Rychlé odkazy',
        services: 'Služby',
        serviceLinks: {
          custom: 'AI Systémy na míru',
          packages: 'AI Balíčky',
          training: 'AI Školení',
          automation: 'Automatizace',
          vps: 'VPS Hosting',
        },
        newsletter: 'Newsletter',
        newsletterPrompt: 'Přihlaste se k odběru novinek a získejte exkluzivní tipy.',
        emailPlaceholder: 'Váš email',
        subscribeButton: 'Odebírat',
        copyright: '© 2024 Expand Matrix. Všechna práva vyhrazena.',
      },
    },
    home: {
      title: 'Automatizujte svůj business a ušetřete až',
      titleHighlight: '80% času',
      subtitle: 'Jsme futuristická AI agency, která pomáhá firmám automatizovat procesy, snižovat náklady a růst rychleji než kdy předtím.',
      ctaPrimary: 'Začít zdarma',
      ctaSecondary: 'Ukázkové demo',
      stats: [
        { label: 'Úspora času' },
        { label: 'Spokojených klientů' },
        { label: 'Úspěšnost projektů' },
        { label: 'Podpora' },
      ],
      services: {
        title: 'Naše',
        titleHighlight: 'služby',
        subtitle: 'Kompletní portfolio AI řešení pro moderní firmy.',
        items: [
          { title: 'AI Systémy na míru', description: 'Vytváříme pokročilé AI řešení přesně podle vašich potřeb.', features: ['Custom AI modely', 'Integrace se systémy', '24/7 podpora'] },
          { title: 'Automatizace procesů', description: 'Automatizujeme opakující se úkoly a ušetříme vám čas.', features: ['Workflow automatizace', 'Reporty v reálném čase', 'ROI tracking'] },
          { title: 'AI Školení', description: 'Připravíme váš tým na budoucnost s AI technologiemi.', features: ['Interaktivní workshopy', 'Online kurzy', 'Certifikace'] },
        ],
        viewAll: 'Prohlédnout všechny služby',
      },
      testimonials: {
        title: 'Co říkají naši',
        titleHighlight: 'klienti',
        items: [
          { name: 'Jan Novák', company: 'TechCorp s.r.o.', text: 'Expand Matrix nám automatizovala celý sales proces. Ušetříme 6 hodin denně!' },
          { name: 'Marie Svobodová', company: 'E-shop Plus', text: 'AI chatbot od Expand Matrix zvýšil naše konverze o 45%. Úžasné!' },
        ],
      },
      finalCta: {
        title: 'Připraveni revolucionalizovat váš business?',
        subtitle: 'Získejte bezplatnou konzultaci a zjistěte, jak AI může transformovat vaši firmu.',
        button: 'Začít hned teď',
      },
    },
     servicesPage: {
        title: "Naše",
        titleHighlight: "služby",
        subtitle: "Kompletní portfolio AI řešení od custom vývoje po ready-made balíčky a školení.",
        tabs: {
            custom: "AI Systémy na míru",
            packages: "AI Balíčky",
            training: "AI Školení",
        },
        custom: {
            title: "AI Systémy na míru",
            subtitle: "Vytváříme unikátní AI řešení přesně podle vašich business potřeb a požadavků.",
            items: [
                { title: "AI Chatboty & Asistenti", description: "Inteligentní konverzační AI pro zákaznický servis a sales.", features: ["24/7 dostupnost", "Vícejazyčná podpora", "Integrace s CRM", "Analytics dashboard"], timeline: "4-8 týdnů", investment: "Od 150 000 Kč" },
                { title: "Prediktivní Analytics", description: "AI modely pro předpověď trendů a business intelligence.", features: ["Sales forecasting", "Churn prediction", "Demand planning", "Risk assessment"], timeline: "6-12 týdnů", investment: "Od 200 000 Kč" },
                { title: "Process Automation", description: "Komplexní automatizace business procesů pomocí AI.", features: ["Workflow design", "Document processing", "Data integration", "Performance monitoring"], timeline: "8-16 týdnů", investment: "Od 250 000 Kč" },
            ],
            contactExpert: "Kontaktovat experta",
            process: {
                title: "Náš development proces",
                steps: [
                    { title: "Analýza", desc: "Detailní zmapování vašich potřeb" },
                    { title: "Design", desc: "Návrh AI architektury a UX" },
                    { title: "Development", desc: "Agile vývoj s pravidelnými updates" },
                    { title: "Deployment", desc: "Launch a ongoing podpora" }
                ]
            }
        },
        packages: {
            title: "AI Balíčky",
            subtitle: "Ready-made AI řešení pro rychlý start. Implementace do 2-4 týdnů.",
            items: {
                general: { name: "General AI Package", price: "49 999 Kč", period: "jednorázově", description: "Kompletní AI řešení pro malé a střední firmy.", features: ["AI Chatbot pro web", "Automatizace emailů", "Lead scoring system", "Basic analytics dashboard", "2 měsíce podpory", "Training pro 5 uživatelů"], popular: true },
                ecommerce: { name: "E-commerce AI Suite", price: "79 999 Kč", period: "jednorázově", description: "Specializované AI nástroje pro online obchody.", features: ["Personalizované doporučení", "Dynamic pricing AI", "Inventory optimization", "Customer behavior analysis", "Automated marketing campaigns", "3 měsíce podpory"], popular: false },
                realestate: { name: "Real Estate AI", price: "89 999 Kč", period: "jednorázově", description: "AI řešení pro realitní společnosti.", features: ["Property valuation AI", "Lead qualification system", "Market trend analysis", "Automated scheduling", "Document generation", "CRM integrace"], popular: false },
            },
            orderButton: "Objednat balíček",
            mostPopular: "Nejpopulárnější",
            comparison: {
                title: "Srovnání balíčků",
                feature: "Funkce",
                general: "General",
                ecommerce: "E-commerce",
                realestate: "Real Estate",
                features: {
                    chatbot: "AI Chatbot",
                    dashboard: "Analytics Dashboard",
                    personalization: "Personalizace",
                },
                basic: "Základní"
            }
        },
        training: {
            title: "AI Training & Školení",
            subtitle: "Připravte váš tým na budoucnost s AI technologiemi. Interaktivní workshopy a online kurzy.",
            priceLabel: "Cena",
            capacityLabel: "Kapacita",
            registerButton: "Přihlásit se",
            items: [
                {
                    title: "AI Fundamentals Workshop",
                    duration: "2 dny",
                    description: "Základy umělé inteligence pro manažery a týmové lídry.",
                    topics: ["Úvod do AI", "Business aplikace", "ROI kalkulace", "Implementační strategie"],
                    price: "15 000 Kč",
                    participants: "Max 12 osob"
                },
                {
                    title: "Machine Learning Bootcamp",
                    duration: "5 dní",
                    description: "Intenzivní kurz pro vývojáře a data analytiky.",
                    topics: ["Python pro ML", "Algoritmy", "Model training", "Deployment"],
                    price: "35 000 Kč",
                    participants: "Max 8 osob"
                },
                {
                    title: "AI Strategy Masterclass",
                    duration: "1 den",
                    description: "Strategické plánování AI transformace pro C-level.",
                    topics: ["AI roadmap", "Change management", "Risk assessment", "Competitive advantage"],
                    price: "25 000 Kč",
                    participants: "Max 6 osob"
                }
            ],
            video: {
                title: "Ukázka z našich kurzů",
                playButton: "Přehrát ukázku",
                features: [
                    { text: "Certifikované kurzy" },
                    { text: "Praktické projekty" },
                    { text: "Pokračující podpora" }
                ]
            }
        },
        finalCta: {
            title: "Připraveni začít s AI transformací?",
            subtitle: "Získejte bezplatnou konzultaci a zjistěte, které řešení je pro vás nejlepší.",
            primaryButton: "Bezplatná konzultace",
            secondaryButton: "Stáhnout ceník",
        }
    },
    portfolioPage: {
      title: "Naše",
      titleHighlight: "portfolio",
      subtitle: "Objevte, jak jsme pomohli našim klientům transformovat jejich business pomocí AI technologií.",
      mainButton: "Prohlédnout projekty",
      filters: [
        { id: 'all', name: 'Všechny projekty' },
        { id: 'automation', name: 'Automatizace' },
        { id: 'ecommerce', name: 'E-commerce' },
        { id: 'realestate', name: 'Real Estate' },
        { id: 'business', name: 'Business Intelligence' }
      ],
      featured: "Vybrané",
      allProjects: "Všechny projekty",
      clientLabel: "Klient:",
      durationLabel: "Doba realizace:",
      featuredTitle: "Vybrané",
      projectsTitle: "projekty",
      testimonialsTitle: "Co říkají naši",
      testimonialsTitleHighlight: "klienti",
      finalCta: {
        title: "Chcete podobný projekt?",
        subtitle: "Kontaktujte nás a společně vytvoříme AI řešení přesně pro vaše potřeby.",
        primaryButton: "Kontaktujte nás",
        secondaryButton: "Stáhnout case study"
      },
      modal: {
        resultsTitle: "Výsledky projektu",
        techTitle: "Technologie",
        ctaButton: "Chci podobný projekt"
      }
    },
    blogPage: {
      title: "Náš",
      titleHighlight: "blog",
      subtitle: "Nejnovější poznatky, tutoriály a case studies ze světa AI a business automatizace.",
      searchPlaceholder: "Hledat články...",
      categories: [
        { id: 'all', name: 'Všechny články' },
        { id: 'tutorials', name: 'Tutoriály' },
        { id: 'news', name: 'Novinky' },
        { id: 'case-studies', name: 'Case Studies' }
      ],
      featuredBadge: "Vybraný",
      readButton: "Přečíst článek",
      readMore: "Číst více",
      loadMore: "Načíst další články",
      sidebar: {
        newsletter: {
          title: "Newsletter",
          prompt: "Získejte nejnovější články a AI tipy přímo do emailu.",
          placeholder: "váš@email.cz",
          button: "Přihlásit se k odběru",
          disclaimer: "Žádný spam. Odhlásit se můžete kdykoliv."
        },
        topArticles: {
          title: "Nejčtenější články"
        },
        tags: {
          title: "Populární témata"
        },
        categories: {
          title: "Kategorie"
        }
      }
    },
    aboutPage: {
        title: "O",
        titleHighlight: "nás",
        subtitle: "Jsme tým pasionátů, kteří věří, že AI může změnit způsob, jakým firmy fungují. Naším cílem je demokratizovat přístup k pokročilým AI technologiím.",
        stats: [
            { label: "Spokojených klientů" },
            { label: "Úspěšnost projektů" },
            { label: "Průměrná úspora času" },
            { label: "Podpora" }
        ],
        timeline: {
            title: "Naše",
            titleHighlight: "cesta",
            subtitle: "Od malého startupu po vedoucí AI agenturu. Každý krok nás přiblížil k naší vizi.",
            items: [
                { year: "2020", title: "Založení Expand Matrix", description: "Tři vizionáři se rozhodli změnit způsob, jakým firmy přistupují k AI technologiím." },
                { year: "2021", title: "První AI automatizace", description: "Úspěšně jsme implementovali prvních 10 AI projektů s průměrnou úsporou 65% času." },
                { year: "2022", title: "Expanze do e-commerce", description: "Rozšířili jsme portfolio o specializované AI řešení pro online obchody." },
                { year: "2023", title: "100+ spokojených klientů", description: "Dosáhli jsme významného milníku a založili AI komunitu." },
                { year: "2024", title: "AI Leadership", description: "Stali jsme se jednou z vedoucích AI agentur v ČR s mezinárodní expanzí." }
            ]
        },
        team: {
            title: "Náš",
            titleHighlight: "tým",
            subtitle: "Skupina expertů, kteří mění svět pomocí AI technologií.",
            members: [
                { name: "Jan Novák", role: "CEO & Co-founder", bio: "15 let experience v tech světě, expert na AI strategii a business transformaci.", skills: ["AI Strategie", "Business Development", "Leadership"] },
                { name: "Marie Svobodová", role: "CTO & Co-founder", bio: "AI researcher s PhD v machine learning, architektka našich nejkomplexnějších systémů.", skills: ["Machine Learning", "AI Architektura", "Výzkum"] },
                { name: "Petr Dvořák", role: "Head of Development", bio: "Full-stack developer s passion pro AI integraci, garant kvality našich řešení.", skills: ["Full-stack Development", "AI Integrace", "DevOps"] },
                { name: "Anna Nováková", role: "Head of Customer Success", bio: "Expert na customer experience, zajišťuje úspěch každého projektu od začátku do konce.", skills: ["Customer Success", "Project Management", "Školení"] }
            ]
        },
        values: {
            title: "Naše",
            titleHighlight: "hodnoty",
            subtitle: "Principy, které nás vedou při každém rozhodnutí a projektu.",
            items: [
                { title: "Inovace", description: "Neustále hledáme nové způsoby, jak AI může zlepšit business procesy." },
                { title: "Efektivita", description: "Každé naše řešení musí přinést měřitelnou hodnotu a úsporu času." },
                { title: "Důvěra", description: "Budujeme dlouhodobé partnerství založené na transparentnosti a výsledcích." }
            ]
        },
        finalCta: {
            title: "Připojte se k naší AI revoluci",
            subtitle: "Máte vizi, jak AI může transformovat váš business? Pojďme ji společně realizovat.",
            primaryButton: "Začít spolupráci",
            secondaryButton: "Navštívit naše kanceláře"
        }
    },
    communityPage: {
        title: "AI",
        titleHighlight: "Komunita",
        subtitle: "Připojte se k největší československé AI komunitě. Networking, knowledge sharing a spolupráce s top AI experty a business leadery.",
        stats: [
            { label: "Aktivních členů" },
            { label: "Úspěšných projektů" },
            { label: "Expertů" },
            { label: "Spokojenost členů" }
        ],
        options: {
            title: "Vyberte si",
            titleHighlight: "komunitu",
            subtitle: "Každá platforma má své specifické výhody. Můžete být součástí všech!",
            items: [
                { title: "ZDARMA Discord", price: "Zdarma", description: "Připojte se k naší free AI komunitě a začněte svou cestu.", buttonText: "Připojit se zdarma", memberCount: "2,500+ členů" },
                { title: "LinkedIn skupina", price: "Zdarma", description: "Profesionální síť AI expertů a business leaderů.", buttonText: "Připojit na LinkedIn", memberCount: "1,200+ členů" },
                { title: "Facebook komunita", price: "Zdarma", description: "Neformální prostor pro sdílení zkušeností a tipů.", buttonText: "Připojit na Facebook", memberCount: "800+ členů" },
                { title: "Premium Discord", price: "990 Kč/měsíc", description: "Exkluzivní přístup k premium obsahu a direct support.", buttonText: "Upgrade na Premium", memberCount: "150+ členů" },
            ],
            benefits: {
              free: ["Přístup k základním kanálům", "Týdenní AI novinky", "Základní Q&A podpora", "Networking s ostatními", "Free webináře", "Sdílení AI zdrojů"],
              linkedin: ["Profesionální networking", "Business case studies", "AI pracovní příležitosti", "Expertní vhledy", "Novinky z oboru", "Možnosti partnerství"],
              facebook: ["Neformální diskuze o AI", "Praktické tipy a triky", "Příběhy úspěchu", "Doporučení na nástroje", "Komunitní akce", "Přátelské pro začátečníky"],
              premium: ["VIP kanály s experty", "1-on-1 konzultace (2x měsíčně)", "Prioritní podpora", "Přednostní přístup k novinkám", "Exkluzivní webináře", "Vlastní AI audity", "Soukromá mastermind skupina", "Přímý přístup k zakladatelům"]
            },
            mostPopular: "Nejpopulárnější",
        },
        events: {
            title: "Nadcházející",
            titleHighlight: "eventy",
            subtitle: "Pravidelné workshopy, webináře a networking sessions pro celou komunitu.",
            items: [
                { title: "AI Automation Workshop", type: "Online Workshop", platform: "Discord + Zoom" },
                { title: "Case Study: E-commerce AI", type: "Webinář", platform: "YouTube Live" },
                { title: "AI Tools Showdown", type: "Live Demo", platform: "Discord" }
            ],
            attendees: "účastníků",
            capacity: "Kapacita",
            register: "Rezervovat místo",
            viewAll: "Zobrazit všechny eventy"
        },
        benefits: {
            title: "Co vám",
            titleHighlight: "komunita",
            subtitle: "přinese",
            items: [
                { title: "Nové poznatky", description: "Získejte nejnovější trendy, best practices a insider tips od AI expertů." },
                { title: "Networking", description: "Propojte se s like-minded profesionály, najděte partnery a mentory." },
                { title: "Rychlejší růst", description: "Zrychlete svůj profesní růst s podporou komunity a expertním vedením." }
            ]
        },
        faq: {
            title: "Často kladené",
            titleHighlight: "otázky",
            items: [
                { question: "Jaký je rozdíl mezi free a premium Discord?", answer: "Free Discord poskytuje základní přístup ke komunitě, zatímco Premium nabízí přímý přístup k expertům, 1-on-1 konzultace a exkluzivní obsah." },
                { question: "Mohu upgradovat z free na premium kdykoliv?", answer: "Ano, upgrade je možný kdykoliv. Platba se účtuje měsíčně a můžete ji kdykoliv zrušit bez závazků." },
                { question: "Jsou eventy pouze pro premium členy?", answer: "Ne, většina eventů je dostupná pro všechny členy. Premium členové mají však přednostní přístup a některé exkluzivní sessions." },
                { question: "Jak často probíhají live sessions?", answer: "Pořádáme minimálně 2-3 události týdně napříč všemi platformami. Premium členové mají navíc přístup k týdenním mastermind sessions." }
            ]
        },
        finalCta: {
            title: "Připojte se k AI revoluci již dnes",
            subtitle: "Začněte zdarma, upgradujte kdy chcete. Žádné závazky, jen hodnota a komunita.",
            primaryButton: "Vstoupit na Discord",
            secondaryButton: "Upgradovat na Premium"
        }
    },
    vpsPage: {
      title: "VPS",
      titleHighlight: "Hosting",
      subtitle: "Vysokovýkonné VPS servery pro vaše AI aplikace a web projekty. Rychlé SSD úložiště, plná kontrola a špičková bezpečnost. Všechny servery jsou připraveny během 15 minut.",
      hero: {
        description: "Vysokovýkonné VPS servery pro vaše AI aplikace a web projekty. Rychlé SSD úložiště, plná kontrola a špičková bezpečnost. Všechny servery jsou připraveny během 15 minut."
      },
      toggles: {
        withTax: "Ceny s DPH",
        withBackup: "Se zálohou",
        taxTooltip: "Přidá 21% DPH k cenám",
        backupTooltip: "Zdvojnásobí úložiště a přidá zálohovací službu"
      },
      packages: {
        title: "",
        subtitle: "",
        specs: {
          cpu: "vCPU jader",
          ram: "RAM",
          storage: "rychlé SSD"
        },
        features: {
          highPerformance: "Vysoký výkon",
          ssdStorage: "SSD úložiště",
          monitoring: "24/7 monitoring",
          rootAccess: "Plná root kontrola",
          higherPerformance: "Vyšší výkon",
          fastSsd: "Rychlé SSD",
          prioritySupport: "Prioritní podpora",
          moreRam: "Více RAM pro aplikace",
          professionalPerformance: "Profesionální výkon",
          nvmeStorage: "NVMe úložiště",
          dedicatedSupport: "Dedikovaná podpora",
          enterpriseFeatures: "Enterprise funkcionalita",
          maximumPerformance: "Maximální výkon",
          fastestNvme: "Nejrychlejší NVMe",
          vipSupport: "VIP podpora",
          unlimitedPossibilities: "Neomezené možnosti"
        },
        popular: "Nejoblíbenější",
        orderButton: "Objednat nyní",
        osSelection: "Operační systém"
      },
      cta: {
        title: "Potřebujete pomoc s výběrem?",
        subtitle: "Naši experti vám pomohou vybrat ideální VPS konfiguraci pro vaše potřeby. Kontaktujte nás zdarma.",
        consultationButton: "Bezplatná konzultace",
        calculatorButton: "Cenový kalkulátor",
        stats: {
          activationTime: "Doba aktivace",
          support: "Technická podpora",
          uptime: "Dostupnost"
        }
      }
    }
  }
};
