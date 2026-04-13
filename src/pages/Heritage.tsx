export default function Heritage() {
  return (
    <div className="w-full min-h-screen pb-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4">The House of Zilkreol</p>
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-[0.15em] mb-6">Our Heritage</h1>
          <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
            Founded on the belief that beauty is both discipline and instinct.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-3xl mx-auto space-y-14">
          {[
            { label: 'The Beginning', text: 'Zilkreol was born from a singular obsession: that luxury clothing should feel like a second skin — not a costume. Our founders spent years inside the ateliers of Milan and Paris before establishing the house with one tenet: uncompromising material integrity.' },
            { label: 'The Philosophy', text: 'We do not follow seasons. We observe them. Each collection is designed around the lived experience of the woman who wears it — where she is going, how she moves, what she wants to feel. The garment is always in service of the person.' },
            { label: 'The Craft', text: 'Every piece is constructed in partnership with family-run workshops in Italy, Portugal, Scotland, and Japan — chosen not for efficiency, but for mastery. We believe that who makes a garment is as important as how it is made.' },
            { label: 'The Future', text: 'Zilkreol is committed to a slower, more intentional way of dressing. We produce less, invest more, and stand behind every piece we make. Our goal is not to be everywhere — but to be exactly where you need us.' },
          ].map(item => (
            <div key={item.label} className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-100 pb-14">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">{item.label}</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-sm text-gray-600 font-light leading-loose">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}