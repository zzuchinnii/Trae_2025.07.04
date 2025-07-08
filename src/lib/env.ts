import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  // Add other environment variables here
});

try {
  envSchema.parse(process.env);
} catch (error) {
  console.error('Invalid environment variables:', error);
  process.exit(1);
}

export const env = envSchema.parse(process.env);