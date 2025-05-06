
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 bg-cream shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="https://placehold.co/100x50?text=Al+Attar" alt="Al Attar Honey" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-honey-darkest hover:text-honey transition-colors">
            {t('nav.home')}
          </Link>
          <Link to="/products" className="font-medium text-honey-darkest hover:text-honey transition-colors">
            {t('nav.products')}
          </Link>
          <Link to="/about" className="font-medium text-honey-darkest hover:text-honey transition-colors">
            {t('nav.about')}
          </Link>
          <Link to="/contact" className="font-medium text-honey-darkest hover:text-honey transition-colors">
            {t('nav.contact')}
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" onClick={toggleLanguage} className="font-medium">
            {t('nav.language')}
          </Button>
          <Button variant="outline" className="flex items-center">
            <ShoppingCart className="mr-2 h-4 w-4" />
            <span>0</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <Button variant="ghost" onClick={toggleLanguage} className="font-medium">
            {t('nav.language')}
          </Button>
          <Button variant="outline" size="icon" className="mr-2">
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream-dark py-4 px-6 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="font-medium text-honey-darkest hover:text-honey transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('nav.home')}
            </Link>
            <Link to="/products" className="font-medium text-honey-darkest hover:text-honey transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('nav.products')}
            </Link>
            <Link to="/about" className="font-medium text-honey-darkest hover:text-honey transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="font-medium text-honey-darkest hover:text-honey transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('nav.contact')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
