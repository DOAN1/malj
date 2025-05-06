
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Printer } from 'lucide-react';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Sidr Honey',
    description: 'Premium pure Sidr honey from the mountains of Yemen',
    longDescription: 'Sidr honey is one of the most premium varieties of honey in the world. Harvested from the nectar of the Sidr tree (Ziziphus spina-christi), this honey is known for its distinctive taste, aroma, and numerous health benefits. Our Sidr honey is collected from the remote mountains of Yemen, where the trees grow wild without any exposure to pesticides or chemicals.',
    benefits: [
      'Rich in antioxidants that help fight free radicals',
      'Contains natural enzymes that aid digestion',
      'Supports immune system function',
      'Natural source of energy',
    ],
    usage: 'Take one tablespoon daily on an empty stomach for optimal benefits. Can be mixed with warm water or enjoyed directly.',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    galleryImages: [
      'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1471943311424-646960669fbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1587049352498-8bdeabc02e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    ],
    reviews: [
      { id: 1, name: 'Ahmed K.', rating: 5, comment: 'The best Sidr honey I\'ve ever tasted. Worth every dirham!', date: '2023-04-15' },
      { id: 2, name: 'Fatima S.', rating: 5, comment: 'Excellent quality, my family loves it. Will order again.', date: '2023-03-22' },
      { id: 3, name: 'Mohammed A.', rating: 4, comment: 'Very good honey, tastes authentic and packaging is premium.', date: '2023-02-10' },
    ],
    slug: 'sidr-honey',
    category: 'Yemeni',
  },
  {
    id: 2,
    name: 'Manuka Honey',
    description: 'Rare and sought-after honey with exceptional properties',
    longDescription: 'Manuka honey is produced by bees that pollinate the Manuka bush (Leptospermum scoparium), which is native to New Zealand. It\'s renowned worldwide for its unique properties and is graded based on its concentration of certain compounds. Our Manuka honey is certified and imported directly from trusted producers.',
    benefits: [
      'Contains methylglyoxal (MGO), a compound with antibacterial properties',
      'Supports wound healing and skin health',
      'Soothes sore throats and digestive issues',
      'Helps maintain oral health',
    ],
    usage: 'Take one teaspoon daily for general wellbeing. Can be applied topically for skin concerns or consumed for internal benefits.',
    image: 'https://images.unsplash.com/photo-1634141510639-d691d86dfed6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    galleryImages: [
      'https://images.unsplash.com/photo-1634141510639-d691d86dfed6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1589543648472-d6abaec02f17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1601063476307-45ab5794c102?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ],
    reviews: [
      { id: 1, name: 'Sarah M.', rating: 5, comment: 'Amazing quality Manuka honey at a great price compared to other retailers.', date: '2023-05-01' },
      { id: 2, name: 'Hassan T.', rating: 5, comment: 'I use this for my morning tea and can really feel the difference in energy levels.', date: '2023-04-18' },
      { id: 3, name: 'Layla K.', rating: 4, comment: 'Good quality and fast delivery. Packaging could be improved.', date: '2023-03-05' },
    ],
    slug: 'manuka-honey',
    category: 'International',
  },
  // Add more products with similar structure
];

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const product = products.find(p => p.slug === slug);

  if (!product) {
    // Redirect to products page if product not found
    React.useEffect(() => {
      navigate('/products');
    }, [navigate]);
    return null;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.galleryImages.map((img, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img 
                    src={img} 
                    alt={`${product.name} - ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center mb-2">
              <span className="text-sm bg-honey text-white px-2 py-1 rounded">
                {product.category}
              </span>
              <button 
                onClick={handlePrint}
                className="ml-auto flex items-center text-sm text-muted-foreground hover:text-honey"
              >
                <Printer className="w-4 h-4 mr-1" />
                {t('product.print')}
              </button>
            </div>
            
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-honey"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                ({product.reviews.length} reviews)
              </span>
            </div>
            
            <p className="text-xl font-bold text-honey-dark mb-6">{t('product.price')}</p>
            
            <p className="text-muted-foreground mb-6">{product.description}</p>
            
            <div className="flex items-center p-4 bg-cream rounded-lg mb-6">
              <img 
                src="https://placehold.co/60x60?text=COD" 
                alt="Cash on Delivery" 
                className="w-12 h-12 mr-4"
              />
              <p className="text-sm">{t('product.delivery')}</p>
            </div>
            
            <Button className="w-full bg-honey hover:bg-honey-dark text-white flex items-center justify-center gap-2 py-6">
              <ShoppingCart className="w-5 h-5" />
              {t('product.cta')}
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="details">
            <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
              <TabsTrigger value="details">{t('product.details')}</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="reviews">{t('product.reviews')}</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">About this honey</h3>
                <p className="mb-4">{product.longDescription}</p>
                <h4 className="text-lg font-semibold mb-2">Usage Instructions</h4>
                <p>{product.usage}</p>
              </div>
            </TabsContent>
            <TabsContent value="benefits" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Health Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-honey mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="p-4 bg-cream rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-honey' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium">{review.name}</span>
                      <span className="ml-auto text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
