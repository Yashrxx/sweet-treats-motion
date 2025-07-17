import { Star, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  image: string;
  title: string;
  rating: number;
  price: string;
  originalPrice?: string;
}

const ProductCard = ({ image, title, rating, price, originalPrice }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? 'fill-golden text-golden'
            : 'fill-none text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <Card className="group cursor-pointer bg-gradient-card border-0 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Button
          size="sm"
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground shadow-lg"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-1 mr-2">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-muted-foreground">({rating}.0)</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;