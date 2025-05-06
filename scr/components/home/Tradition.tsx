
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Tradition: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section bg-honey-darkest text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1592994554358-deac19fa779d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZWtlZXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" 
              alt="Traditional Honey Harvesting" 
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home.tradition.title')}</h2>
            <p className="text-lg mb-6 text-cream-dark leading-relaxed">
              {t('home.tradition.text')}
            </p>
            <p className="text-lg mb-6 text-cream-dark leading-relaxed">
              Our beekeepers follow sustainable practices passed down through generations, ensuring that each jar of honey we produce is of the highest quality, pure and untampered with.
            </p>
            <p className="text-lg text-cream-dark leading-relaxed">
              From the pristine mountains of Yemen to your table, we take pride in preserving the authentic taste and natural benefits of our honey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tradition;
