
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Facebook, Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <Layout>
      <section className="bg-honey-light py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center">{t('contact.title')}</h1>
          <p className="text-center mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                We'd love to hear from you. Whether you have questions about our products, need assistance with an order, or want to share your experience, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-honey-light p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-honey-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{t('contact.address')}</h3>
                    <p className="text-muted-foreground">
                      Al Attar Honey, Sheikh Zayed Road<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-honey-light p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-honey-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{t('contact.phone')}</h3>
                    <p className="text-muted-foreground">
                      +971 50 123 4567<br />
                      +971 4 123 4567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-honey-light p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-honey-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{t('contact.email')}</h3>
                    <p className="text-muted-foreground">
                      info@alattarhoney.com<br />
                      support@alattarhoney.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-4">{t('contact.social')}</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-honey p-3 rounded-full text-white hover:bg-honey-dark transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-honey p-3 rounded-full text-white hover:bg-honey-dark transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="mailto:info@alattarhoney.com" className="bg-honey p-3 rounded-full text-white hover:bg-honey-dark transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="tel:+971501234567" className="bg-honey p-3 rounded-full text-white hover:bg-honey-dark transition-colors">
                    <Phone className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-cream p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        {t('contact.form.name')}
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        {t('contact.form.email')}
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium">
                        {t('contact.form.message')}
                      </label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        required 
                        className="w-full"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-honey hover:bg-honey-dark flex items-center justify-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      {t('contact.form.submit')}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-cream">
        <div className="container-custom">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.9327427603494!2d55.27272007551654!3d25.21663673251809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42815d6775a9%3A0x12439079adc9a1af!2sSheikh%20Zayed%20Rd%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1689172121157!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Attar Honey Location"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
