import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { products } from '../data/products';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [input, setInput] = useState(query);

  useEffect(() => {
    setInput(query);
  }, [query]);

  const results = query.trim().length > 0
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setSearchParams({ q: input.trim() });
    }
  };

  return (
    <div className="w-full min-h-screen pb-24">

      {/* Search Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="flex items-center gap-4">
            <SearchIcon size={20} strokeWidth={1.5} className="text-gray-400 shrink-0" />
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Search collections, items, styles..."
              className="flex-1 py-3 border-b-2 border-black focus:outline-none text-xl bg-transparent font-light tracking-wide"
              autoFocus
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white text-xs uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Results */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-10">
        <div className="max-w-7xl mx-auto">

          {/* No query yet */}
          {query.trim().length === 0 && (
            <div className="text-center py-20">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Begin typing to search our collections
              </p>
            </div>
          )}

          {/* Query but no results */}
          {query.trim().length > 0 && results.length === 0 && (
            <div className="text-center py-20 space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                No results for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-gray-400 font-light">
                Try searching for a category — shoes, dresses, jewelry, eyewear
              </p>
            </div>
          )}

          {/* Results found */}
          {results.length > 0 && (
            <>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-1">
                    Search Results
                  </p>
                  <h1 className="text-2xl font-light uppercase tracking-[0.15em]">
                    &ldquo;{query}&rdquo;
                  </h1>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  {results.length} piece{results.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {results.map(product => (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="group"
                  >
                    <div className="relative aspect-[3/4] bg-gray-50 mb-3 overflow-hidden">
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
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Zilkreol</p>
                    <h3 className="text-xs uppercase tracking-wider font-light mb-1">{product.name}</h3>
                    <p className="text-sm font-light">${product.price.toLocaleString()}</p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}