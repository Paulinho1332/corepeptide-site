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

      {/* Description Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="border-b border-border mb-8">
              <h2 className="text-2xl font-bold mb-6">{product.name}</h2>
            </div>
            
            <div className="space-y-8 text-foreground">
              {/* Main Description */}
              {product.description && (
                <div className="prose prose-invert max-w-none">
                  <div className="whitespace-pre-wrap text-base leading-relaxed text-muted-foreground">
                    {product.description}
                  </div>
                </div>
              )}
              
              {/* Chemical Makeup Section */}
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4">Chemical Specifications</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Product Name:</span> {product.name}</p>
                  <p><span className="font-semibold">Form:</span> Lyophilized powder</p>
                  <p><span className="font-semibold">Purity:</span> {'>'} 99%</p>
                  <p><span className="font-semibold">SKU:</span> P-{product.name.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().substring(0, 10)}</p>
                  <p><span className="font-semibold">Storage:</span> Store in a cool, dry place. Protect from light and moisture.</p>
                </div>
              </div>

              {/* Research Information */}
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4">Research Information</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This product is intended for research, laboratory, or analytical purposes only. It is not intended for human consumption, veterinary use, or any clinical application.
                </p>
                <p className="text-sm text-muted-foreground">
                  All products are supplied as research chemicals and should be handled by trained personnel in appropriate laboratory settings.
                </p>
              </div>

              {/* Usage Guidelines */}
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4">Usage Guidelines</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>For research and laboratory use only</li>
                  <li>Not for human or animal consumption</li>
                  <li>Handle in appropriate laboratory settings</li>
                  <li>Store in cool, dry place away from light</li>
                  <li>Keep out of reach of children</li>
                  <li>Follow all local regulations and guidelines</li>
                </ul>
              </div>

              {/* Important Disclaimer */}
              <div className="p-6 bg-amber-900/20 border border-amber-700/50 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-amber-100">Important Disclaimer</h3>
                <div className="space-y-3 text-sm text-amber-50/80">
                  <p>
                    All products are sold for research, laboratory, or analytical purposes only and are not for human consumption.
                  </p>
                  <p>
                    Core Peptides is a chemical supplier. Core Peptides is not a compounding pharmacy or chemical compounding facility as defined under 503A of the Federal Food, Drug, and Cosmetic act. Core Peptides is not an outsourcing facility defined under 503B of the Federal Food, Drug, and Cosmetic act.
                  </p>
                  <p>
                    The statements made within this website have not been evaluated by the US Food and Drug Administration. The products we offer are not intended to diagnose, treat, cure or prevent any disease.
                  </p>
                  <p>
                    Human/Animal Consumption Prohibited. Laboratory/In-Vitro Experimental Use Only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
