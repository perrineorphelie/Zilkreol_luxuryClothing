import { Link } from 'react-router-dom';

export default function PersonalStylist() {
  return (
    <div className="w-full min-h-screen pb-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">Exclusive Service</p>
          <h1 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] mb-6">Personal Stylist</h1>
          <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xl mx-auto">
            Our team of dedicated stylists offers a bespoke service tailored to your lifestyle, wardrobe goals, and personal aesthetic.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Virtual Consultation', desc: 'A one-hour video session with a Zilkreol stylist. Includes a curated selection of pieces sent to your inbox.', duration: '60 min' },
            { title: 'In-Store Appointment', desc: 'Visit one of our flagship locations for an immersive styling experience with private showroom access.', duration: '90 min' },
            { title: 'Wardrobe Edit', desc: 'A comprehensive wardrobe review and curation service, available in-home or virtually for our international clients.', duration: 'Half day' },
          ].map(service => (
            <div key={service.title} className="border border-gray-100 p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">{service.duration}</p>
              <h3 className="text-sm uppercase tracking-[0.15em] font-light mb-4">{service.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">{service.desc}</p>
              <Link
                to="/book"
                className="text-[10px] uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-gray-500 transition-colors"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}