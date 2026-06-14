import { Link } from 'wouter';
import { CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Disclaimer Column */}
          <div className="space-y-4">
            <p className="text-sm text-gray-400 leading-relaxed">
              All products are sold for research, laboratory, or analytical purposes only, and are not for human consumption.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503A of the Federal Food, Drug, and Cosmetic act. Core Peptides is not an outsourcing facility defined under 503B of the Federal Food, Drug, and Cosmetic act.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Quick Links</h3>
            <nav className="space-y-3">
              <Link href="/peptides">
                <a className="text-gray-400 hover:text-accent transition-colors text-sm">Peptides for Sale</a>
              </Link>
              <Link href="/about">
                <a className="text-gray-400 hover:text-accent transition-colors text-sm">About Us</a>
              </Link>
              <Link href="/shipping">
                <a className="text-gray-400 hover:text-accent transition-colors text-sm">Shipping, Returns & Refunds</a>
              </Link>
              <Link href="/privacy">
                <a className="text-gray-400 hover:text-accent transition-colors text-sm">Privacy Policy</a>
              </Link>
              <Link href="/terms">
                <a className="text-gray-400 hover:text-accent transition-colors text-sm">Terms and Conditions</a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-400 hover:text-accent transition-colors text-sm">Contact</a>
              </Link>
            </nav>
          </div>

          {/* Payment Methods Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Now Accepting</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CreditCard size={24} className="text-accent" />
                <span className="text-gray-400 text-sm">Credit Cards</span>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard size={24} className="text-accent" />
                <span className="text-gray-400 text-sm">Debit Cards</span>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard size={24} className="text-accent" />
                <span className="text-gray-400 text-sm">Bank Transfers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-500">
            Copyright © 2026 Core Peptides. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
