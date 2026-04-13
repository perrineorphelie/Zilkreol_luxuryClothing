const sections = [
  { heading: 'What Are Cookies?', body: 'Cookies are small text files placed on your device when you visit a website. They allow the site to remember your preferences and improve your experience across sessions.' },
  { heading: 'Essential Cookies', body: 'These cookies are necessary for the website to function. They enable features such as your shopping cart, session management, and secure login. You cannot opt out of these cookies.' },
  { heading: 'Analytics Cookies', body: 'With your consent, we use analytics cookies to understand how visitors interact with our website. This data is aggregated and anonymous, and helps us improve our content and user experience.' },
  { heading: 'Marketing Cookies', body: 'Where permitted, we use marketing cookies to show you relevant Zilkreol content on other platforms. We do not share this data with third parties for their own marketing purposes.' },
  { heading: 'Managing Your Preferences', body: 'You can manage or withdraw your cookie consent at any time through your browser settings. Note that disabling certain cookies may affect the functionality of the site.' },
  { heading: 'Contact', body: 'For questions about our use of cookies, please contact us at privacy@zilkreol.com.' },
];

export default function CookiePolicy() {
  return (
    <div className="w-full min-h-screen pb-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">Legal</p>
          <h1 className="text-3xl font-light uppercase tracking-[0.15em]">Cookie Policy</h1>
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