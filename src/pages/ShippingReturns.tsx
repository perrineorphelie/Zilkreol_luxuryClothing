import { Link } from 'react-router-dom';

export default function ShippingReturns() {
  const sections = [
    {
      title: 'Complimentary Shipping',
      content: 'All orders are dispatched with complimentary express shipping. Orders placed before 2:00 PM local time are processed the same business day. Delivery typically arrives within 2–5 business days depending on your location.',
    },
    {
      title: 'International Delivery',
      content: 'We ship to over 80 countries worldwide. International delivery times range from 5–10 business days. Import duties and taxes may apply and are the responsibility of the recipient.',
    },
    {
      title: 'Returns & Exchanges',
      content: 'We accept returns within 30 days of delivery for unworn, unaltered items in original condition with all tags attached. To initiate a return, contact our Client Services team. Exchanges can be arranged for a different size or colour where stock permits.',
    },
    {
      title: 'Final Sale Items',
      content: 'Items marked as "Exclusive" or purchased during a private sale event are considered final sale and cannot be returned or exchanged unless they arrive damaged or faulty.',
    },
    {
      title: 'Packaging',
      content: 'Each order arrives in our signature Zilkreol packaging — a black lacquered box with tissue and ribbon, suitable for gifting. Complimentary gift messaging is available at checkout.',
    },
  ];

  return (
    <div className="w-full min-h-screen pb-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">Client Services</p>
          <h1 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] mb-6">Shipping & Returns</h1>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Every Zilkreol order is handled with the care and discretion our pieces deserve.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map(section => (
            <div key={section.title} className="border-b border-gray-100 pb-10">
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">{section.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{section.content}</p>
            </div>
          ))}
          <div className="pt-4 text-center">
            <p className="text-sm text-gray-400 font-light mb-4">Still have questions?</p>
            <Link to="/contact" className="px-8 py-3 bg-black text-white text-xs uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}