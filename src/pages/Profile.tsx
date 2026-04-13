import { useState } from 'react';
import { useAuth } from '../context/AuthContext.tsx';
import { Package, Heart, MapPin, CreditCard, LogOut } from 'lucide-react';
import { Navigate } from 'react-router-dom';

export default function Profile() {
  const { user, logout, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('orders');

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const tabs = [
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
  ];

  return (
    <div className="w-full min-h-screen pt-8 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-light tracking-[0.1em] uppercase mb-2">My Account</h1>
          <p className="text-gray-500">Welcome back, {user?.firstName}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                    activeTab === tab.id ? 'bg-black text-white' : 'hover:bg-gray-50'
                  }`}
                >
                  <tab.icon size={18} />
                  <span className="uppercase tracking-wider">{tab.label}</span>
                </button>
              ))}
              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors mt-4"
              >
                <LogOut size={18} />
                <span className="uppercase tracking-wider">Sign Out</span>
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-lg uppercase tracking-wider mb-6 font-light">Order History</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Order #ZK-2026-001</p>
                        <p className="text-sm">Placed on March 15, 2026</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs uppercase tracking-wider">
                        Delivered
                      </span>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=100&h=130&fit=crop" alt="" className="w-16 h-20 object-cover" />
                      <div>
                        <p className="text-sm uppercase tracking-wider">Silk Evening Gown</p>
                        <p className="text-gray-500 text-sm">$4,500</p>
                      </div>
                    </div>
                    <button className="text-xs uppercase tracking-wider underline hover:no-underline">
                      View Order Details
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h2 className="text-lg uppercase tracking-wider mb-6 font-light">My Wishlist</h2>
                <p className="text-gray-500">{user?.wishlist.length || 0} items saved</p>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div>
                <h2 className="text-lg uppercase tracking-wider mb-6 font-light">Saved Addresses</h2>
                <button className="px-6 py-3 border border-black text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                  Add New Address
                </button>
              </div>
            )}

            {activeTab === 'payment' && (
              <div>
                <h2 className="text-lg uppercase tracking-wider mb-6 font-light">Payment Methods</h2>
                <p className="text-gray-500 mb-4">No saved payment methods</p>
                <button className="px-6 py-3 border border-black text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                  Add Payment Method
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}