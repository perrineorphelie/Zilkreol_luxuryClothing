const sections = [
  { heading: 'Our Commitment', body: 'Zilkreol is committed to ensuring that our website is accessible to everyone, including people with disabilities. We continually work to improve the user experience for all visitors.' },
  { heading: 'Standards', body: 'We aim to meet WCAG 2.1 Level AA accessibility guidelines. This includes providing text alternatives for non-text content, ensuring sufficient colour contrast, and supporting keyboard navigation throughout the site.' },
  { heading: 'Assistive Technology', body: 'Our website is designed to be compatible with screen readers and other assistive technologies. We test our pages regularly with common tools to ensure compatibility.' },
  { heading: 'Known Issues', body: 'We are aware that some older pages and third-party integrations may not yet meet full accessibility standards. We are actively working to address these as part of our ongoing development.' },
  { heading: 'Feedback', body: 'If you experience any difficulty accessing any part of our website, please contact our team at accessibility@zilkreol.com. We will do our best to provide the information you need in an alternative format.' },
];

export default function Accessibility() {
  return (
    <div className="w-full min-h-screen pb-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">Legal</p>
          <h1 className="text-3xl font-light uppercase tracking-[0.15em]">Accessibility</h1>
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-14">
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map(section => (
            <div key={section.heading} className="border-b border-gray-100 pb-10">
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">{section.heading}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}