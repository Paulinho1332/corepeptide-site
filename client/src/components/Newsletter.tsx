import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const subscribe = trpc.products.subscribeNewsletter.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter an email address');
      return;
    }

    try {
      await subscribe.mutateAsync({ email });
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
    } catch (error) {
      toast.error('Failed to subscribe. Email may already be subscribed.');
    }
  };

  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Enjoy promotions and discounts
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
            />
            <Button
              type="submit"
              disabled={subscribe.isPending}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8"
            >
              {subscribe.isPending ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
