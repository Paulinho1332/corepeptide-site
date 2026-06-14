import { Plane, Award, Headphones } from 'lucide-react';
import { Link } from 'wouter';

export default function FeaturesBar() {
  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Free Delivery */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <Plane size={48} className="text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-accent">Free Delivery</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Any purchase of $200 or more qualifies for free delivery within the USA.
              </p>
            </div>
          </div>

          {/* Highest Quality Peptides */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <Award size={48} className="text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-accent">Highest Quality Peptides</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Our products are scientifically-formulated and produced in cGMP facilities.
              </p>
            </div>
          </div>

          {/* Online Support */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <Headphones size={48} className="text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-accent">Online Support</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Have questions? We can help. Email us or connect with us via our{' '}
                <Link href="/contact">
                  <a className="text-accent hover:text-accent/80 transition-colors underline">Contact</a>
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
