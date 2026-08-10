import { z } from 'zod';

export const MetaSchema = z.object({
  barcode: z.string(),
  createdAt: z.string(),
  qrCode: z.string(),
  updatedAt: z.string(),
});
