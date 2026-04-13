import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ChevronRight, Star, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'materials' | 'reviews'>('description');
  const [sizeError, setSizeError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Product not found</p>
          <Link to="/" className="text-xs uppercase tracking-widest border-b border-black pb-1">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images?.length ? product.images : [product.image];
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 1 && !selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addToCart(product.id, selectedSize || 'One Size', quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="w-full min-h-screen pb-24">

      {/* Breadcrumb */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-5 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to={`/${product.category}`} className="hover:text-black transition-colors capitalize">{product.category}</Link>
          <ChevronRight size={10} />
          <span className="text-black">{product.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

          {/* Image Gallery */}
          <div className="flex gap-4">
            {images.length > 1 && (
              <div className="flex flex-col gap-3 w-16 shrink-0">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square overflow-hidden border ${
                      selectedImage === i ? 'border-black' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
            <div className="relative flex-1 aspect-[3/4] bg-gray-50 overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {(product.isNew || product.isExclusive) && (
                <span className="absolute top-4 left-4 bg-black text-white text-[10px] uppercase tracking-wider px-3 py-1">
                  {product.isNew ? 'New' : 'Exclusive'}
                </span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Zilkreol</p>
            <h1 className="text-2xl md:text-3xl font-light uppercase tracking-[0.1em] mb-3">{product.name}</h1>
            <p className="text-xl font-light mb-8">${product.price.toLocaleString()}</p>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-[10px] uppercase tracking-widest">
                    Size {selectedSize && <span className="text-gray-500 ml-2">— {selectedSize}</span>}
                  </p>
                  <button className="text-[10px] uppercase tracking-widest text-gray-400 underline underline-offset-2 hover:text-black transition-colors">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => { setSelectedSize(size); setSizeError(false); }}
                      className={`px-4 py-2.5 text-xs uppercase tracking-wider border transition-colors ${
                        selectedSize === size
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-gray-200 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {sizeError && (
                  <p className="text-[10px] text-red-500 uppercase tracking-wider mt-2">Please select a size</p>
                )}
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-widest mb-3">Quantity</p>
              <div className="flex items-center border border-gray-200 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-6 text-sm font-light">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 text-xs uppercase tracking-[0.2em] transition-colors ${
                  addedToCart
                    ? 'bg-gray-700 text-white'
                    : 'bg-black text-white hover:bg-gray-900'
                }`}
              >
                {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-4 border transition-colors ${
                  inWishlist
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 hover:border-black'
                }`}
                aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                title={inWishlist ? 'Remove from wishlist' : 'Save to wishlist'}
              >
                <Heart
                  size={18}
                  strokeWidth={1.5}
                  className={inWishlist ? 'fill-white' : ''}
                />
              </button>
            </div>

            {/* Wishlist feedback */}
            {inWishlist && (
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-4 -mt-4">
                ✓ Saved to your wishlist
              </p>
            )}

            {/* Tabs */}
            <div className="border-t border-gray-100">
              <div className="flex gap-8 pt-4 mb-5">
                {(['description', 'materials', 'reviews'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[10px] uppercase tracking-widest pb-2 transition-colors ${
                      activeTab === tab
                        ? 'border-b border-black text-black'
                        : 'text-gray-400 hover:text-black'
                    }`}
                  >
                    {tab}{tab === 'reviews' && product.reviews?.length ? ` (${product.reviews.length})` : ''}
                  </button>
                ))}
              </div>

              {activeTab === 'description' && (
                <p className="text-sm text-gray-600 leading-relaxed font-light">{product.description}</p>
              )}
              {activeTab === 'materials' && (
                <p className="text-sm text-gray-600 leading-relaxed font-light">{product.materials}</p>
              )}
              {activeTab === 'reviews' && (
                <div className="space-y-5">
                  {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((review, i) => (
                      <div key={i} className="border-b border-gray-100 pb-5">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs uppercase tracking-wider font-light">{review.author}</p>
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider">{review.date}</p>
                        </div>
                        <div className="flex gap-0.5 mb-2">
                          {Array.from({ length: 5 }).map((_, s) => (
                            <Star
                              key={s}
                              size={11}
                              className={s < review.rating ? 'fill-black text-black' : 'text-gray-200'}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">{review.comment}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400 font-light">No reviews yet. Be the first.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {related.length > 0 && (
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2 text-center">Continue Exploring</p>
            <h2 className="text-xl font-light uppercase tracking-[0.15em] text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {related.map(p => (
                <Link to={`/product/${p.id}`} key={p.id} className="group">
                  <div className="relative aspect-[3/4] bg-gray-50 mb-3 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Zilkreol</p>
                  <h3 className="text-xs uppercase tracking-wider font-light mb-1">{p.name}</h3>
                  <p className="text-sm font-light">${p.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}