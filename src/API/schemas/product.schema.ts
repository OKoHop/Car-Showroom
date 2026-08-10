import { z } from 'zod';
import { DimensionsSchema } from './dimensions.schema';
import { MetaSchema } from './meta.schema';
import { ReviewsSchema } from './reviews.schema';

export const ProductSchema = z.object({
  availabilityStatus: z.string(),
  brand: z.string(),
  category: z.string(),
  description: z.string(),
  dimensions: DimensionsSchema,
  discountPercentage: z.number(),
  id: z.number(),
  images: z.array(z.string()),
  meta: MetaSchema,
  minimumOrderQuantity: z.number(),
  price: z.number(),
  rating: z.number(),
  returnPolicy: z.string(),
  reviews: z.array(ReviewsSchema),
  shippingInformation: z.string(),
  sku: z.string(),
  stock: z.number(),
  tags: z.array(z.string()),
  thumbnail: z.string(),
  title: z.string(),
  warrantyInformation: z.string(),
  weight: z.number(),
});
