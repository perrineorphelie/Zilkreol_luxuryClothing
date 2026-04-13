// src/pages/Cart.tsx
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();

  const cartProducts = items.map(item => ({
    ...item,
    product: products.find(p => p.id === item.productId),
  })).filter(item => item.product);

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + (item.product!.price * item.quantity), 0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  if (cartProducts.length === 0) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6 px-4">
        <ShoppingBag size={40} strokeWidth={1} className="text-gray-300" />
        <h1 className="text-2xl font-light tracking-[0.2em] uppercase">Your Bag is Empty</h1>
        <p className="text-sm text-gray-400 font-light">Discover our collections and add pieces you love.</p>
        <Link
          to="/women"
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
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-1">Review Your Selection</p>
            <h1 className="text-3xl font-light tracking-[0.15em] uppercase">Shopping Bag</h1>
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-wider">
            {cartProducts.reduce((s, i) => s + i.quantity, 0)} item{cartProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-0">
            {/* Column Headers */}
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-100 text-[10px] uppercase tracking-widest text-gray-400">
              <span className="col-span-6">Product</span>
              <span className="col-span-2 text-center">Size</span>
              <span className="col-span-2 text-center">Qty</span>
              <span className="col-span-2 text-right">Total</span>
            </div>

            {cartProducts.map(({ product, productId, size, quantity }) => (
              <div
                key={`${productId}-${size}`}
                className="grid grid-cols-12 gap-4 py-6 border-b border-gray-100 items-center"
              >
                {/* Image + Name */}
                <div className="col-span-12 md:col-span-6 flex gap-4">
                  <Link to={`/product/${productId}`} className="shrink-0">
                    <div className="w-20 h-28 bg-gray-50 overflow-hidden">
                      <img
                        src={product!.image}
                        alt={product!.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-col justify-between py-1">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Zilkreol</p>
                      <Link to={`/product/${productId}`}>
                        <h3 className="text-xs uppercase tracking-wider font-light hover:text-gray-500 transition-colors">
                          {product!.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-gray-400 mt-1 md:hidden">Size: {size}</p>
                    </div>
                    <p className="text-sm font-light">${product!.price.toLocaleString()}</p>
                  </div>
                </div>

                {/* Size */}
                <div className="hidden md:flex col-span-2 justify-center">
                  <span className="text-xs uppercase tracking-wider text-gray-500">{size}</span>
                </div>

                {/* Quantity */}
                <div className="col-span-8 md:col-span-2 flex items-center justify-start md:justify-center gap-0">
                  <button
                    onClick={() => updateQuantity(productId, size, quantity - 1)}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-8 text-center text-sm font-light">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(productId, size, quantity + 1)}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Plus size={12} />
                  </button>
                </div>

                {/* Total + Remove */}
                <div className="col-span-4 md:col-span-2 flex items-center justify-end gap-3">
                  <span className="text-sm font-light">
                    ${(product!.price * quantity).toLocaleString()}
                  </span>
                  <button
                    onClick={() => removeFromCart(productId, size)}
                    className="p-1 text-gray-300 hover:text-black transition-colors"
                    aria-label="Remove"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <div className="pt-4">
              <button
                onClick={clearCart}
                className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors underline underline-offset-2"
              >
                Clear Bag
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 sticky top-36">
              <h2 className="text-xs uppercase tracking-[0.2em] mb-6 pb-4 border-b border-gray-200">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm font-light">
                  <span className="text-gray-500 uppercase tracking-wider text-xs">Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-light">
                  <span className="text-gray-500 uppercase tracking-wider text-xs">Shipping</span>
                  <span className="text-xs uppercase tracking-wider">Complimentary</span>
                </div>
              </div>

              <div className="flex justify-between text-sm font-light pt-4 border-t border-gray-200 mb-8">
                <span className="uppercase tracking-wider text-xs">Total</span>
                <span className="text-base">${total.toLocaleString()}</span>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 px-3 py-2.5 border border-gray-200 text-xs uppercase tracking-wider focus:outline-none focus:border-black bg-white"
                  />
                  <button className="px-4 py-2.5 border border-gray-200 text-xs uppercase tracking-wider hover:bg-black hover:text-white hover:border-black transition-colors bg-white">
                    Apply
                  </button>
                </div>
              </div>

              <button className="w-full py-4 bg-black text-white text-xs uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors flex items-center justify-center gap-3 mb-3">
                Proceed to Checkout <ArrowRight size={14} />
              </button>

              <Link
                to="/women"
                className="block text-center text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
              >
                Continue Shopping
              </Link>

              {/* Trust signals */}
              <div className="mt-8 pt-6 border-t border-gray-200 space-y-2">
                {['Complimentary shipping on all orders', 'Complimentary gift packaging', 'Secure checkout'].map(note => (
                  <p key={note} className="text-[10px] uppercase tracking-wider text-gray-400 text-center">{note}</p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}