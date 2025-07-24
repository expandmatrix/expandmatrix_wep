import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from '@/components/LanguageProvider';
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSection() {
    const { t, language } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState(1); // 1 for right, -1 for left
    const [isInViewport, setIsInViewport] = useState(false);
    const containerRef = useRef(null);
    const sectionRef = useRef(null);

    // Safe placeholder avatar generator
    const generateAvatar = (name, index) => {
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
        const color = colors[index % colors.length];
        const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
        
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='${encodeURIComponent(color)}'/%3E%3Ctext x='50' y='60' font-family='Arial' font-size='24' font-weight='bold' text-anchor='middle' fill='white'%3E${initials}%3C/text%3E%3C/svg%3E`;
    };

    // Create testimonials with safe avatars
    const testimonials = language === 'cs' ? [
        { name: 'Jan Novák', company: 'TechCorp s.r.o.', text: 'Expand Matrix nám automatizovala celý sales proces. Naše konverze vzrostly o 45% a ušetříme 6 hodin denně!', rating: 5 },
        { name: 'Marie Svobodová', company: 'E-shop Plus', text: 'AI chatbot od Expand Matrix zvýšil naše konverze o 65%. ROI jsme viděli už po prvním měsíci. Úžasné!', rating: 5 },
        { name: 'Eva Králová', company: 'Creative Solutions', text: 'Díky AI optimalizaci jsme snížili provozní náklady o 35% a zlepšili spokojenost zákazníků. Neuvěřitelné výsledky.', rating: 5 },
        { name: 'Tomáš Černý', company: 'Data Dynamics', text: 'Jejich prediktivní modely nám dávají náskok před konkurencí. Přesnost prognóz je 92%.', rating: 5 },
        { name: 'Petr Dvořák', company: 'Innovation Labs', text: 'Implementace AI řešení proběhla hladce a výsledky předčily očekávání. Doporučujeme všem.', rating: 5 },
        { name: 'Lucie Nováková', company: 'Future Tech', text: 'Profesionální přístup, vynikající technická podpora a měřitelné výsledky. Skvělá investice!', rating: 5 }
    ] : [
        { name: 'John Smith', company: 'TechCorp Inc.', text: 'Expand Matrix automated our entire sales process. Our conversions increased by 45% and we save 6 hours daily!', rating: 5 },
        { name: 'Sarah Johnson', company: 'E-shop Plus', text: 'The AI chatbot from Expand Matrix increased our conversions by 65%. We saw ROI in the first month. Amazing!', rating: 5 },
        { name: 'Eva Williams', company: 'Creative Solutions', text: 'Thanks to AI optimization, we reduced operational costs by 35% and improved customer satisfaction. Incredible results.', rating: 5 },
        { name: 'Tom Davis', company: 'Data Dynamics', text: 'Their predictive models give us a competitive edge. Forecast accuracy is 92%.', rating: 5 },
        { name: 'Peter Wilson', company: 'Innovation Labs', text: 'AI implementation was smooth and results exceeded expectations. Highly recommend to everyone.', rating: 5 },
        { name: 'Lucy Brown', company: 'Future Tech', text: 'Professional approach, excellent technical support, and measurable results. Great investment!', rating: 5 }
    ];

    // Add safe avatars to testimonials
    const testimonialsWithAvatars = testimonials.map((testimonial, index) => ({
        ...testimonial,
        avatar: generateAvatar(testimonial.name, index)
    }));

    // Intersection Observer pro detekci vstupu do viewportu
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isInViewport) {
                    setIsInViewport(true);
                }
            },
            { threshold: 0.3 } // Spustí se když je 30% sekce viditelné
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isInViewport]);

    // Auto-scroll s okamžitým spuštěním po vstupu do viewportu
    useEffect(() => {
        if (isInViewport && !isPaused && testimonialsWithAvatars.length > 0) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsWithAvatars.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [isPaused, testimonialsWithAvatars.length, isInViewport]);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsWithAvatars.length) % testimonialsWithAvatars.length);
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsWithAvatars.length);
    };

    // Helper function to get testimonial at specific index
    const getTestimonialAtIndex = (index) => {
        if (index < 0) return testimonialsWithAvatars[testimonialsWithAvatars.length + index];
        return testimonialsWithAvatars[index % testimonialsWithAvatars.length];
    };

    if (testimonialsWithAvatars.length === 0) {
        return null;
    }

    return (
        <section 
            ref={sectionRef}
            className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <style jsx>{`
                @keyframes slideInFromLeft {
                    from { 
                        opacity: 0; 
                        transform: translateX(-50px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateX(0); 
                    }
                }
                
                @keyframes fadeInStaggered {
                    from { 
                        opacity: 0; 
                        transform: translateY(20px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                .animate-slide-in {
                    animation: slideInFromLeft 0.8s ease-out forwards;
                }
                
                .animate-fade-in-delayed {
                    animation: fadeInStaggered 0.6s ease-out forwards;
                }
                
                .testimonial-card {
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .testimonial-card.side {
                    filter: blur(2px);
                    opacity: 0.6;
                    transform: scale(0.9);
                }
                
                .testimonial-card.center {
                    filter: blur(0px);
                    opacity: 1;
                    transform: scale(1);
                    z-index: 10;
                }
                
                .testimonial-card.side:hover {
                    filter: blur(1px);
                    opacity: 0.8;
                    transform: scale(0.95);
                }
            `}</style>
            
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fade-in-delayed">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {language === 'cs' ? 'Co říkají naši' : 'What our'} <span className="text-[#00FF7F] neon-text">{language === 'cs' ? 'klienti' : 'clients say'}</span>
                    </h2>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Main testimonials display with 3-card view - Wider cards */}
                    <div className="flex justify-center items-center relative h-[450px] md:h-[400px]" ref={containerRef}>
                        {/* Previous testimonial (left side, blurred) */}
                        <AnimatePresence mode="wait" initial={false} custom={direction}>
                            <motion.div 
                                key={`left-${currentIndex}`}
                                className="absolute left-0 w-full md:w-[35%] max-w-lg z-0"
                                initial={{ 
                                    x: direction < 0 ? -100 : 0, 
                                    opacity: direction < 0 ? 0 : 0.6,
                                    filter: "blur(8px)"
                                }}
                                animate={{ 
                                    x: 0, 
                                    opacity: 0.6,
                                    filter: "blur(4px)"
                                }}
                                exit={{ 
                                    x: direction > 0 ? -100 : 0, 
                                    opacity: 0,
                                    filter: "blur(8px)"
                                }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 300, 
                                    damping: 30,
                                    mass: 1
                                }}
                            >
                                <Card className="testimonial-card side bg-[#1A1A1A] border-0 rounded-3xl p-6 shadow-2xl hover:shadow-[0_0_20px_rgba(0,255,127,0.1)]">
                                    <CardContent className="p-6">
                                        <div className="flex justify-center mb-4">
                                            {[...Array(getTestimonialAtIndex(currentIndex - 1)?.rating || 5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    className="w-5 h-5 text-[#00FF7F] fill-current mx-1"
                                                />
                                            ))}
                                        </div>
                                        <blockquote className="text-neutral-200 mb-6 leading-relaxed italic text-lg text-center line-clamp-4">
                                            "{getTestimonialAtIndex(currentIndex - 1)?.text}"
                                        </blockquote>
                                        <footer className="flex items-center justify-center space-x-4">
                                            <img 
                                                src={getTestimonialAtIndex(currentIndex - 1)?.avatar} 
                                                alt={getTestimonialAtIndex(currentIndex - 1)?.name} 
                                                className="w-12 h-12 rounded-full object-cover border-2 border-[#00FF7F]/40"
                                            />
                                            <div className="text-center">
                                                <p className="font-bold text-white text-sm">{getTestimonialAtIndex(currentIndex - 1)?.name}</p>
                                                <p className="text-[#00ff7f] text-xs">{getTestimonialAtIndex(currentIndex - 1)?.company}</p>
                                            </div>
                                        </footer>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>

                        {/* Current testimonial (center, main focus) - Wider */}
                        <AnimatePresence mode="wait" initial={false} custom={direction}>
                            <motion.div 
                                key={`center-${currentIndex}`}
                                className="w-full md:w-[60%] max-w-2xl z-10"
                                initial={{ 
                                    scale: 0.8, 
                                    opacity: 0,
                                    y: direction > 0 ? 50 : -50
                                }}
                                animate={{ 
                                    scale: 1, 
                                    opacity: 1,
                                    y: 0
                                }}
                                exit={{ 
                                    scale: 0.8, 
                                    opacity: 0,
                                    y: direction > 0 ? -50 : 50
                                }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 400, 
                                    damping: 30,
                                    mass: 1.2
                                }}
                            >
                                <Card className="testimonial-card center bg-[#1A1A1A] border-0 rounded-3xl p-8 shadow-2xl hover:shadow-[0_0_40px_rgba(0,255,127,0.3)] transition-all duration-500">
                                    <CardContent className="p-8">
                                        <motion.div 
                                            className="flex justify-center mb-6"
                                            initial="hidden"
                                            animate="visible"
                                            variants={{
                                                hidden: { opacity: 0 },
                                                visible: {
                                                    opacity: 1,
                                                    transition: {
                                                        staggerChildren: 0.1
                                                    }
                                                }
                                            }}
                                        >
                                            {[...Array(testimonialsWithAvatars[currentIndex]?.rating || 5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    variants={{
                                                        hidden: { y: -20, opacity: 0 },
                                                        visible: { 
                                                            y: 0, 
                                                            opacity: 1,
                                                            transition: {
                                                                type: "spring",
                                                                stiffness: 300,
                                                                damping: 20
                                                            }
                                                        }
                                                    }}
                                                >
                                                    <Star 
                                                        className="w-6 h-6 text-[#00FF7F] fill-current mx-1"
                                                    />
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                        
                                        <motion.blockquote 
                                            className="text-neutral-200 mb-8 leading-relaxed italic text-xl md:text-2xl text-center"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.5 }}
                                        >
                                            "{testimonialsWithAvatars[currentIndex]?.text}"
                                        </motion.blockquote>
                                        
                                        <motion.footer 
                                            className="flex items-center justify-center space-x-6"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5, duration: 0.5 }}
                                        >
                                            <motion.img 
                                                src={testimonialsWithAvatars[currentIndex]?.avatar} 
                                                alt={testimonialsWithAvatars[currentIndex]?.name} 
                                                className="w-16 h-16 rounded-full object-cover border-3 border-[#00FF7F]/40"
                                                initial={{ scale: 0.8, x: -10 }}
                                                animate={{ scale: 1, x: 0 }}
                                                transition={{ 
                                                    delay: 0.6, 
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                            />
                                            <div className="text-center">
                                                <motion.p 
                                                    className="font-bold text-white text-lg"
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.7, duration: 0.3 }}
                                                >
                                                    {testimonialsWithAvatars[currentIndex]?.name}
                                                </motion.p>
                                                <motion.p 
                                                    className="text-[#00ff7f] text-base"
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.8, duration: 0.3 }}
                                                >
                                                    {testimonialsWithAvatars[currentIndex]?.company}
                                                </motion.p>
                                            </div>
                                        </motion.footer>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>

                        {/* Next testimonial (right side, blurred) */}
                        <AnimatePresence mode="wait" initial={false} custom={direction}>
                            <motion.div 
                                key={`right-${currentIndex}`}
                                className="absolute right-0 w-full md:w-[35%] max-w-lg z-0"
                                initial={{ 
                                    x: direction > 0 ? 100 : 0, 
                                    opacity: direction > 0 ? 0 : 0.6,
                                    filter: "blur(8px)"
                                }}
                                animate={{ 
                                    x: 0, 
                                    opacity: 0.6,
                                    filter: "blur(4px)"
                                }}
                                exit={{ 
                                    x: direction < 0 ? 100 : 0, 
                                    opacity: 0,
                                    filter: "blur(8px)"
                                }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 300, 
                                    damping: 30,
                                    mass: 1
                                }}
                            >
                                <Card className="testimonial-card side bg-[#1A1A1A] border-0 rounded-3xl p-6 shadow-2xl">
                                    <CardContent className="p-6">
                                        <div className="flex justify-center mb-4">
                                            {[...Array(getTestimonialAtIndex(currentIndex + 1)?.rating || 5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    className="w-5 h-5 text-[#00FF7F] fill-current mx-1"
                                                />
                                            ))}
                                        </div>
                                        <blockquote className="text-neutral-200 mb-6 leading-relaxed italic text-lg text-center line-clamp-4">
                                            "{getTestimonialAtIndex(currentIndex + 1)?.text}"
                                        </blockquote>
                                        <footer className="flex items-center justify-center space-x-4">
                                            <img 
                                                src={getTestimonialAtIndex(currentIndex + 1)?.avatar} 
                                                alt={getTestimonialAtIndex(currentIndex + 1)?.name} 
                                                className="w-12 h-12 rounded-full object-cover border-2 border-[#00FF7F]/40"
                                            />
                                            <div className="text-center">
                                                <p className="font-bold text-white text-sm">{getTestimonialAtIndex(currentIndex + 1)?.name}</p>
                                                <p className="text-[#00ff7f] text-xs">{getTestimonialAtIndex(currentIndex + 1)?.company}</p>
                                            </div>
                                        </footer>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center items-center space-x-6 mt-8">
                        <motion.button 
                            onClick={handlePrev} 
                            className="p-4 rounded-full bg-[#1A1A1A] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-[#0A0A0A] transition-all duration-300 hover:scale-110 border border-[#00FF7F]/50 hover:shadow-[0_0_20px_rgba(0,255,127,0.5)]"
                            aria-label="Previous testimonial"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                        
                        {/* Dots indicator */}
                        <div className="flex space-x-3">
                            {testimonialsWithAvatars.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'bg-[#00FF7F] shadow-[0_0_10px_rgba(0,255,127,0.6)]' 
                                            : 'bg-neutral-600 hover:bg-neutral-400'
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                    initial={{ scale: 1 }}
                                    animate={{ 
                                        scale: index === currentIndex ? 1.25 : 1,
                                        backgroundColor: index === currentIndex ? '#00FF7F' : '#4D4D4D'
                                    }}
                                    whileHover={{ scale: index === currentIndex ? 1.25 : 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                />
                            ))}
                        </div>
                        
                        <motion.button 
                            onClick={handleNext} 
                            className="p-4 rounded-full bg-[#1A1A1A] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-[#0A0A0A] transition-all duration-300 hover:scale-110 border border-[#00FF7F]/50 hover:shadow-[0_0_20px_rgba(0,255,127,0.5)]"
                            aria-label="Next testimonial"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.8); }
                    to { opacity: 1; transform: scale(1); }
                }
                
                @keyframes floatShadow {
                    0%, 100% { box-shadow: 0 10px 30px rgba(0, 255, 127, 0.2); }
                    50% { box-shadow: 0 20px 40px rgba(0, 255, 127, 0.4); }
                }
                
                .testimonial-card.center {
                    animation: floatShadow 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
