// src/pages/BookAppointment.tsx
export default function BookAppointment() {
  return (
    <div className="w-full min-h-screen pt-8 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-light tracking-wider uppercase mb-4 text-center">Private Appointments</h1>
        <p className="text-center text-gray-500 mb-12">
          Experience personalized service with our fashion consultants.
        </p>

        <form className="space-y-6 bg-gray-50 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider mb-2 text-gray-600">First Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none bg-white" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider mb-2 text-gray-600">Last Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none bg-white" />
            </div>
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-wider mb-2 text-gray-600">Email</label>
            <input type="email" className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none bg-white" />
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-wider mb-2 text-gray-600">Preferred Date</label>
            <input type="date" className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none bg-white" />
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-wider mb-2 text-gray-600">Notes</label>
            <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none bg-white" placeholder="Tell us about your preferences..."></textarea>
          </div>
          
          <button className="w-full py-4 bg-black text-white uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">
            Request Appointment
          </button>
        </form>
      </div>
    </div>
  );
}