import { getDb } from './server/db.ts';
import { products } from './drizzle/schema.ts';
import { isNull, eq } from 'drizzle-orm';

async function checkDescriptions() {
  const db = await getDb();
  if (!db) {
    console.error('Database not available');
    process.exit(1);
  }

  const result = await db.select({ name: products.name }).from(products).where(isNull(products.description));
  
  console.log(`Products without descriptions: ${result.length}`);
  result.forEach(p => console.log(`- ${p.name}`));
  
  process.exit(0);
}

checkDescriptions();
