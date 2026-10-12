import { ProductModel } from './models/Product.model';
import { WATCH_PRODUCTS } from '../data/products';

export const seedProductsToMongoDB = async (): Promise<number> => {
  try {
    const existingCount = await ProductModel.countDocuments();
    if (existingCount === 0) {
      console.log('[MongoDB Seed] Seeding 15 watch products into MongoDB collection...');
      await ProductModel.insertMany(WATCH_PRODUCTS);
      console.log(`[MongoDB Seed] Successfully seeded ${WATCH_PRODUCTS.length} watches into MongoDB!`);
      return WATCH_PRODUCTS.length;
    }
    return existingCount;
  } catch (error) {
    console.error('[MongoDB Seed Error]:', error);
    return 0;
  }
};
