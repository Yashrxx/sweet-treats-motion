import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Heart, Clock } from 'lucide-react';
import bakeryHero from '@/assets/bakery-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Story section animation
      gsap.fromTo(storyRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%"
          }
        }
      );

      // Stats animation
      gsap.fromTo(statsRef.current?.children || [], 
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%"
          }
        }
      );

      // Values animation
      gsap.fromTo(valuesRef.current?.children || [], 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "29", label: "Years in Business", icon: Clock },
    { number: "50+", label: "Daily Varieties", icon: Heart },
    { number: "15", label: "Expert Bakers", icon: Users },
    { number: "12", label: "Awards Won", icon: Award }
  ];

  const values = [
    {
      title: "Traditional Methods",
      description: "We honor time-tested baking techniques passed down through generations.",
      icon: Clock
    },
    {
      title: "Premium Ingredients", 
      description: "Only the finest flour, butter, and seasonal ingredients make it into our products.",
      icon: Award
    },
    {
      title: "Community Focus",
      description: "We're proud to be part of this neighborhood, serving families for decades.",
      icon: Users
    },
    {
      title: "Passion for Quality",
      description: "Every item is crafted with love and attention to detail.",
      icon: Heart
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={bakeryHero}
            alt="Our Bakery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div ref={heroRef} className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our Story of
              <span className="text-golden block">Passion & Tradition</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              For nearly three decades, Golden Crust has been the heart of our community, 
              where traditional baking meets modern taste and every product tells a story of dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-background to-cream">
        <div className="container mx-auto px-4">
          <div ref={storyRef} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Founded on Family Values
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Golden Crust began in 1995 when Maria and Giuseppe Rosetti decided to bring 
                their grandmother's authentic Italian recipes to our community. What started 
                as a small neighborhood bakery has grown into a beloved institution.
              </p>
              <p>
                Today, our second generation continues the legacy, blending traditional 
                techniques with modern innovation. We still rise before dawn every day to 
                ensure our bread is fresh, our pastries are perfect, and our customers 
                start their day with something special.
              </p>
              <p>
                Every loaf, every pastry, every cake is made with the same care and attention 
                that Maria put into her very first batch of sourdough. It's not just about 
                baking – it's about creating moments of joy, one product at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-4">
                <stat.icon className="h-12 w-12 text-golden mx-auto" />
                <div className="text-4xl font-bold text-golden">{stat.number}</div>
                <div className="text-primary-foreground/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from sourcing ingredients to serving customers.
            </p>
          </div>
          
          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-soft border border-border hover:shadow-card transition-shadow duration-300">
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;