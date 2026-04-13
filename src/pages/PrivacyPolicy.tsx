const sections = [
  { heading: '1. Information We Collect', body: 'We collect personal information you provide directly — including your name, email address, billing and shipping address, and payment details when you place an order. We also collect certain usage data automatically, including IP address, browser type, and pages visited, to improve your experience.' },
  { heading: '2. How We Use Your Information', body: 'Your information is used to process orders, communicate with you about your purchase, send relevant updates or collections (where you have opted in), and improve our services. We do not sell your personal data to third parties.' },
  { heading: '3. Sharing Your Information', body: 'We share your information only with trusted service providers necessary to fulfill your order (e.g. payment processors, shipping partners) and only to the extent required. All third-party partners are contractually bound to data protection standards.' },
  { heading: '4. Data Retention', body: 'We retain your personal data for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us.' },
  { heading: '5. Your Rights', body: 'Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal data. To exercise any of these rights, please contact our Data Protection team at privacy@zilkreol.com.' },
  { heading: '6. Cookies', body: 'We use essential cookies to maintain your session and shopping cart. We use analytics cookies (with your consent) to understand how our site is used. You may manage your cookie preferences at any time.' },
  { heading: '7. Contact', body: 'For any privacy-related questions, contact our team at privacy@zilkreol.com.' },
];

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen pb-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">Legal</p>
          <h1 className="text-3xl font-light uppercase tracking-[0.15em]">Privacy Policy</h1>
          <p className="text-xs text-gray-400 mt-3 uppercase tracking-wider">Last updated: January 2026</p>
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