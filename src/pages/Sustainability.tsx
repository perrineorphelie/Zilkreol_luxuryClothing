export default function Sustainability() {
  return (
    <div className="w-full min-h-screen pb-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 border-b border-gray-100 bg-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4">The House of Zilkreol</p>
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-[0.15em] mb-6">Sustainability</h1>
          <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xl mx-auto">
            Luxury and responsibility are not opposing values. They are inseparable.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-3xl mx-auto space-y-10">
          {[
            { title: 'Less, Better', desc: 'We produce intentionally limited quantities of each piece — not as a marketing strategy, but because overproduction is antithetical to our values. Every garment we make should be worn, not warehoused.' },
            { title: 'Material Integrity', desc: 'We favour natural fibres — silk, cashmere, wool, linen, cotton — that biodegrade and improve with care. Where synthetic fibres are used, we prioritise recycled or certified sources.' },
            { title: 'Workshop Standards', desc: 'Every workshop we partner with is independently audited for fair wages, working conditions, and environmental compliance. We visit our makers personally and maintain long-term relationships built on mutual accountability.' },
            { title: 'Packaging', desc: 'Our packaging is FSC-certified, recyclable, and designed to be repurposed. We use water-based inks and tissue made from 100% recycled fibres. We are working toward fully plastic-free packaging across all markets by 2027.' },
            { title: 'Repair Programme', desc: 'We offer free repairs for any Zilkreol piece, regardless of when it was purchased. A garment that lasts twenty years is always more sustainable than one that lasts two. We stand behind everything we make.' },
          ].map(item => (
            <div key={item.title} className="border-b border-gray-100 pb-10">
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">{item.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}