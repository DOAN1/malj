
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.language': 'العربية',
    
    // Home
    'home.hero.title': 'Premium Raw Honey from Yemen',
    'home.hero.subtitle': 'Pure, Natural, and Chemical-Free',
    'home.hero.cta': 'Shop Now',
    'home.featured.title': 'Our Featured Products',
    'home.tradition.title': 'A Tradition of Excellence',
    'home.tradition.text': 'Since generations, our family has been committed to providing the purest honey from Yemen\'s finest apiaries.',
    'home.benefits.title': 'The Benefits of Raw Honey',
    'home.benefits.item1': 'Rich in Antioxidants',
    'home.benefits.item2': 'Supports Digestive Health',
    'home.benefits.item3': 'Natural Energy Source',
    'home.benefits.item4': 'Soothes Sore Throat',
    'home.testimonials.title': 'What Our Customers Say',
    
    // Products
    'products.title': 'Our Premium Honey Collection',
    'products.subtitle': 'Each jar is filled with 100% pure, raw honey',
    'product.price': 'AED 350',
    'product.cta': 'Add to Cart',
    'product.reviews': 'Customer Reviews',
    'product.details': 'Product Details',
    'product.delivery': 'Cash on Delivery Available',
    'product.print': 'Print Page',
    
    // About
    'about.title': 'About Al Attar Honey',
    'about.subtitle': 'A Journey of Passion and Purity',
    'about.story.title': 'Our Story',
    'about.story.text': 'Founded by Abdullah Al Ameri, Al Attar Honey brings the finest traditions of Yemeni beekeeping to the UAE. Our journey began with a simple mission: to provide the purest, most authentic honey experience.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'We are committed to preserving traditional beekeeping practices while ensuring the highest quality standards. Every jar of Al Attar Honey represents our dedication to purity, sustainability, and exceptional taste.',
    'about.values.title': 'Our Values',
    'about.values.item1': 'Authenticity',
    'about.values.item2': 'Sustainability',
    'about.values.item3': 'Excellence',
    'about.values.item4': 'Tradition',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We\'d love to hear from you',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.social': 'Follow Us',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.language': 'English',
    
    // Home
    'home.hero.title': 'عسل يمني فاخر',
    'home.hero.subtitle': 'نقي، طبيعي، وخالي من المواد الكيميائية',
    'home.hero.cta': 'تسوق الآن',
    'home.featured.title': 'منتجاتنا المميزة',
    'home.tradition.title': 'تقاليد التميز',
    'home.tradition.text': 'منذ أجيال، كانت عائلتنا ملتزمة بتوفير أنقى العسل من أفضل مناحل اليمن.',
    'home.benefits.title': 'فوائد العسل الطبيعي',
    'home.benefits.item1': 'غني بمضادات الأكسدة',
    'home.benefits.item2': 'يدعم صحة الجهاز الهضمي',
    'home.benefits.item3': 'مصدر طاقة طبيعي',
    'home.benefits.item4': 'يهدئ التهاب الحلق',
    'home.testimonials.title': 'ماذا يقول عملاؤنا',
    
    // Products
    'products.title': 'مجموعة العسل الفاخرة',
    'products.subtitle': 'كل جرة مليئة بعسل نقي 100٪',
    'product.price': '350 درهم',
    'product.cta': 'أضف إلى السلة',
    'product.reviews': 'آراء العملاء',
    'product.details': 'تفاصيل المنتج',
    'product.delivery': 'الدفع عند الاستلام متاح',
    'product.print': 'طباعة الصفحة',
    
    // About
    'about.title': 'عن عسل العطار',
    'about.subtitle': 'رحلة من الشغف والنقاء',
    'about.story.title': 'قصتنا',
    'about.story.text': 'تأسست على يد عبدالله العامري، تجلب عسل العطار أفضل تقاليد تربية النحل اليمنية إلى الإمارات. بدأت رحلتنا بمهمة بسيطة: توفير تجربة عسل أصلية ونقية.',
    'about.mission.title': 'مهمتنا',
    'about.mission.text': 'نحن ملتزمون بالحفاظ على ممارسات تربية النحل التقليدية مع ضمان أعلى معايير الجودة. كل جرة من عسل العطار تمثل تفانينا في النقاء والاستدامة والذوق الاستثنائي.',
    'about.values.title': 'قيمنا',
    'about.values.item1': 'الأصالة',
    'about.values.item2': 'الاستدامة',
    'about.values.item3': 'التميز',
    'about.values.item4': 'التقاليد',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'يسعدنا سماع رأيك',
    'contact.address': 'العنوان',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.social': 'تابعنا',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.terms': 'الشروط والأحكام',
    'footer.privacy': 'سياسة الخصوصية',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Apply RTL for Arabic
    if (language === 'ar') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
