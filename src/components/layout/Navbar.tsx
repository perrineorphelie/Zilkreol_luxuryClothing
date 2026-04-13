import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X, MapPin, Calendar, Phone } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.tsx';
import AuthModal from '../auth/AuthModal.tsx';
import {useCart } from '../../context/CartContext.tsx';

const mainNav = [
  { label: 'New', path: '/new' },
  { label: 'Outerwear', path: '/outerwear' },
  { label: 'Dresses', path: '/dresses' },
  { label: 'Bottoms ', path: '/bottoms' },
  { label: 'Tops', path: '/tops' },
  { label: 'Footwear', path: '/footwear' },
  { label: 'Perfumes & Beauty', path: '/perfumes' },
  { label: 'Jewelry & Accessories', path: '/jewelry' },
  { label: 'Gifts', path: '/gifts' },
  { label: 'Beachwear & Swimwear', path: '/beachwear' },
  {label: 'Co-ords & Sets', path: '/coords' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  
  const { isAuthenticated } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      handleAuthClick('login');
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white w-full">
        {/* Top Bar - Services */}
        <div className="bg-black text-white text-xs py-2.5 px-4 w-full">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex justify-between items-center">
            <div className="flex gap-6">
              <Link to="/stores" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
                <MapPin size={14} /> Find a Store
              </Link>
              <Link to="/book" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
                <Calendar size={14} /> Book Appointment
              </Link>
              <Link to="/contact" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
                <Phone size={14} /> Contact Us
              </Link>
            </div>
            <span className="uppercase tracking-[0.2em] text-[10px]">Complimentary Shipping on All Orders</span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">

          {/* Logo Row */}
          <div className="flex items-center justify-between py-5 relative w-full">

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-50 transition-colors"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo - Centered */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <h1 className="text-3xl md:text-4xl font-light tracking-[0.5em] uppercase">
                Zilkreol
              </h1>
            </Link>

            {/* Icon Buttons */}
            <div className="flex items-center gap-1 ml-auto">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-3 hover:bg-gray-50 transition-colors"
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              {isAuthenticated ? (
                <button
                  onClick={handleProfileClick}
                  className="p-3 hover:bg-gray-50 transition-colors hidden sm:block"
                  aria-label="Profile"
                >
                  <User size={18} strokeWidth={1.5} />
                </button>
              ) : (
                <button
                  onClick={() => handleAuthClick('login')}
                  className="p-3 hover:bg-gray-50 transition-colors hidden sm:block text-xs uppercase tracking-wider"
                >
                  Sign In
                </button>
              )}

              <Link
                to="/wishlist"
                className="p-3 hover:bg-gray-50 transition-colors hidden sm:block"
                aria-label="Wishlist"
              >
                <Heart size={18} strokeWidth={1.5} />
              </Link>

              <Link
                to="/cart"
                className="p-3 hover:bg-gray-50 transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="absolute top-1.5 right-1.5 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </Link>
            </div>
          </div>

          {/* Nav Links Row - Desktop only */}
          <div className="hidden lg:flex justify-center gap-8 text-xs uppercase tracking-[0.15em] py-3 border-t border-gray-100">
            {mainNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-gray-500 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 shadow-lg">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-3xl mx-auto">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  const val = (e.currentTarget.elements.namedItem('search') as HTMLInputElement).value.trim();
                  if (val) {
                    setIsSearchOpen(false);
                    navigate(`/search?q=${encodeURIComponent(val)}`);
                  }
                }}
              >
                <input
                  name="search"
                  type="text"
                  placeholder="Search collections, items, styles..."
                  className="w-full px-4 py-3 border-b-2 border-black focus:outline-none text-lg bg-transparent"
                  autoFocus
                />
                <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">Press Enter to search</p>
              </form>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl">
            <div className="p-6 space-y-1">
              {mainNav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-3 text-sm uppercase tracking-wider border-b border-gray-100 hover:bg-gray-50 px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                {!isAuthenticated && (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleAuthClick('signup');
                    }}
                    className="w-full py-3 bg-black text-white text-sm uppercase tracking-wider"
                  >
                    Sign Up
                  </button>
                )}
                <Link
                  to="/stores"
                  className="block py-2 text-xs text-gray-500 uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Find a Store
                </Link>
                <Link
                  to="/book"
                  className="block py-2 text-xs text-gray-500 uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}