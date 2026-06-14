import { useState } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { trpc } from '@/lib/trpc';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';
import { useAuth } from '@/_core/hooks/useAuth';
import { getLoginUrl } from '@/const';
import { Trash2 } from 'lucide-react';

export default function Cart() {
  const { user, loading } = useAuth();
  const { data: cartItems, isLoading, refetch } = trpc.products.getCart.useQuery(undefined, {
    enabled: !!user,
  });

  const removeFromCart = trpc.products.removeFromCart.useMutation();
  const updateQuantity = trpc.products.updateCartItem.useMutation();

  if (loading || isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <Spinner className="w-8 h-8" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Please log in to view your cart</h1>
          <Button
            onClick={() => window.location.href = getLoginUrl()}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Log In
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleRemove = async (cartItemId: number) => {
    try {
      await removeFromCart.mutateAsync(cartItemId);
      await refetch();
      toast.success('Item removed from cart');
    } catch (error) {
      toast.error('Failed to remove item');
    }
  };

  const handleUpdateQuantity = async (cartItemId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    try {
      await updateQuantity.mutateAsync({ cartItemId, quantity: newQuantity });
      await refetch();
    } catch (error) {
      toast.error('Failed to update quantity');
    }
  };

  const cartItemsData = cartItems || [];
  const subtotal = cartItemsData.reduce((sum, item) => {
    return sum + ((item.product?.price || 0) * item.quantity);
  }, 0);

  const subtotalInDollars = (subtotal / 100).toFixed(2);
  const isFreeShipping = subtotal >= 20000; // $200 in cents

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Cart Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12">Shopping Cart</h1>

          {cartItemsData.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-6">Your cart is empty</p>
              <Link href="/peptides">
                <a>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Continue Shopping
                  </Button>
                </a>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItemsData.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-card border border-border rounded-lg"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.product?.image}
                        alt={item.product?.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23333" width="100" height="100"/%3E%3C/svg%3E';
                        }}
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{item.product?.name}</h3>
                      <p className="text-accent font-bold mb-4">
                        ${((item.product?.price || 0) / 100).toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 bg-muted rounded hover:bg-muted/80 transition-colors"
                        >
                          −
                        </button>
                        <span className="px-4 py-1 bg-muted rounded">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 bg-muted rounded hover:bg-muted/80 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors p-2"
                      title="Remove from cart"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-lg p-6 sticky top-20 space-y-4">
                  <h2 className="text-xl font-bold">Order Summary</h2>

                  <div className="space-y-2 border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal:</span>
                      <span className="font-semibold">${subtotalInDollars}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping:</span>
                      <span className="font-semibold">
                        {isFreeShipping ? (
                          <span className="text-accent">FREE</span>
                        ) : (
                          <span>
                            ${(subtotal >= 10000 ? 5 : 10).toFixed(2)}
                          </span>
                        )}
                      </span>
                    </div>
                  </div>

                  {!isFreeShipping && (
                    <div className="p-3 bg-muted/30 border border-accent/20 rounded text-sm text-muted-foreground">
                      Add ${((20000 - subtotal) / 100).toFixed(2)} more for free shipping!
                    </div>
                  )}

                  <div className="border-t border-border pt-4 flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-accent">
                      ${(subtotal / 100).toFixed(2)}
                    </span>
                  </div>

                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6"
                  >
                    Proceed to Checkout
                  </Button>

                  <Link href="/peptides">
                    <a>
                      <Button
                        variant="outline"
                        className="w-full"
                      >
                        Continue Shopping
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
