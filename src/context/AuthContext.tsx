import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { User, Address } from '../types/index.ts';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: SignupData) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  addAddress: (address: Omit<Address, 'id'>) => void;
}

interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('zilkreol_user');
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const login = async (email: string, _password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: '1',
      email,
      firstName: 'Guest',
      lastName: 'User',
      addresses: [],
      orders: [],
      wishlist: [],
      isAuthenticated: true
    };
    
    setUser(mockUser);
    localStorage.setItem('zilkreol_user', JSON.stringify(mockUser));
    return true;
  };

  const signup = async (userData: SignupData): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      addresses: [],
      orders: [],
      wishlist: [],
      isAuthenticated: true
    };
    
    setUser(newUser);
    localStorage.setItem('zilkreol_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('zilkreol_user');
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      const updated = { ...user, ...data };
      setUser(updated);
      localStorage.setItem('zilkreol_user', JSON.stringify(updated));
    }
  };

  const addToWishlist = (productId: string) => {
    if (user && !user.wishlist.includes(productId)) {
      const updated = { ...user, wishlist: [...user.wishlist, productId] };
      setUser(updated);
      localStorage.setItem('zilkreol_user', JSON.stringify(updated));
    }
  };

  const removeFromWishlist = (productId: string) => {
    if (user) {
      const updated = { ...user, wishlist: user.wishlist.filter(id => id !== productId) };
      setUser(updated);
      localStorage.setItem('zilkreol_user', JSON.stringify(updated));
    }
  };

  const addAddress = (address: Omit<Address, 'id'>) => {
    if (user) {
      const newAddress: Address = { ...address, id: Date.now().toString() };
      const updated = { ...user, addresses: [...user.addresses, newAddress] };
      setUser(updated);
      localStorage.setItem('zilkreol_user', JSON.stringify(updated));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      signup,
      logout,
      updateProfile,
      addToWishlist,
      removeFromWishlist,
      addAddress
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};