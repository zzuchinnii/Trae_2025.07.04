import { prisma } from '@/lib/prisma';

export default async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
}