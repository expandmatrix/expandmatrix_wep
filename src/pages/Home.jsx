import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play
} from "lucide-react";
import { useLanguage } from '@/components/LanguageProvider';
import ServicesSection from '../components/home/ServicesSection';
import PartnersSection from '../components/home/PartnersSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

// Animations Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export default function Home() {
  const { t, language } = useLanguage();
  const [visibleStats, setVisibleStats] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [draggedBubble, setDraggedBubble] = useState(null);
  const [bubbles, setBubbles] = useState([
    { id: 1, x: 15, y: 20, size: 32, color: '#00FF7F', opacity: 0.05, isDragging: false, isColliding: false, lastX: 15, lastY: 20, lastDragTime: 0, lastCollisionTime: 0 },
    { id: 2, x: 85, y: 70, size: 24, color: '#00CC66', opacity: 0.1, isDragging: false, isColliding: false, lastX: 85, lastY: 70, lastDragTime: 0, lastCollisionTime: 0 },
    { id: 3, x: 80, y: 25, size: 16, color: '#00FF7F', opacity: 0.1, isDragging: false, isColliding: false, lastX: 80, lastY: 25, lastDragTime: 0, lastCollisionTime: 0 },
    { id: 4, x: 20, y: 80, size: 20, color: '#00CC66', opacity: 0.08, isDragging: false, isColliding: false, lastX: 20, lastY: 80, lastDragTime: 0, lastCollisionTime: 0 }
  ]);

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100
      });

      // Update dragged bubble position with smooth interpolation
      if (draggedBubble) {
        const heroSection = document.querySelector('.hero-section');
        const rect = heroSection?.getBoundingClientRect() || { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
        
        // Calculate position relative to hero section
        const x = Math.max(5, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100));
        const y = Math.max(5, Math.min(95, ((e.clientY - rect.top) / rect.height) * 100));
        
        setBubbles(prev => prev.map(bubble => 
          bubble.id === draggedBubble.id 
            ? { ...bubble, x, y, lastX: x, lastY: y } // Store last position
            : bubble
        ));
      }
    };

    const handleMouseUp = () => {
      if (draggedBubble) {
        // Use the last position to prevent teleporting
        setBubbles(prev => prev.map(bubble => 
          bubble.id === draggedBubble.id 
            ? { ...bubble, isDragging: false, lastDragTime: Date.now() }
            : bubble
        ));
      }
      setDraggedBubble(null);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggedBubble]);

  // Handle bubble interactions
  const handleBubbleMouseDown = (bubble, e) => {
    e.preventDefault();
    setDraggedBubble(bubble);
    setBubbles(prev => prev.map(b => 
      b.id === bubble.id ? { ...b, isDragging: true } : b
    ));
  };

  const handleBubbleDoubleClick = (bubble) => {
    // Create explosion particles
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: bubble.x,
      y: bubble.y,
      vx: (Math.random() - 0.5) * 15,
      vy: (Math.random() - 0.5) * 15,
      size: Math.random() * 10 + 3,
      color: bubble.color,
      opacity: 1,
      life: 1
    }));
    
    setParticles(prev => [...prev, ...newParticles]);
    
    // Remove the bubble temporarily and recreate it
    setBubbles(prev => prev.filter(b => b.id !== bubble.id));
    
    setTimeout(() => {
      // Spawn new bubble away from text center (avoid 30-70% center area)
      const avoidCenter = Math.random() > 0.5;
      const newX = avoidCenter 
        ? (Math.random() > 0.5 ? Math.random() * 25 + 5 : Math.random() * 25 + 70)  // Left or right edge
        : Math.random() * 40 + 30; // Center area but less likely
      const newY = Math.random() > 0.7 
        ? Math.random() * 25 + 5   // Top area
        : Math.random() * 25 + 70; // Bottom area
        
      setBubbles(prev => [...prev, {
        ...bubble,
        x: newX,
        y: newY,
        lastX: newX,
        lastY: newY,
        isDragging: false,
        isColliding: false,
        isNew: true,
        lastDragTime: 0,
        lastCollisionTime: 0
      }]);
      
      // Remove the "new" flag after animation completes
      setTimeout(() => {
        setBubbles(prev => prev.map(b => 
          b.id === bubble.id ? { ...b, isNew: false } : b
        ));
      }, 1000);
    }, 1500);
  };

  // Particle animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev
        .map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + 0.2, // gravity
          life: particle.life - 0.02,
          opacity: particle.life - 0.02
        }))
        .filter(particle => particle.life > 0)
      );
    }, 16);
    
    return () => clearInterval(interval);
  }, []);

  // Bubble collision detection and physics
  const checkCollisions = useCallback(() => {
    setBubbles(prev => {
      const newBubbles = [...prev];
      let collisionDetected = false;
      
      for (let i = 0; i < newBubbles.length; i++) {
        for (let j = i + 1; j < newBubbles.length; j++) {
          const bubble1 = newBubbles[i];
          const bubble2 = newBubbles[j];
          
          // Calculate distance between bubble centers
          const dx = bubble2.x - bubble1.x;
          const dy = bubble2.y - bubble1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Calculate minimum distance for collision (based on bubble sizes)
          const minDistance = (bubble1.size + bubble2.size) * 0.15;
          
          if (distance < minDistance && distance > 0) {
            collisionDetected = true;
            
            // Collision detected! Calculate bounce
            const angle = Math.atan2(dy, dx);
            
            // Calculate bounce force based on bubble sizes
            const force = Math.min(3, (minDistance - distance) * 1.2);
            const bounce1X = -Math.cos(angle) * force;
            const bounce1Y = -Math.sin(angle) * force;
            const bounce2X = Math.cos(angle) * force;
            const bounce2Y = Math.sin(angle) * force;
            
            // Apply bounce with boundaries
            newBubbles[i] = {
              ...bubble1,
              x: Math.max(5, Math.min(95, bubble1.x + bounce1X)),
              y: Math.max(5, Math.min(95, bubble1.y + bounce1Y)),
              isColliding: true,
              lastCollisionTime: Date.now()
            };
            
            newBubbles[j] = {
              ...bubble2,
              x: Math.max(5, Math.min(95, bubble2.x + bounce2X)),
              y: Math.max(5, Math.min(95, bubble2.y + bounce2Y)),
              isColliding: true,
              lastCollisionTime: Date.now()
            };
            
            // Create collision particles
            const collisionParticles = Array.from({ length: 6 }, (_, k) => ({
              id: Date.now() + i + j + k,
              x: (bubble1.x + bubble2.x) / 2,
              y: (bubble1.y + bubble2.y) / 2,
              vx: (Math.random() - 0.5) * 10,
              vy: (Math.random() - 0.5) * 10,
              size: Math.random() * 6 + 2,
              color: Math.random() > 0.5 ? bubble1.color : bubble2.color,
              opacity: 0.9,
              life: 0.8
            }));
            
            setParticles(prevParticles => [...prevParticles, ...collisionParticles]);
          }
        }
      }
      
      // Reset collision state after a short delay
      if (collisionDetected) {
        setTimeout(() => {
          setBubbles(current => current.map(bubble => 
            bubble.isColliding ? { ...bubble, isColliding: false } : bubble
          ));
        }, 300);
      }
      
      return newBubbles;
    });
  }, []);

  // Run collision detection
  useEffect(() => {
    const collisionInterval = setInterval(checkCollisions, 50);
    return () => clearInterval(collisionInterval);
  }, [checkCollisions]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleStats(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => {
        if(statsElement) {
            observer.unobserve(statsElement);
        }
    };
  }, []);

  const stats = [
    { number: 80, suffix: "%", label: t.home.stats[0].label },
    { number: 150, suffix: "+", label: t.home.stats[1].label },
    { number: 95, suffix: "%", label: t.home.stats[2].label },
    { number: 24, suffix: "/7", label: t.home.stats[3].label }
  ];

  return (
    <div className="bg-[#0A0A0A] text-white overflow-hidden">
      <style jsx>{`
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(0, 255, 127, 0.3);
            filter: blur(12px);
          }
          50% { 
            box-shadow: 0 0 40px rgba(0, 255, 127, 0.6);
            filter: blur(15px);
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            filter: blur(12px) brightness(1);
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.1);
            filter: blur(15px) brightness(1.2);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes bubble-spawn {
          0% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0); 
            filter: blur(5px);
          }
          50% { 
            opacity: 0.5; 
            transform: translate(-50%, -50%) scale(1.2); 
            filter: blur(15px);
          }
          100% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1); 
            filter: blur(12px);
          }
        }

        @keyframes slideInFromBottom {
          from { 
            opacity: 0; 
            transform: translateY(100px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes collision-flash {
          0% { 
            transform: translate(-50%, -50%) scale(1);
            filter: brightness(1) blur(12px);
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.4);
            filter: brightness(2.5) saturate(2) blur(15px);
          }
          100% { 
            transform: translate(-50%, -50%) scale(1);
            filter: brightness(1) blur(12px);
          }
        }

        .collision-effect {
          animation: collision-flash 0.4s cubic-bezier(0.11, 0.67, 0.43, 0.99);
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slide-in-bottom {
          animation: slideInFromBottom 1.2s ease-out forwards;
        }
        
        .neon-text {
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
          color: #00FF7F;
          background: transparent !important;
          background-color: transparent !important;
        }
        
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(0, 255, 127, 0.4);
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }

        .select-none {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .bubble-spawn {
          animation: bubble-spawn 1s ease-out forwards;
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="hero-section relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]">
            {/* Interactive bubbles */}
            {bubbles.map((bubble) => (
              <div
                key={bubble.id}
                className={`absolute rounded-full blur-xl cursor-grab transition-all duration-200 ease-out select-none ${
                  bubble.isDragging ? 'scale-125 blur-lg cursor-grabbing' : 'hover:scale-110 hover:blur-lg'
                } ${bubble.isNew ? 'bubble-spawn' : ''} ${bubble.isColliding ? 'collision-effect' : ''}`}
                style={{
                  left: `${bubble.x}%`,
                  top: `${bubble.y}%`,
                  width: `${bubble.size * 4}px`,
                  height: `${bubble.size * 4}px`,
                  backgroundColor: bubble.color,
                  opacity: bubble.isDragging ? bubble.opacity * 2 : (bubble.isColliding ? bubble.opacity * 4 : bubble.opacity),
                  transform: bubble.isDragging 
                    ? 'translate(-50%, -50%) scale(1.25)' 
                    : bubble.isColliding
                    ? 'translate(-50%, -50%) scale(1.2)'
                    : `translate(-50%, -50%) translate3d(${mousePosition.x * (bubble.id % 2 ? 2 : -1.5)}px, ${mousePosition.y * (bubble.id % 2 ? 2 : -1.5)}px, 0)`,
                  zIndex: bubble.isDragging ? 20 : (bubble.isColliding ? 15 : 1),
                  boxShadow: bubble.isDragging 
                    ? `0 0 40px ${bubble.color}` 
                    : bubble.isColliding
                    ? `0 0 80px ${bubble.color}, 0 0 120px ${bubble.color}60`
                    : `0 0 20px ${bubble.color}40`,
                  animation: bubble.isDragging 
                    ? 'none' 
                    : bubble.isColliding 
                    ? 'collision-flash 0.4s cubic-bezier(0.11, 0.67, 0.43, 0.99)' 
                    : `${bubble.id % 2 ? 'float' : 'pulse'} ${4 + bubble.id}s ease-in-out infinite`,
                  willChange: bubble.isDragging || bubble.isColliding ? 'transform, opacity, filter' : 'auto',
                  filter: bubble.isColliding ? 'brightness(2) saturate(1.5) blur(12px)' : 'blur(12px)',
                  // Prevent teleporting by adding a transition delay after drag
                  transitionDelay: Date.now() - bubble.lastDragTime < 100 ? '0ms' : '0ms',
                  // Add blur filter to create the non-circular effect
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderRadius: '50%',
                  // Add a subtle gradient to make bubbles less perfectly round
                  backgroundImage: `radial-gradient(circle at 40% 40%, ${bubble.color}, ${bubble.color}aa)`
                }}
                onMouseDown={(e) => handleBubbleMouseDown(bubble, e)}
                onDoubleClick={() => handleBubbleDoubleClick(bubble)}
                title="Drag me or double-click to explode!"
              />
            ))}

            {/* Explosion particles */}
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: particle.color,
                  opacity: particle.opacity,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 15
                }}
              />
            ))}
          </div>
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/40 pointer-events-none"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center z-10 relative">
          {/* Invisible interaction zones for better bubble access */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {bubbles.map((bubble) => {
              // Check if bubble is behind text (center area)
              const isBehindText = bubble.x > 25 && bubble.x < 75 && bubble.y > 25 && bubble.y < 75;
              
              if (!isBehindText) return null;
              
              return (
                <div
                  key={`access-${bubble.id}`}
                  className="absolute w-16 h-16 rounded-full pointer-events-auto cursor-grab hover:bg-white/5 transition-all duration-200 flex items-center justify-center group"
                  style={{
                    left: `${bubble.x}%`,
                    top: `${bubble.y}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 25
                  }}
                  onMouseDown={(e) => handleBubbleMouseDown(bubble, e)}
                  onDoubleClick={() => handleBubbleDoubleClick(bubble)}
                  title="Hidden bubble - click to interact!"
                >
                  <div className="w-3 h-3 rounded-full bg-[#00FF7F]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-pulse"></div>
                </div>
              );
            })}
          </div>
          
          <div className="mb-8">
            <div className="animate-slide-in-bottom">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {language === 'cs' 
                  ? (
                    <>
                      Automatizujte svůj business a ušetřete až{" "}
                      <span className="neon-text animate-float inline-block">80% času</span>
                    </>
                  )
                  : (
                    <>
                      Automate your business and save up to{" "}
                      <span className="neon-text animate-float inline-block">80% of time</span>
                    </>
                  )
                }
              </h1>
            </div>
            
            {/* Line between title and description */}
            <div 
              className="w-64 h-1 bg-gradient-to-r from-transparent via-[#00FF7F] to-transparent opacity-20 animate-pulse mx-auto mb-6"
              style={{ transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)` }}
            ></div>
            
            <p className="text-xl md:text-2xl text-[#CCCCCC] mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              {language === 'cs' 
                ? 'Jsme futuristická AI agency, která pomáhá firmám automatizovat procesy, snižovat náklady a růst rychleji než kdy předtím.'
                : 'We are a futuristic AI agency that helps companies automate processes, reduce costs, and grow faster than ever before.'
              }
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button 
              size="lg" 
              className="rounded-full bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] font-semibold text-xl px-12 py-8 hover-glow group transition-all duration-500 hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-[0_20px_40px_rgba(0,255,127,0.3)]"
            >
              {language === 'cs' ? 'Začít zdarma' : 'Get Started Free'}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-2 border-white text-[#0A0A0A] bg-white hover:bg-[#00FF7F] hover:text-[#0A0A0A] hover:border-[#00FF7F] font-semibold text-xl px-12 py-8 group transition-all duration-500 hover:scale-110 hover:-rotate-1 shadow-lg hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)]"
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              {language === 'cs' ? 'Ukázkové demo' : 'Watch Demo'}
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Stats Section */}
      <section id="stats-section" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4">
                  <span className="text-6xl md:text-7xl font-bold text-[#00FF7F] neon-text block transition-all duration-300 group-hover:scale-110">
                    {visibleStats ? <AnimatedCounter end={stat.number} suffix={stat.suffix} /> : "0"}
                  </span>
                </div>
                <p className="text-neutral-300 font-medium text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#00FF7F]/10 to-[#00CC66]/10 rounded-3xl p-16 border border-[#00FF7F]/30 hover:border-[#00FF7F]/50 transition-all duration-300">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {language === 'cs' 
                ? 'Připraveni revolucionalizovat váš business?'
                : 'Ready to revolutionize your business?'
              }
            </h2>
            <p className="text-xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {language === 'cs' 
                ? 'Získejte bezplatnou konzultaci a zjistěte, jak AI může transformovat vaši firmu.'
                : 'Get a free consultation and find out how AI can transform your company.'
              }
            </p>
            <Button 
              size="lg" 
              className="rounded-full bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] font-semibold text-xl px-16 py-8 hover-glow group transition-all duration-300 hover:scale-105"
            >
              {language === 'cs' ? 'Začít hned teď' : 'Get Started Now'}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
