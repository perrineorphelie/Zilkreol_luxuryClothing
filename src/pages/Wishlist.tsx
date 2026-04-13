import { Link } from 'react-router-dom';
import { Heart, X, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const wishlistProducts = wishlist
    .map(id => products.find(p => p.id === id))
    .filter(Boolean) as typeof products;

  if (wishlistProducts.length === 0) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6 px-4">
        <Heart size={40} strokeWidth={1} className="text-gray-300" />
        <h1 className="text-2xl font-light tracking-[0.2em] uppercase">Your Wishlist</h1>
        <p className="text-sm text-gray-400 font-light">Save pieces you love and return to them anytime.</p>
        <Link
          to="/"
          className="mt-2 px-10 py-4 bg-black text-white text-xs uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors"
        >
          Explore Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen pb-24">

      {/* Header */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-1">Your Saved Pieces</p>
            <h1 className="text-3xl font-light tracking-[0.15em] uppercase">Wishlist</h1>
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-wider">
            {wishlistProducts.length} piece{wishlistProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistProducts.map(product => (
            <div key={product.id} className="group relative">

              {/* Remove button */}
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-3 right-3 z-10 p-1.5 bg-white/80 hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Remove from wishlist"
              >
                <X size={13} />
              </button>

              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] bg-gray-50 mb-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {(product.isNew || product.isExclusive) && (
                    <span className="absolute top-3 left-3 bg-black text-white text-[10px] uppercase tracking-wider px-2 py-1">
                      {product.isNew ? 'New' : 'Exclusive'}
                    </span>
                  )}
                </div>
              </Link>

              <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Zilkreol</p>
              <h3 className="text-xs uppercase tracking-wider font-light mb-1.5">{product.name}</h3>
              <p className="text-sm font-light mb-3">${product.price.toLocaleString()}</p>

              <button
                onClick={() => addToCart(product.id, product.sizes?.[0] ?? 'One Size', 1)}
                className="w-full py-2.5 border border-black text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag size={12} /> Add to Bag
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}