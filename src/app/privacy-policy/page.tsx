import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-lg font-bold tracking-tight inline-block mb-12">
          <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">BOF</span>studio
        </Link>

        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: March 2026</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p><strong>Account Information:</strong> When you sign up via Google OAuth, we collect your name, email address, and profile picture as provided by Google.</p>
            <p><strong>Usage Data:</strong> We collect information about how you use the Service, including videos processed, features used, and interaction patterns.</p>
            <p><strong>Content:</strong> Videos and media you upload for processing. This content is temporarily stored during processing and is not retained after your video is generated.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p>We use your information to: (a) provide and improve the Service; (b) process your videos and generate content; (c) communicate with you about your account; (d) monitor usage against your subscription tier; (e) detect and prevent fraud or abuse.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Cookies and Tracking</h2>
            <p>We use essential cookies for authentication and session management. We may use analytics tools to understand how users interact with the Service. You can disable non-essential cookies in your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>Google OAuth</strong> — for authentication</li>
              <li><strong>Vercel</strong> — for hosting and infrastructure</li>
              <li><strong>Stripe</strong> — for payment processing (when applicable)</li>
            </ul>
            <p className="mt-2">Each third-party service has its own privacy policy governing the data they collect.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data, including encryption in transit (TLS) and at rest. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
            <p>Account information is retained as long as your account is active. Uploaded videos are processed and temporarily cached, then deleted within 24 hours. Generated outputs are available for download for 7 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p>You have the right to: (a) access the personal data we hold about you; (b) request correction of inaccurate data; (c) request deletion of your data and account; (d) export your data; (e) withdraw consent at any time. Contact us to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Children&apos;s Privacy</h2>
            <p>BOFstudio is not intended for users under 18 years of age. We do not knowingly collect information from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of significant changes via email or in-app notification. Continued use of the Service after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>For privacy-related inquiries, contact us at privacy@bofstudio.com.</p>
            <p className="mt-2">Toniolo AI Agency<br />Parrish, FL, United States</p>
          </section>
        </div>
      </div>
    </div>
  );
}
