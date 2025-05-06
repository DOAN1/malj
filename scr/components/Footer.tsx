
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-honey-darkest text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/">
              <img src="https://placehold.co/150x70?text=Al+Attar" alt="Al Attar Honey" className="h-12 mb-4" />
            </Link>
            <p className="text-cream mt-4 text-sm">
              Premium quality raw honey, sourced directly from the mountains of Yemen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream hover:text-honey transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-cream hover:text-honey transition-colors">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream hover:text-honey transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream hover:text-honey transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-medium mb-4">{t('contact.title')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+971 50 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@alattarhoney.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-medium mb-4">{t('contact.social')}</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-honey-darkest hover:bg-honey hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-honey-darkest hover:bg-honey hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:info@alattarhoney.com" className="bg-white p-2 rounded-full text-honey-darkest hover:bg-honey hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+971501234567" className="bg-white p-2 rounded-full text-honey-darkest hover:bg-honey hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm">
            &copy; {currentYear} Al Attar Honey. {t('footer.rights')}
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link to="/terms" className="text-cream hover:text-honey transition-colors">
              {t('footer.terms')}
            </Link>
            <Link to="/privacy" className="text-cream hover:text-honey transition-colors">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
