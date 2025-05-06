
import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-honey-light py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center">{t('about.title')}</h1>
          <p className="text-center mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600357077657-1f5b62a53226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9uZXklMjBmYXJtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" 
                alt="Al Attar Honey Farm" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t('about.story.title')}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('about.story.text')}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With roots in Yemen's ancient beekeeping traditions and a presence in the UAE market for over a decade, we've built a reputation for excellence and authenticity in every jar we produce.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founder, Abdullah Al Ameri, grew up watching his grandfather tend to beehives in the mountains of Yemen. This childhood experience instilled in him a deep respect for bees and the natural process of honey production. Today, that same respect guides our company's practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('about.mission.text')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work directly with beekeepers to ensure fair compensation and sustainable practices. By eliminating middlemen, we're able to maintain control over quality while supporting traditional beekeeping communities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 text-center">{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-honey-light rounded-lg text-center">
              <div className="w-16 h-16 bg-honey rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">{t('about.values.item1')}</h3>
              <p className="text-muted-foreground">
                We never compromise on purity. What you see is what you get – 100% natural honey.
              </p>
            </div>
            <div className="p-6 bg-honey-light rounded-lg text-center">
              <div className="w-16 h-16 bg-honey rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">{t('about.values.item2')}</h3>
              <p className="text-muted-foreground">
                We support sustainable beekeeping practices that protect bees and their habitats.
              </p>
            </div>
            <div className="p-6 bg-honey-light rounded-lg text-center">
              <div className="w-16 h-16 bg-honey rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">{t('about.values.item3')}</h3>
              <p className="text-muted-foreground">
                We continuously strive to exceed expectations in product quality and service.
              </p>
            </div>
            <div className="p-6 bg-honey-light rounded-lg text-center">
              <div className="w-16 h-16 bg-honey rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">{t('about.values.item4')}</h3>
              <p className="text-muted-foreground">
                We honor centuries-old beekeeping methods while embracing modern quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
