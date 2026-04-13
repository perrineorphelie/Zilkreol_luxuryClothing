import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Palette, Gift, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - Full Width with Luxury Image */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <img 
          src="https://i.pinimg.com/736x/df/44/be/df44beb5cb923d0336b242330ba3f5c0.jpg"
          alt="Zilkreol Haute Couture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-xs uppercase tracking-[0.4em] mb-6 text-white/80">Haute Couture 2026</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] mb-6 uppercase leading-tight">
            The Art of<br />Elegance
          </h1>
          <p className="text-base md:text-lg mb-10 max-w-lg mx-auto font-light text-white/90 leading-relaxed">
            Discover our new collection of exquisite craftsmanship<br className="hidden md:block" /> and timeless design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/shop"
              className="px-10 py-4 bg-white text-black uppercase tracking-[0.2em] text-xs font-medium hover:bg-gray-100 transition-all"
            >
              Explore Collection
            </Link>
            <Link 
              to="/book"
              className="px-10 py-4 border border-white text-white uppercase tracking-[0.2em] text-xs font-medium hover:bg-white hover:text-black transition-all"
            >
              Book Private Viewing
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Promise Bar */}
      <section className="w-full bg-black text-white py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex justify-center items-center gap-8 md:gap-16 text-[10px] uppercase tracking-[0.2em]">
          <span className="flex items-center gap-2"><Sparkles size={14} /> Complimentary Shipping</span>
          <span className="hidden md:flex items-center gap-2"><Gift size={14} /> Gift Packaging</span>
          <span className="hidden md:flex items-center gap-2"><Palette size={14} /> Personal Styling</span>
          <span className="flex items-center gap-2"><Calendar size={14} /> By Appointment</span>
        </div>
      </section>

      {/* Featured Collections - Full Width Grid */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { 
              name: 'Women', 
              image: 'https://i.pinimg.com/736x/d1/aa/27/d1aa274cb0f9d7d8e2a78edeb8c541b2.jpg',
              link: '/dresses',
              subtitle: 'Spring/Summer 2026'
            },
            { 
              name: 'Footwear',
              image: 'https://i.pinimg.com/1200x/02/f2/89/02f289d7242a5d45c923e087afa8149b.jpg',
              link: '/footwear',
              subtitle: 'Precision in Every Step'
            },
            { 
              name: 'Jewelry', 
              image: 'https://i.pinimg.com/736x/64/37/7a/64377ae58033e7e65525689a53fe1516.jpg',
              link: '/jewelry',
              subtitle: 'Fine & High Jewelry'
            },
          ].map((category) => (
            <Link 
              key={category.name}
              to={category.link}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] mb-2 opacity-80">{category.subtitle}</p>
                <h3 className="text-3xl md:text-4xl font-light tracking-[0.15em] uppercase mb-4">{category.name}</h3>
                <span className="text-xs uppercase tracking-[0.2em] border-b border-white/50 pb-1 group-hover:border-white transition-colors">
                  Discover
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">Just Arrived</p>
              <h2 className="text-2xl md:text-3xl font-light tracking-[0.1em] uppercase">New Arrivals</h2>
            </div>
            <Link to="/new" className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] hover:text-gray-600 transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Silk Evening Gown', price: '$4,500', image: 'https://i.pinimg.com/1200x/d9/49/1d/d9491db64a80abcae4476f7d8e46b5cc.jpg', tag: 'New' },
              { name: 'Crystal-Embellished Satin Sandals', price: '$3,200', image: 'https://i.pinimg.com/736x/97/14/a8/9714a82ee9ee8904a115f0eedfce5acd.jpg' },
              { name: 'Monogrammed Leather Tote bag', price: '$2,800', image: 'https://i.pinimg.com/1200x/81/3b/73/813b733b42f991fed6c2a1c5bd11f835.jpg', tag: 'Exclusive' },
              { name: 'Layered Gold Chain Necklace Set', price: '$8,000', image: 'https://i.pinimg.com/736x/f2/58/09/f258096a5ea2a5bb7cd987a2ced8bac9.jpg' },
            ].map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-black text-white text-[10px] uppercase tracking-wider px-2 py-1">
                      {product.tag}
                    </span>
                  )}
                  <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 text-xs uppercase tracking-[0.15em] translate-y-full group-hover:translate-y-0 transition-transform">
                    Quick Add
                  </button>
                </div>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Zilkreol</p>
                <h4 className="text-sm uppercase tracking-wider mb-1 font-light">{product.name}</h4>
                <p className="text-sm">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">Bespoke Services</p>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.1em] uppercase">The Zilkreol Experience</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Personal Stylist', 
                desc: 'Connect with our fashion experts for personalized recommendations and wardrobe curation.',
                link: '/stylist',
                cta: 'Book Consultation'
              },
              { 
                title: 'Gift Concierge', 
                desc: 'Personalized packaging, handwritten notes, and direct shipping to your loved ones.',
                link: '/gifts',
                cta: 'Explore Gifts'
              },
              { 
                title: 'Private Appointments', 
                desc: 'Exclusive access to our salons for a personalized shopping experience.',
                link: '/book',
                cta: 'Schedule Visit'
              },
            ].map((service) => (
              <div key={service.title} className="text-center p-8 bg-white">
                <h3 className="text-lg uppercase tracking-[0.15em] mb-4 font-light">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link to={service.link} className="text-xs uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier Section */}
      <section className="w-full relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
          alt="Zilkreol Atelier"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.4em] mb-4 text-white/80">Our Atelier</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-[0.1em] mb-6 uppercase">Crafted with Passion</h2>
            <p className="text-base md:text-lg mb-8 text-white/90 leading-relaxed font-light">
              Each Zilkreol piece is meticulously crafted by our master artisans,<br className="hidden md:block" /> combining traditional techniques with contemporary vision.
            </p>
            <Link 
              to="/craft"
              className="inline-block px-10 py-4 border border-white text-white uppercase tracking-[0.2em] text-xs font-medium hover:bg-white hover:text-black transition-all"
            >
              Discover Our Craft
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}