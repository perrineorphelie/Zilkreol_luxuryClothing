import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronDown, Grid3X3, Grid2X2 } from 'lucide-react';
import { products } from '../data/products';
import { useAuth } from '../context/AuthContext';

type Props = {
  category: string;
  title: string;
  subtitle?: string;
  heroImage: string;
};

export default function CategoryPage({ category, title, subtitle, heroImage }: Props) {
  const [sortBy, setSortBy] = useState('featured');
  const [gridCols, setGridCols] = useState(3);
  const { addToWishlist, user } = useAuth();

  const filtered = products.filter(p =>
    category === 'new' ? p.isNew || p.isExclusive : p.category === category
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="w-full min-h-screen">

      {/* Hero Banner */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          {subtitle && (
            <p className="text-[10px] uppercase tracking-[0.4em] mb-3 text-white/70">{subtitle}</p>
          )}
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] uppercase">{title}</h1>
        </div>
      </section>

      {/* Toolbar */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-200 py-4 sticky top-[120px] bg-white z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-xs text-gray-400 uppercase tracking-wider">{sorted.length} pieces</p>
          <div className="flex items-center gap-6">
            <div className="relative flex items-center gap-2">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-xs uppercase tracking-[0.15em] pr-6 cursor-pointer focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={12} className="pointer-events-none text-gray-400" />
            </div>
            <div className="hidden md:flex items-center gap-1 border-l border-gray-200 pl-4">
              <button onClick={() => setGridCols(2)} className={`p-1.5 ${gridCols === 2 ? 'text-black' : 'text-gray-300'}`}>
                <Grid2X2 size={16} />
              </button>
              <button onClick={() => setGridCols(3)} className={`p-1.5 ${gridCols === 3 ? 'text-black' : 'text-gray-300'}`}>
                <Grid3X3 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className={`max-w-7xl mx-auto grid gap-8 ${
          gridCols === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'
        }`}>
          {sorted.map(product => (
            <div key={product.id} className="group">
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
                  <button
                    onClick={e => { e.preventDefault(); user && addToWishlist(product.id); }}
                    className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Heart size={15} strokeWidth={1.5} />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 text-[10px] uppercase tracking-[0.2em] text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    View Piece
                  </div>
                </div>
              </Link>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Zilkreol</p>
              <h3 className="text-xs uppercase tracking-wider mb-1.5 font-light">{product.name}</h3>
              <p className="text-sm font-light">${product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>

        {sorted.length === 0 && (
          <div className="max-w-7xl mx-auto text-center py-24">
            <p className="text-sm text-gray-400 uppercase tracking-wider">No pieces found in this collection.</p>
          </div>
        )}
      </div>
    </div>
  );
}