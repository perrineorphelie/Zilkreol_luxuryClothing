import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Heart, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Dresses', value: 'dresses' },
  { label: 'Outerwear', value: 'outerwear' },
  { label: 'Tops', value: 'tops' },
  { label: 'Bottoms', value: 'bottoms' },
  { label: 'Coords', value: 'coords' },
  { label: 'Beachwear', value: 'beachwear' },
  { label: 'Footwear', value: 'footwear' },
  { label: 'Jewelry', value: 'jewelry' },
  { label: 'Perfumes', value: 'perfumes' },
];

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'New Arrivals', value: 'new' },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const filtered = useMemo(() => {
    let list = activeCategory === 'all'
      ? [...products]
      : products.filter(p => p.category === activeCategory);

    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sortBy === 'new') list = list.filter(p => p.isNew).concat(list.filter(p => !p.isNew));

    return list;
  }, [activeCategory, sortBy]);

  return (
    <div className="w-full min-h-screen pb-24">

      {/* Page Header */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-3">Zilkreol</p>
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-[0.15em] mb-4">
            The Collection
          </h1>
          <p className="text-sm text-gray-400 font-light max-w-md mx-auto">
            Every piece, every category — the full world of Zilkreol.
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 py-3">

            {/* Category Pills — desktop */}
            <div className="hidden md:flex items-center gap-1 overflow-x-auto scrollbar-none">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`shrink-0 px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors ${
                    activeCategory === cat.value
                      ? 'bg-black text-white'
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Mobile filter toggle */}
            <button
              className="md:hidden flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]"
              onClick={() => setShowFilters(true)}
            >
              <SlidersHorizontal size={14} /> Filter
            </button>

            {/* Right: count + sort */}
            <div className="flex items-center gap-4 shrink-0 ml-auto">
              <p className="hidden sm:block text-[10px] uppercase tracking-wider text-gray-400">
                {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
              </p>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="text-[10px] uppercase tracking-wider text-gray-500 border-none outline-none bg-transparent cursor-pointer"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowFilters(false)} />
          <div className="relative ml-auto w-72 h-full bg-white flex flex-col p-8">
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs uppercase tracking-[0.2em]">Filter</p>
              <button onClick={() => setShowFilters(false)}><X size={18} /></button>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4">Category</p>
            <div className="flex flex-col gap-3">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => { setActiveCategory(cat.value); setShowFilters(false); }}
                  className={`text-left text-xs uppercase tracking-wider transition-colors ${
                    activeCategory === cat.value ? 'text-black font-medium' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-10">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-xs uppercase tracking-widest text-gray-400">No pieces found</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {filtered.map(product => (
                <div
                  key={product.id}
                  className="group"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] bg-gray-50 mb-4 overflow-hidden">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={
                          hoveredId === product.id && product.images && product.images[1]
                            ? product.images[1]
                            : product.image
                        }
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                    </Link>

                    {/* Badge */}
                    {(product.isNew || product.isExclusive) && (
                      <span className="absolute top-3 left-3 bg-black text-white text-[10px] uppercase tracking-wider px-2 py-1">
                        {product.isNew ? 'New' : 'Exclusive'}
                      </span>
                    )}

                    {/* Wishlist button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-3 right-3 p-2 transition-all ${
                        isInWishlist(product.id)
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-100'
                      } bg-white/80 hover:bg-white`}
                      aria-label="Toggle wishlist"
                    >
                      <Heart
                        size={14}
                        className={isInWishlist(product.id) ? 'fill-black text-black' : 'text-black'}
                      />
                    </button>

                    {/* Quick Add */}
                    <button
                      onClick={() => addToCart(product.id, product.sizes?.[0] ?? 'One Size', 1)}
                      className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 text-[10px] uppercase tracking-[0.2em] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Quick Add
                    </button>
                  </div>

                  {/* Info */}
                  <Link to={`/product/${product.id}`}>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Zilkreol</p>
                    <h3 className="text-xs uppercase tracking-wider font-light mb-1 leading-snug">{product.name}</h3>
                    <p className="text-sm font-light">${product.price.toLocaleString()}</p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}