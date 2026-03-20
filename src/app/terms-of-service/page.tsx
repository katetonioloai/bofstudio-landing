import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-lg font-bold tracking-tight inline-block mb-12">
          <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">BOF</span>studio
        </Link>

        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Last updated: March 2026</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using BOFstudio (&quot;the Service&quot;), operated by Toniolo AI Agency (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Account Registration</h2>
            <p>To use certain features, you must create an account using Google OAuth. You are responsible for maintaining the security of your account and all activities that occur under it. You must be at least 18 years old to use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Service Description</h2>
            <p>BOFstudio provides tools for creating TikTok Shop bottom-of-funnel (BOF) video content, including text overlays and AI-generated captions. The Service is provided &quot;as is&quot; and may be updated, modified, or discontinued at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Pricing and Billing</h2>
            <p>BOFstudio offers free and paid subscription tiers billed monthly. Prices are subject to change with 30 days&apos; notice. Refunds are handled on a case-by-case basis. You may cancel your subscription at any time from your account dashboard.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Acceptable Use</h2>
            <p>You agree not to: (a) use the Service for any unlawful purpose; (b) upload content that infringes on intellectual property rights; (c) attempt to reverse-engineer or compromise the Service; (d) use the Service to generate misleading, fraudulent, or deceptive content; (e) resell access to the Service without authorization.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your Content</h2>
            <p>You retain ownership of all content you upload to BOFstudio. By using the Service, you grant us a limited license to process your content solely for the purpose of providing the Service. We do not claim ownership of your videos, images, or generated captions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Intellectual Property</h2>
            <p>The Service, including its design, features, and branding, is the intellectual property of Toniolo AI Agency. You may not copy, modify, or distribute any part of the Service without our written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Toniolo AI Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Termination</h2>
            <p>We may suspend or terminate your account at any time for violation of these terms. You may delete your account at any time. Upon termination, your right to use the Service ceases immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Changes to Terms</h2>
            <p>We may modify these terms at any time. Continued use of the Service after changes constitutes acceptance. We will notify users of material changes via email or in-app notification.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Florida, United States. Any disputes shall be resolved in the courts of Manatee County, Florida.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Contact</h2>
            <p>Questions about these terms? Contact us at support@bofstudio.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
