
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Benefits from '@/components/home/Benefits';
import Tradition from '@/components/home/Tradition';
import Testimonials from '@/components/home/Testimonials';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <Tradition />
      <Benefits />
      <Testimonials />
    </Layout>
  );
};

export default Index;
