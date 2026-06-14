import { useState } from 'react';
import { useParams } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { trpc } from '@/lib/trpc';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';
import { useAuth } from '@/_core/hooks/useAuth';
import { getLoginUrl } from '@/const';

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuth();

  const productId = id ? parseInt(id) : 0;
  const { data: product, isLoading } = trpc.products.getById.useQuery(productId);
  const addToCart = trpc.products.addToCart.useMutation();

  const handleAddToCart = async () => {
    if (!user) {
      window.location.href = getLoginUrl();
      return;
    }

    try {
      await addToCart.mutateAsync({
        productId,
        quantity,
      });
      toast.success(`Added ${quantity} to cart!`);
      setQuantity(1);
    } catch (error) {
      toast.error('Failed to add to cart');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <Spinner className="w-8 h-8" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const priceInDollars = (product.price / 100).toFixed(2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Product Detail Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square bg-card rounded-lg border border-border overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23333" width="400" height="400"/%3E%3Ctext x="50%" y="50%" font-size="20" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EImage not available%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-4xl font-bold text-accent mb-4">
                  ${priceInDollars}
                </p>
                <p className="text-muted-foreground text-lg">
                  {product.description || 'Research-grade peptide product'}
                </p>
              </div>

              {/* Stock Status */}
              <div className="p-4 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Stock: <span className="text-foreground font-semibold">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold min-w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                disabled={addToCart.isPending || product.stock === 0}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6"
              >
                {addToCart.isPending ? 'Adding to Cart...' : 'Add to Cart'}
              </Button>

              {/* Disclaimer */}
              <div className="p-4 bg-muted/20 border border-border rounded-lg">
                <p className="text-xs text-muted-foreground">
                  This product is sold for research, laboratory, or analytical purposes only and is not for human consumption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
