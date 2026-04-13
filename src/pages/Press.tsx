import { Link } from 'react-router-dom';

const publications = ['Vogue', "Harper's Bazaar", 'The Edit', 'Wallpaper*', 'Porter', 'Cultured', 'ELLE', 'AnOther'];

export default function Press() {
  return (
    <div className="w-full min-h-screen pb-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4">The House of Zilkreol</p>
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-[0.15em] mb-6">Press</h1>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            For press enquiries, imagery requests, and editorial collaborations.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8">As Seen In</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {publications.map(pub => (
                <div key={pub} className="border border-gray-100 py-5 px-4 text-center">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-light">{pub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-100 pt-14">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">Press Contact</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-2">
                For editorial and media enquiries:
              </p>
              <p className="text-sm text-gray-400 font-light">press@zilkreol.com</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">Image Requests</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                High-resolution campaign imagery, lookbook files, and product shots are available to accredited press upon request.
              </p>
              <Link
                to="/contact"
                className="text-[10px] uppercase tracking-[0.2em] border-b border-black pb-0.5 hover:text-gray-500 transition-colors"
              >
                Request Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}