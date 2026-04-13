export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  addresses: Address[];
  orders: Order[];
  wishlist: string[];
  isAuthenticated: boolean;
}

export interface Address {
  id: string;
  type: 'shipping' | 'billing';
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  isNew?: boolean;
  isExclusive?: boolean;
  isSale?: boolean;
  rating: number;
  reviews: number;
  material?: string;
  care?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
  shippingAddress: Address;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface Appointment {
  id: string;
  date: Date;
  time: string;
  type: 'styling' | 'fitting' | 'private-shopping';
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed';
}