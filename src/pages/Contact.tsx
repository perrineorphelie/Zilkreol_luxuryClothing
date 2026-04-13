// src/pages/Contact.tsx
export default function Contact() {
  return (
    <div className="w-full min-h-screen pt-8 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-light tracking-wider uppercase mb-4 text-center">Contact Us</h1>
        <p className="text-center text-gray-500 mb-12">
          Our client services team is available to assist you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg uppercase tracking-wider mb-6 font-light">Client Services</h3>
            <div className="space-y-4 text-sm">
              <p className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Phone</span>
                <span>+1 800 ZILKREOL</span>
              </p>
              <p className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Email</span>
                <span>clientservices@zilkreol.com</span>
              </p>
              <p className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Hours</span>
                <span>Mon-Fri 9am-6pm EST</span>
              </p>
            </div>
          </div>

          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none" />
            <select className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none bg-white">
              <option>Inquiry Type</option>
              <option>Order Status</option>
              <option>Returns</option>
              <option>Product Information</option>
              <option>Other</option>
            </select>
            <textarea rows={4} placeholder="Message" className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"></textarea>
            <button className="w-full py-3 bg-black text-white uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}