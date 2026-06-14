import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-black via-black to-black overflow-hidden">
      {/* Diagonal wave pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,300 Q300,200 600,300 T1200,300 L1200,0 L0,0 Z"
            fill="white"
            opacity="0.1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Highest Quality
              <br />
              <span className="text-accent">Peptides For Sale</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
              We are proud to carry the highest quality peptides and peptide blends in the research industry.
            </p>

            <Link href="/peptides">
              <a>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 border-2 border-accent"
                >
                  BUY PEPTIDES
                </Button>
              </a>
            </Link>
          </div>

          {/* Right Image Placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-accent/20">
              <div className="text-center">
                <div className="text-6xl mb-4">💊</div>
                <p className="text-gray-400 text-sm">Product Imagery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal cut at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{
        clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'
      }} />
    </section>
  );
}
