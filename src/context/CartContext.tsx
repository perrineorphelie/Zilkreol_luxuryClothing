import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type CartItem = {
  productId: string;
  size: string;
  quantity: number;
};

interface CartContextType {
  items: CartItem[];
  addToCart: (productId: string, size: string, quantity: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('zilkreol_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('zilkreol_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (productId: string, size: string, quantity: number) => {
    setItems(prev => {
      const existing = prev.find(i => i.productId === productId && i.size === size);
      if (existing) {
        return prev.map(i =>
          i.productId === productId && i.size === size
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { productId, size, quantity }];
    });
  };

  const removeFromCart = (productId: string, size: string) => {
    setItems(prev => prev.filter(i => !(i.productId === productId && i.size === size)));
  };

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity < 1) return;
    setItems(prev =>
      prev.map(i => i.productId === productId && i.size === size ? { ...i, quantity } : i)
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};