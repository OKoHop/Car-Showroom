import { z } from 'zod';

export const ReviewsSchema = z.object({
  rating: z.number(),
  comment: z.string(),
  reviewerName: z.string(),
  reviewerEmail: z.string(),
  date: z.string(),
});
