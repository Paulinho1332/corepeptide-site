import { drizzle } from 'drizzle-orm/mysql2';
import { products } from './drizzle/schema';
import * as fs from 'fs';

const productsData = JSON.parse(fs.readFileSync('/home/ubuntu/products.json', 'utf-8'));

const db = drizzle(process.env.DATABASE_URL!);

async function seedProducts() {
  try {
    console.log(`Seeding ${productsData.length} products...`);
    
    for (const product of productsData) {
      const priceStr = product.price.replace('$', '').replace(',', '');
      const priceInCents = Math.round(parseFloat(priceStr) * 100);
      
      await db.insert(products).values({
        name: product.name,
        price: priceInCents,
        image: product.image,
        description: product.name,
        stock: 100,
      });
    }
    
    console.log('✓ Products seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
}

seedProducts();
