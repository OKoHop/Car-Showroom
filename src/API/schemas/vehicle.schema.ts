import { z } from 'zod';
import { ProductSchema } from './product.schema';

export const VehicleSchema = z.object({
  limit: z.number(),
  products: z.array(ProductSchema),
  skip: z.number(),
  total: z.number(),
});
