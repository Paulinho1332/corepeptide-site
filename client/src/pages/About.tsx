import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Header */}
      <section className="bg-black text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Core Peptides</h1>
          <p className="text-gray-300 text-lg">
            Dedicated to providing the highest quality research peptides
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-accent">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Core Peptides is committed to providing researchers, laboratories, and analytical facilities with the highest quality peptides and peptide blends available in the industry. We maintain rigorous standards throughout our supply chain to ensure product purity and consistency.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-accent">Quality Standards</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                All of our products are scientifically-formulated and produced in cGMP facilities. We adhere to strict manufacturing protocols and quality control measures to guarantee that every product meets our exacting standards for research use.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>cGMP certified manufacturing facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Rigorous quality control testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Scientifically-formulated products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Comprehensive documentation and traceability</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-accent">Our Commitment</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We are dedicated to supporting the research community with reliable, high-quality peptide products and exceptional customer service. Our team is available to answer questions and provide support for your research needs.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-accent">Important Notice</h3>
              <p className="text-sm text-gray-400">
                All products are sold for research, laboratory, or analytical purposes only and are not for human consumption. Core Peptides is a chemical supplier and not a compounding pharmacy or facility as defined under the Federal Food, Drug, and Cosmetic Act.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
