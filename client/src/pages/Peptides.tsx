import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { trpc } from '@/lib/trpc';
import { Spinner } from '@/components/ui/spinner';
import type { Product } from '@shared/types';

export default function Peptides() {
  const [sortBy, setSortBy] = useState('popularity');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const { data: allProducts, isLoading } = trpc.products.getAll.useQuery();

  useEffect(() => {
    if (allProducts) {
      setProducts(allProducts);
      filterAndSort(allProducts, searchTerm, sortBy);
    }
  }, [allProducts]);

  useEffect(() => {
    filterAndSort(products, searchTerm, sortBy);
  }, [searchTerm, sortBy]);

  const filterAndSort = (productsToFilter: Product[], search: string, sort: string) => {
    let filtered = productsToFilter;

    // Apply search filter
    if (search.trim()) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply sort
    let sorted = [...filtered];
    switch (sort) {
      case 'latest':
        sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'title-az':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'title-za':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sorted = [...filtered];
    }

    setFilteredProducts(sorted);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Header */}
      <section className="bg-black text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Peptides for Sale</h1>
          <p className="text-gray-300 text-lg">
            Browse our complete catalog of research-grade peptides
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Search and Sort Controls */}
          <div className="mb-8 space-y-4 md:flex md:items-center md:justify-between md:space-y-0">
            <input
              type="text"
              placeholder="Search peptides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 bg-card text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-card text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent md:ml-4"
            >
              <option value="popularity">Sort by popularity</option>
              <option value="latest">Sort by latest</option>
              <option value="price-low">Sort by price: low to high</option>
              <option value="price-high">Sort by price: high to low</option>
              <option value="title-az">Sort by title (A-Z)</option>
              <option value="title-za">Sort by title (Z-A)</option>
            </select>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-8">
            Showing {filteredProducts.length} of {products.length} products
          </p>

          {/* Products Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Spinner className="w-8 h-8" />
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No products found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
