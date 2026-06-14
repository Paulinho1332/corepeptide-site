import { useState } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trpc } from '@/lib/trpc';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';
import { useAuth } from '@/_core/hooks/useAuth';
import { getLoginUrl } from '@/const';

export default function Checkout() {
  const { user, loading } = useAuth();
  const [, navigate] = useLocation();
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const { data: cartItems, isLoading } = trpc.products.getCart.useQuery(undefined, {
    enabled: !!user,
  });

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
          <h1 className="text-2xl font-bold mb-4">Please log in to checkout</h1>
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

  const cartItemsData = cartItems || [];
  const subtotal = cartItemsData.reduce((sum, item) => {
    return sum + ((item.product?.price || 0) * item.quantity);
  }, 0);

  const isFreeShipping = subtotal >= 20000;
  const shippingCost = isFreeShipping ? 0 : (subtotal >= 10000 ? 500 : 1000);
  const total = subtotal + shippingCost;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate shipping address
    if (!formData.shippingAddress || !formData.shippingCity || !formData.shippingState || !formData.shippingZip) {
      toast.error('Please fill in all shipping address fields');
      return;
    }

    // Validate billing address if not same as shipping
    if (!sameAsShipping) {
      if (!formData.billingAddress || !formData.billingCity || !formData.billingState || !formData.billingZip) {
        toast.error('Please fill in all billing address fields');
        return;
      }
    }

    // Validate payment information
    if (paymentMethod === 'card') {
      if (!formData.cardName || !formData.cardNumber || !formData.cardExpiry || !formData.cardCvc) {
        toast.error('Please fill in all payment information');
        return;
      }
    }

    // In a real application, this would process the payment and create an order
    toast.success('Order placed successfully! Thank you for your purchase.');
    navigate('/');
  };

  if (cartItemsData.length === 0) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Add some peptides before checking out</p>
          <Button
            onClick={() => navigate('/peptides')}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Continue Shopping
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Checkout Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Shipping Address */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-accent">Shipping Address</h2>
                  <div>
                    <label className="block text-sm font-medium mb-2">Street Address</label>
                    <Input
                      name="shippingAddress"
                      value={formData.shippingAddress}
                      onChange={handleChange}
                      placeholder="123 Main Street"
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <Input
                        name="shippingCity"
                        value={formData.shippingCity}
                        onChange={handleChange}
                        placeholder="City"
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">State</label>
                      <Input
                        name="shippingState"
                        value={formData.shippingState}
                        onChange={handleChange}
                        placeholder="State"
                        className="w-full"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">ZIP Code</label>
                    <Input
                      name="shippingZip"
                      value={formData.shippingZip}
                      onChange={handleChange}
                      placeholder="12345"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                {/* Billing Address */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-accent">Billing Address</h2>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="sameAsShipping"
                      checked={sameAsShipping}
                      onChange={(e) => setSameAsShipping(e.target.checked)}
                      className="w-4 h-4 rounded border-border"
                    />
                    <label htmlFor="sameAsShipping" className="text-sm">
                      Same as shipping address
                    </label>
                  </div>

                  {!sameAsShipping && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2">Street Address</label>
                        <Input
                          name="billingAddress"
                          value={formData.billingAddress}
                          onChange={handleChange}
                          placeholder="123 Main Street"
                          className="w-full"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">City</label>
                          <Input
                            name="billingCity"
                            value={formData.billingCity}
                            onChange={handleChange}
                            placeholder="City"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">State</label>
                          <Input
                            name="billingState"
                            value={formData.billingState}
                            onChange={handleChange}
                            placeholder="State"
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">ZIP Code</label>
                        <Input
                          name="billingZip"
                          value={formData.billingZip}
                          onChange={handleChange}
                          placeholder="12345"
                          className="w-full"
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Payment Information */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-accent">Payment Information</h2>

                  {/* Payment Method Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Payment Method</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={paymentMethod === 'card'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm font-medium">Credit/Debit Card</span>
                      </label>
                      <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bank"
                          checked={paymentMethod === 'bank'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm font-medium">Bank Transfer</span>
                      </label>
                    </div>
                  </div>

                  {/* Card Payment Fields */}
                  {paymentMethod === 'card' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                        <Input
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Card Number</label>
                        <Input
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Expiry Date</label>
                          <Input
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            className="w-full"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">CVC</label>
                          <Input
                            name="cardCvc"
                            value={formData.cardCvc}
                            onChange={handleChange}
                            placeholder="123"
                            className="w-full"
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Bank Transfer Info */}
                  {paymentMethod === 'bank' && (
                    <div className="p-4 bg-muted/30 border border-accent/20 rounded text-sm text-muted-foreground">
                      <p className="font-semibold mb-2">Bank Transfer Instructions:</p>
                      <p>We will send you bank transfer details via email after you place your order.</p>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 text-lg"
                >
                  Place Order
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-20 space-y-4">
                <h2 className="text-xl font-bold">Order Summary</h2>

                {/* Cart Items */}
                <div className="space-y-3 max-h-64 overflow-y-auto border-b border-border pb-4">
                  {cartItemsData.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.product?.name} x {item.quantity}
                      </span>
                      <span className="font-semibold">
                        ${(((item.product?.price || 0) * item.quantity) / 100).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="font-semibold">${(subtotal / 100).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping:</span>
                    <span className="font-semibold">
                      {isFreeShipping ? (
                        <span className="text-accent">FREE</span>
                      ) : (
                        `$${(shippingCost / 100).toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-accent">${(total / 100).toFixed(2)}</span>
                  </div>
                </div>

                <div className="p-3 bg-muted/30 border border-accent/20 rounded text-xs text-muted-foreground">
                  This is a demo checkout. No actual charges will be made.
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
