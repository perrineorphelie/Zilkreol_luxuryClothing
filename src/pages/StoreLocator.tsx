// src/pages/StoreLocator.tsx
export default function StoreLocator() {
  const stores = [
    { city: 'New York', address: 'Madison Avenue', phone: '+1 212 555 0100', hours: 'Mon-Sat 10am-7pm' },
    { city: 'Paris', address: 'Avenue des Champs-Élysées', phone: '+33 1 55 01 00', hours: 'Mon-Sat 10am-7pm' },
    { city: 'London', address: 'Bond Street', phone: '+44 20 7499 00', hours: 'Mon-Sat 10am-7pm' },
    { city: 'Tokyo', address: 'Ginza', phone: '+81 3 5550 0100', hours: 'Mon-Sat 10am-7pm' },
    { city: 'Dubai', address: 'Mall of the Emirates', phone: '+971 4 341 00', hours: 'Mon-Sat 10am-10pm' },
    { city: 'Los Angeles', address: 'Rodeo Drive', phone: '+1 310 555 0100', hours: 'Mon-Sat 10am-7pm' },
  ];

  return (
    <div className="w-full min-h-screen pt-8 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-light tracking-wider uppercase mb-4 text-center">Find a Boutique</h1>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Visit us for an immersive luxury experience with personalized service.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <div key={store.city} className="border border-gray-200 p-6 hover:border-black transition-colors">
              <h3 className="text-lg uppercase tracking-wider mb-4 font-light">{store.city}</h3>
              <p className="text-sm text-gray-600 mb-1">{store.address}</p>
              <p className="text-sm text-gray-600 mb-1">{store.phone}</p>
              <p className="text-sm text-gray-600 mb-4">{store.hours}</p>
              <div className="flex gap-2">
                <button className="flex-1 py-2 border border-black text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                  Directions
                </button>
                <button className="flex-1 py-2 bg-black text-white text-xs uppercase tracking-wider hover:bg-gray-800 transition-colors">
                  Book Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}