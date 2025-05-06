
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const benefits = [
  {
    id: 1,
    title: 'home.benefits.item1',
    description: 'Raw honey contains powerful antioxidants that help protect your body from cell damage.',
    icon: '🍯',
  },
  {
    id: 2,
    title: 'home.benefits.item2',
    description: 'Honey promotes the growth of good bacteria in the intestine, supporting digestive health.',
    icon: '🌿',
  },
  {
    id: 3,
    title: 'home.benefits.item3',
    description: 'The natural sugars in honey provide a quick energy boost without the crash of processed sugars.',
    icon: '⚡',
  },
  {
    id: 4,
    title: 'home.benefits.item4',
    description: 'Honey\'s natural antibacterial properties help soothe sore throats and suppress coughs.',
    icon: '🌡️',
  },
];

const Benefits: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section honeycomb-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.benefits.title')}</h2>
          <div className="w-24 h-1 bg-honey mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4 bg-honey-light w-16 h-16 flex items-center justify-center rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{t(benefit.title)}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
