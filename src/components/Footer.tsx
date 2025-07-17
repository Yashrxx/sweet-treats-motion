import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-golden">Golden Crust</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Crafting artisanal baked goods with love and tradition since 1995. 
              Every loaf tells a story of passion and quality.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-golden hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-golden hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-golden hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-golden">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-golden" />
                <span className="text-primary-foreground/90">
                  123 Baker Street, Artisan Quarter, City
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-golden" />
                <span className="text-primary-foreground/90">
                  (555) 123-BREAD
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-golden" />
                <span className="text-primary-foreground/90">
                  hello@goldencrust.com
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-golden">Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-golden" />
                <div>
                  <div className="text-primary-foreground/90">Mon - Fri: 6:00 AM - 7:00 PM</div>
                  <div className="text-primary-foreground/90">Sat - Sun: 7:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-golden">Quick Links</h4>
            <div className="space-y-2">
              {['Our Story', 'Menu', 'Catering', 'Gift Cards', 'Nutrition Info', 'Careers'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-primary-foreground/80 hover:text-golden transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 Golden Crust Bakery. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/70 hover:text-golden transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-golden transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;