import React from "react";

const Legal = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Legal & Policies</h1>

      {/* Terms of Use */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">1. Terms of Use</h2>
        <p className="mb-4">
          By using this website, you agree to comply with and be bound by our terms and conditions. You must not misuse this site in any way that could damage or impair its availability or accessibility. All content, including products and services, is subject to change without prior notice.
        </p>
        <p className="mb-4">
          Unauthorized use of this website may give rise to a claim for damages or be a criminal offense. Your continued use of the site constitutes acceptance of any changes to these terms.
        </p>
      </section>

      {/* Privacy Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">2. Privacy Policy</h2>
        <p className="mb-4">
          We respect your privacy. Any personal information collected is used strictly to fulfill your orders, improve your shopping experience, and communicate updates or promotions if you've opted in.
        </p>
        <p className="mb-4">
          Your data is never sold or shared with third parties unless legally required. You may request access to or deletion of your personal information at any time by contacting us.
        </p>
      </section>

      {/* Cookies Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">3. Cookies Policy</h2>
        <p className="mb-4">
          Our website uses cookies to improve your experience and track usage data. Cookies help remember your preferences and enhance functionality like cart saving, wishlist, and language settings.
        </p>
        <p className="mb-4">
          By continuing to use the site, you consent to our use of cookies. You can manage or disable cookies in your browser settings, though this may affect site functionality.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Contact Information</h2>
        <p>
          If you have any questions about our legal or privacy policies, please contact us at{" "}
          <a href="/Contact" className="text-blue-600 underline">Contact Us</a>.
        </p>
      </section>
    </div>
  );
};

export default Legal;
