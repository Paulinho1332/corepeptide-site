import { useState } from 'react';
import { Link } from 'wouter';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 text-2xl font-bold text-accent hover:text-accent/80 transition-colors">
              <span className="text-white">CORE</span>
              <span className="text-accent">PEPTIDES</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-foreground hover:text-accent transition-colors font-medium">Home</a>
            </Link>
            <Link href="/peptides">
              <a className="text-foreground hover:text-accent transition-colors font-medium">Peptides for Sale</a>
            </Link>
            <Link href="/about">
              <a className="text-foreground hover:text-accent transition-colors font-medium">About Us</a>
            </Link>
            <Link href="/contact">
              <a className="text-foreground hover:text-accent transition-colors font-medium">Contact</a>
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="text-foreground hover:text-accent transition-colors">
              <User size={24} />
            </button>
            <Link href="/cart">
              <a className="relative text-foreground hover:text-accent transition-colors">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </a>
            </Link>
            <button className="text-foreground hover:text-accent transition-colors">
              <Search size={24} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 flex flex-col gap-3">
            <Link href="/">
              <a className="text-foreground hover:text-accent transition-colors font-medium block py-2">Home</a>
            </Link>
            <Link href="/peptides">
              <a className="text-foreground hover:text-accent transition-colors font-medium block py-2">Peptides for Sale</a>
            </Link>
            <Link href="/about">
              <a className="text-foreground hover:text-accent transition-colors font-medium block py-2">About Us</a>
            </Link>
            <Link href="/contact">
              <a className="text-foreground hover:text-accent transition-colors font-medium block py-2">Contact</a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
