export default function ArtOfCraft() {
  return (
    <div className="w-full min-h-screen pb-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4">The House of Zilkreol</p>
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-[0.15em] mb-6">Art of Craft</h1>
          <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xl mx-auto">
            Every seam, button, and bias cut is an act of intention.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: 'Fabric Selection', desc: 'We source exclusively from mills with at least three generations of expertise. Silk comes from Como. Cashmere from the Scottish Highlands. Wool suiting from the Portuguese interior. Each material is chosen for how it lives and ages — not how it photographs.' },
            { title: 'Pattern Cutting', desc: 'Our patterns are developed over multiple toile stages with real wearers, not dress forms. This ensures that every silhouette moves with the body — that sleeves fall correctly, that hems graze the right point on the ankle.' },
            { title: 'Atelier Partnerships', desc: 'We work with fewer than twenty workshops globally. Many have been making our pieces since the house began. These are collaborators who push back, refine, and elevate every design that passes through their hands.' },
            { title: 'Finishing', desc: 'Hand-rolled edges. Horn buttons sourced from sustainable suppliers. Invisible zip insertions. French seams throughout. The finishing of a Zilkreol garment is where hours become invisible — and where the difference is finally felt, not seen.' },
          ].map(item => (
            <div key={item.title} className="border-t border-gray-100 pt-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">{item.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}