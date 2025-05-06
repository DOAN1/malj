
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
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
    category: 'Yemeni',
  },
  {
    id: 2,
    name: 'Manuka Honey',
    description: 'Rare and sought-after honey with exceptional properties',
    image: 'https://images.unsplash.com/photo-1634141510639-d691d86dfed6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    slug: 'manuka-honey',
    category: 'International',
  },
  {
    id: 3,
    name: 'Wild Flower Honey',
    description: 'A delightful blend of multiple flower nectars',
    image: 'https://images.unsplash.com/photo-1587049352498-8bdeabc02e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    slug: 'wild-flower-honey',
    category: 'Yemeni',
  },
  {
    id: 4,
    name: 'Acacia Honey',
    description: 'Light and sweet honey with delicate floral notes',
    image: 'https://images.unsplash.com/photo-1589543648472-d6abaec02f17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    slug: 'acacia-honey',
    category: 'Yemeni',
  },
  {
    id: 5,
    name: 'Royal Honey',
    description: 'A specially crafted honey blend for enhanced energy',
    image: 'https://images.unsplash.com/photo-1592998661557-172f71bfb07c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    slug: 'royal-honey',
    category: 'Premium',
  },
  {
    id: 6,
    name: 'Mountain Honey',
    description: 'Sourced from high altitude flowers for unique flavor',
    image: 'https://images.unsplash.com/photo-1601063476307-45ab5794c102?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    slug: 'mountain-honey',
    category: 'Yemeni',
  },
];

const Products: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-honey-light py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center">{t('products.title')}</h1>
          <p className="text-center mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom">
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
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <span className="text-xs bg-honey text-white px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
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
        </div>
      </section>
    </Layout>
  );
};

export default Products;
