
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const products = [
  {
    id: 1,
    name: 'Sidr Honey',
    description: 'Premium pure Sidr honey from the mountains of Yemen',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    slug: 'sidr-honey',
  },
  {
    id: 2,
    name: 'Manuka Honey',
    description: 'Rare and sought-after honey with exceptional properties',
    image: 'https://images.unsplash.com/photo-1634141510639-d691d86dfed6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    slug: 'manuka-honey',
  },
  {
    id: 3,
    name: 'Wild Flower Honey',
    description: 'A delightful blend of multiple flower nectars',
    image: 'https://images.unsplash.com/photo-1587049352498-8bdeabc02e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    slug: 'wild-flower-honey',
  },
];

const FeaturedProducts: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.featured.title')}</h2>
          <div className="w-24 h-1 bg-honey mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <p className="text-honey-dark font-bold">{t('product.price')}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-honey hover:bg-honey-dark">
                  <Link to={`/products/${product.slug}`}>{t('product.cta')}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-honey text-honey-dark hover:bg-honey hover:text-white">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
