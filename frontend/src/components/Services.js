import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-card p-6 bg-white shadow-lg">
            <h3 className="text-xl font-bold">Awards</h3>
            <p className="mt-2">High-quality glass awards for all occasions.</p>
          </div>
          <div className="service-card p-6 bg-white shadow-lg">
            <h3 className="text-xl font-bold">Corporate Giveaways</h3>
            <p className="mt-2">Custom glass giveaways for your corporate events.</p>
          </div>
          <div className="service-card p-6 bg-white shadow-lg">
            <h3 className="text-xl font-bold">Glass Mirrors</h3>
            <p className="mt-2">Beautifully etched glass mirrors for homes and offices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;