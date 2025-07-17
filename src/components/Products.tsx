import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from './ProductCard';
import sourdoughBread from '@/assets/sourdough-bread.jpg';
import croissants from '@/assets/croissants.jpg';
import chocolateCake from '@/assets/chocolate-cake.jpg';
import blueberryMuffins from '@/assets/blueberry-muffins.jpg';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(cardsRef.current?.children || [], 
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const products = [
    {
      image: sourdoughBread,
      title: "Artisan Sourdough Bread",
      rating: 5,
      price: "$8.99",
      originalPrice: "$10.99"
    },
    {
      image: croissants,
      title: "Butter Croissants",
      rating: 5,
      price: "$3.50",
    },
    {
      image: chocolateCake,
      title: "Chocolate Layer Cake",
      rating: 4,
      price: "$24.99",
      originalPrice: "$29.99"
    },
    {
      image: blueberryMuffins,
      title: "Blueberry Muffins",
      rating: 5,
      price: "$12.99",
    }
  ];

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-cream">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Signature
            <span className="text-primary block">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each product is carefully crafted using traditional methods and the finest ingredients, 
            delivering exceptional taste and quality you can trust.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              rating={product.rating}
              price={product.price}
              originalPrice={product.originalPrice}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-hero text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-soft">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;