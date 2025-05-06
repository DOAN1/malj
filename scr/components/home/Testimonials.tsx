
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed K.',
    location: 'Dubai, UAE',
    comment: 'The Sidr honey from Al Attar is the best I\'ve ever tasted. It has a deep, rich flavor that can\'t be compared to supermarket honey.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah M.',
    location: 'Abu Dhabi, UAE',
    comment: 'I love that this honey is 100% raw and natural. You can really taste the difference, and my family enjoys it every morning.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mohammed R.',
    location: 'Sharjah, UAE',
    comment: 'I\'ve been using Al Attar honey for my sore throat, and it works wonders. Plus, the delivery was fast and the packaging is beautiful.',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.testimonials.title')}</h2>
          <div className="w-24 h-1 bg-honey mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-honey' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
