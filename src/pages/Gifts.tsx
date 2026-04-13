import { Gift, MessageSquare, Package } from 'lucide-react';

function Gifts() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl uppercase tracking-wider text-center mb-4 font-light">
          The Art of Gifting
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Curated selections for your loved ones, with personalized packaging and direct shipping.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 border border-gray-200">
            <Gift className="mx-auto mb-4" size={32} />
            <h3 className="uppercase tracking-wider mb-2">Gift Cards</h3>
            <p className="text-sm text-gray-600 mb-4">Digital and physical gift cards available from $500.</p>
            <button className="text-sm uppercase underline">Purchase</button>
          </div>
          <div className="text-center p-8 border border-gray-200">
            <Package className="mx-auto mb-4" size={32} />
            <h3 className="uppercase tracking-wider mb-2">Personalization</h3>
            <p className="text-sm text-gray-600 mb-4">Monogramming and custom packaging options.</p>
            <button className="text-sm uppercase underline">Explore</button>
          </div>
          <div className="text-center p-8 border border-gray-200">
            <MessageSquare className="mx-auto mb-4" size={32} />
            <h3 className="uppercase tracking-wider mb-2">Gift Concierge</h3>
            <p className="text-sm text-gray-600 mb-4">Let our experts help you choose the perfect gift.</p>
            <button className="text-sm uppercase underline">Contact</button>
          </div>
        </div>

        {/* Direct Shipping Form */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-8">
          <h3 className="text-xl uppercase tracking-wider mb-6 text-center">Send a Gift Directly</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Recipient Name"
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
              />
              <input 
                type="email" 
                placeholder="Recipient Email"
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
              />
            </div>
            <textarea 
              placeholder="Recipient Address"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
            />
            <textarea 
              placeholder="Personal Message (optional)"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
            />
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Add premium gift wrapping ($50)</span>
            </label>
            <button 
              type="submit"
              className="w-full py-3 bg-black text-white uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              Continue to Select Items
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Gifts;