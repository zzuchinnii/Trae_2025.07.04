import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem, CartState } from './types';

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product: Product) => {
        const { items } = get();
        const existingItem = items.find((item) => item.id === product.id);

        if (existingItem) {
          const updatedItems = items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set({ items: updatedItems });
        } else {
          set({ items: [...items, { ...product, quantity: 1 }] });
        }
      },
      removeFromCart: (productId: string) => {
        set({ items: get().items.filter((item) => item.id !== productId) });
      },
      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);