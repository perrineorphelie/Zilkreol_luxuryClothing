const sections = [
  { heading: '1. Acceptance of Terms', body: 'By accessing or using the Zilkreol website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our site.' },
  { heading: '2. Use of the Website', body: 'You may use this website for lawful personal and non-commercial purposes only. You agree not to reproduce, duplicate, copy, sell, or exploit any portion of the website without our express written permission.' },
  { heading: '3. Intellectual Property', body: 'All content on this website — including images, text, design, trademarks, and product descriptions — is the intellectual property of Zilkreol and may not be used without prior written consent.' },
  { heading: '4. Product Information', body: 'We make every effort to display product colours and details accurately. However, due to variations in screen settings, we cannot guarantee exact colour accuracy. All prices are subject to change without notice.' },
  { heading: '5. Limitation of Liability', body: 'Zilkreol shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or our products, to the fullest extent permitted by law.' },
  { heading: '6. Governing Law', body: 'These Terms of Use are governed by the laws of England and Wales. Any disputes arising shall be subject to the exclusive jurisdiction of the English courts.' },
  { heading: '7. Changes to Terms', body: 'We reserve the right to modify these terms at any time. Continued use of the website after any changes constitutes acceptance of the revised terms.' },
];

export default function TermsOfUse() {
  return (
    <div className="w-full min-h-screen pb-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">Legal</p>
          <h1 className="text-3xl font-light uppercase tracking-[0.15em]">Terms of Use</h1>
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