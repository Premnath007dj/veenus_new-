import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CallToAction = () => {
  return (
    <section className="section bg-deep-charcoal">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-soft-cool-gray text-3xl font-bold mb-4">Let's Build Your Next-Generation Motor.</h2>
        <div className="mx-auto h-0.5 w-20 bg-energetic-green rounded-full mb-6" />
        <p className="text-soft-cool-gray/80 text-lg max-w-2xl mx-auto mb-8">
          Ready to discuss your project? Whether it's a medical device motor prototype or a high-efficiency water pump design, we're here to help you succeed. Let's collaborate.
        </p>
        <Link to="/contact">
          <Button size="lg" variant="electric" className="shadow-soft hover:scale-105">
            <Icon name="Mail" className="mr-3" />
            Get in Touch
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;