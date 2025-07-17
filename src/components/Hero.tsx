import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ChefHat, Award, Heart } from 'lucide-react';
import bakeryHero from '@/assets/bakery-hero.jpg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial state
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current, featuresRef.current], {
        opacity: 0,
        y: 50
      });

      // Hero animation
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3")
      .to(featuresRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.2");

      // Floating animation for features
      gsap.to(featuresRef.current?.children || [], {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.2,
        repeat: -1,
        yoyo: true
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: ChefHat,
      title: "Artisan Crafted",
      description: "Hand-made with traditional techniques"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every product crafted with care"
    }
  ];

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bakeryHero}
          alt="Golden Crust Bakery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Fresh Baked
            <span className="block text-golden">Every Morning</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed"
          >
            Discover the art of traditional baking with our handcrafted breads, 
            pastries, and desserts made fresh daily using time-honored recipes.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="bg-gradient-hero hover:scale-105 transition-transform duration-300 text-lg px-8 py-4"
            >
              View Our Menu
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8 py-4"
            >
              Visit Our Store
            </Button>
          </div>

          {/* Features */}
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <feature.icon className="h-8 w-8 text-golden flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;