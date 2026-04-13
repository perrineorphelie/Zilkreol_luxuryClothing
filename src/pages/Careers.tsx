import { Link } from 'react-router-dom';

const openRoles = [
  { role: 'Senior Womenswear Designer', location: 'Milan, Italy', type: 'Full-time' },
  { role: 'Client Relations Manager', location: 'London, UK', type: 'Full-time' },
  { role: 'E-Commerce Creative Producer', location: 'Remote', type: 'Full-time' },
  { role: 'Visual Merchandiser', location: 'Paris, France', type: 'Full-time' },
  { role: 'Sustainability & Compliance Coordinator', location: 'Lisbon, Portugal', type: 'Full-time' },
];

export default function Careers() {
  return (
    <div className="w-full min-h-screen pb-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4">The House of Zilkreol</p>
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-[0.15em] mb-6">Careers</h1>
          <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xl mx-auto">
            We are always looking for people who care as deeply about craft as we do.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6">Open Positions</p>
          <div className="space-y-px mb-16">
            {openRoles.map(job => (
              <div
                key={job.role}
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 py-5 gap-2"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider font-light">{job.role}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">
                    {job.location} · {job.type}
                  </p>
                </div>
                <button className="text-[10px] uppercase tracking-[0.2em] border-b border-black pb-0.5 self-start sm:self-auto hover:text-gray-500 transition-colors">
                  Apply
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-10 text-center">
            <p className="text-xs uppercase tracking-wider mb-3">Don't see your role?</p>
            <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
              We welcome speculative applications from exceptional candidates. Send your portfolio and a brief introduction to our team.
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 bg-black text-white text-xs uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}