const PrivacyPolicy = () => {
  return (
    <div>
      {/* Page Heading */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-2">Privacy Policy</h1>
        <p className="text-gray-600 text-center">Last updated: January 2024</p>
      </div>

      {/* Content */}
      <div className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect the following information:<br />
                - Personal identification information (Name, email, phone number, address)<br />
                - Educational qualifications and academic records<br />
                - Payment and billing information<br />
                - Course progress and performance data<br />
                - Communication preferences and feedback
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information is used to:<br />
                - Process enrollments and manage student accounts<br />
                - Provide educational services and support<br />
                - Send important updates and notifications<br />
                - Improve our courses and services<br />
                - Comply with legal obligations<br />
                - Communicate promotional offers (with your consent)
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell or rent your personal information. We may share information with:<br />
                - Service providers who assist in our operations<br />
                - Legal authorities when required by law<br />
                - Parents or guardians (for students under 18)<br />
                All third parties are bound by confidentiality agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website uses cookies to enhance user experience and analyze website traffic. You can disable cookies in your browser settings, though this may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:<br />
                - Access your personal information<br />
                - Request correction of inaccurate data<br />
                - Request deletion of your data<br />
                - Opt-out of marketing communications<br />
                - Withdraw consent at any time
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information from students under 18 with parental consent. Parents can review and request deletion of their child's information by contacting us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Changes to Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this privacy policy periodically. We will notify you of significant changes through email or website notification.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                For privacy-related questions or concerns:<br />
                Email: privacy@eduinstitute.com<br />
                Phone: +91 (234) 567-890<br />
                Address: 123 Education Street, New Delhi, India 110001
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
