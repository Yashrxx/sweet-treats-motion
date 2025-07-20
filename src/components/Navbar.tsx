import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/95 backdrop-blur-md shadow-soft'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary transition-colors duration-300">
              Golden Crust
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-semibold relative group transition-colors duration-300 ${location.pathname === item.href
                  ? (isScrolled
                    ? 'text-primary'
                    : 'text-golden') // always golden when not scrolled
                  : isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-[#a97438] hover:text-golden'
                  }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${location.pathname === item.href
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                    } ${isScrolled ? 'bg-primary' : 'bg-golden'}`}
                ></span>
              </Link>

            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={`transition-colors duration-300 ${isScrolled || location.pathname === '/products' || location.pathname === '/contact'
                  ? 'text-foreground hover:bg-accent hover:text-primary'
                  : 'text-white hover:bg-white/10 hover:text-golden'
                }`}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Cart
            </Button>
            <Button
              size="sm"
              className={`transition-all duration-300 hover:scale-105 ${isScrolled || location.pathname === '/products' || location.pathname === '/contact'
                  ? 'bg-gradient-hero text-primary-foreground'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-primary'
                }`}
            >
              Visit Our Store
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden transition-colors duration-300 ${isScrolled
              ? 'text-foreground hover:bg-accent'
              : 'text-white hover:bg-white/10'
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md transition-colors duration-300 font-medium ${location.pathname === item.href
                    ? 'text-primary bg-accent'
                    : 'text-foreground hover:text-primary hover:bg-accent'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-2">
                <Button variant="ghost" size="sm" className="justify-start text-foreground hover:text-primary hover:bg-accent">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Cart
                </Button>
                <Button size="sm" className="bg-gradient-hero text-primary-foreground">
                  Visit Our Store
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;