import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'How do I find my size?', a: 'Each product page includes a size guide specific to that garment. We recommend consulting the guide and, if between sizes, sizing up for outerwear and down for tailoring. Our stylists are also available to advise.' },
  { q: 'Are your pieces made to order?', a: 'Select Exclusive pieces are produced in very limited quantities. While we do not offer made-to-order at this time, our Personal Stylist service can help source specific items or arrange alterations through our network of ateliers.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards, Apple Pay, Google Pay, and bank transfers for orders above $5,000. All transactions are encrypted and secured.' },
  { q: 'Can I amend or cancel my order?', a: 'Orders can be amended or cancelled within 1 hour of placement. After this window, our fulfilment team will have begun processing your order. Please contact Client Services immediately if changes are required.' },
  { q: 'Do you offer gift wrapping?', a: 'Yes. All orders arrive in our signature Zilkreol packaging. Complimentary gift messaging can be added at checkout. For bespoke gifting arrangements, contact our Client Services team.' },
  { q: 'Are your products authentic?', a: 'Every piece sold through Zilkreol is 100% authentic and sourced directly from designers or their authorised distributors. We do not work with grey-market suppliers.' },
  { q: 'How do I care for my garments?', a: 'Care instructions are included on the label of each garment and noted in the Materials section of each product page. We strongly recommend professional dry cleaning for silk, wool, and embellished pieces.' },
  { q: 'Do you have physical stores?', a: 'Yes. Please visit our Store Locator for current flagship locations and opening hours.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen pb-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">Client Services</p>
          <h1 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] mb-6">Frequently Asked Questions</h1>
          <p className="text-sm text-gray-500 font-light">Everything you need to know about shopping with Zilkreol.</p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-3xl mx-auto space-y-px">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100">
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-xs uppercase tracking-wider font-light">{faq.q}</span>
                {open === i ? <Minus size={14} className="shrink-0" /> : <Plus size={14} className="shrink-0" />}
              </button>
              {open === i && (
                <div className="pb-5">
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto pt-12 text-center border-t border-gray-100 mt-12">
          <p className="text-sm text-gray-400 font-light mb-4">Didn't find what you were looking for?</p>
          <Link to="/contact" className="px-8 py-3 bg-black text-white text-xs uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}