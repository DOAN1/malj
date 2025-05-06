
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1471943311424-646960669fbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
          alt="Honey" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-honey-darkest/80 to-honey-darkest/50"></div>
      </div>
      
      <div className="container-custom relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 md:mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-cream opacity-90 mb-8">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="bg-honey hover:bg-honey-dark text-white font-medium px-8 py-3 text-lg"
              asChild
            >
              <Link to="/products">{t('home.hero.cta')}</Link>
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
              asChild
            >
              <Link to="/about">{t('nav.about')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
