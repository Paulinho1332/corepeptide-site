import { Link } from 'wouter';
import { Product } from '@shared/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const priceInDollars = (product.price / 100).toFixed(2);

  return (
    <Link href={`/product/${product.id}`}>
      <a className="group">
        <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
          {/* Product Image */}
          <div className="relative w-full aspect-square bg-muted overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23333" width="200" height="200"/%3E%3Ctext x="50%" y="50%" font-size="14" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EImage not available%3C/text%3E%3C/svg%3E';
              }}
            />
            {/* Sale Badge (if applicable) */}
            <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
              Sale
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            <h3 className="text-sm md:text-base font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 mb-2">
              {product.name}
            </h3>
            <p className="text-lg md:text-xl font-bold text-accent">
              ${priceInDollars}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
