import React from 'react';
import { ShoppingBag, Shield, Truck, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: 'Quality Products',
      description: 'We carefully curate and source high-quality products from trusted manufacturers to ensure customer satisfaction.'
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description: 'Enjoy quick and reliable delivery with our efficient shipping partners. Most orders arrive within 3-5 business days.'
    },
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Your security is our priority. We use advanced encryption and secure payment gateways for all transactions.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. We strive to provide exceptional service and support.'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in product quality and customer service.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships with our customers and fostering a supportive community.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Passionate about connecting people with products that enhance their lives.'
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="py-32 px-6 md:px-12 text-center" style={{ backgroundColor: 'var(--color-light-accent)' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight" style={{ color: 'var(--color-primary-dark)' }}>
            About MyBrand
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--color-secondary-subtle)' }}>
            Your trusted online destination for quality products and exceptional shopping experiences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Our Story */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
              Our Story
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--color-primary-accent)' }}></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
                  Founded with a Vision
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  MyBrand was born from a simple idea: to make quality products accessible to everyone,
                  regardless of location. We started as a small team passionate about connecting customers
                  with products that truly enhance their lives.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we serve thousands of satisfied customers across the country, offering a carefully
                  curated selection of products that combine quality, value, and innovation. Our commitment
                  to excellence drives everything we do, from product selection to customer service.
                </p>
              </div>
              <div className="bg-gradient-to-br rounded-lg p-8 text-center" style={{ background: `linear-gradient(135deg, var(--color-light-accent), var(--color-secondary-highlight))` }}>
                <div className="text-6xl font-bold mb-2" style={{ color: 'var(--color-primary-dark)' }}>2024</div>
                <div className="text-lg mb-4" style={{ color: 'var(--color-secondary-subtle)' }}>Founded</div>
                <div className="text-4xl font-bold" style={{ color: 'var(--color-primary-accent)' }}>10K+</div>
                <div className="text-lg" style={{ color: 'var(--color-secondary-subtle)' }}>Happy Customers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
              Why Choose MyBrand?
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--color-primary-accent)' }}></div>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-secondary-subtle)' }}>
              We're committed to providing an exceptional online shopping experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: 'var(--color-light-accent)' }}>
                  <feature.icon className="w-6 h-6" style={{ color: 'var(--color-primary-accent)' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-primary-dark)' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
              Our Values
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--color-primary-accent)' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: 'var(--color-primary-accent)' }}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-primary-dark)' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-primary-dark)' }}>
            Our Mission
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-gray-600">
            To revolutionize online shopping by providing a seamless, secure, and enjoyable experience
            that connects customers with products they love. We believe in building long-term relationships
            through trust, quality, and exceptional service.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;