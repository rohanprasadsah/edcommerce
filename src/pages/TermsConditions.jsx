const TermsConditions = () => {
  return (
    <div>
      {/* Page Heading */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-2">Terms & Conditions</h1>
        <p className="text-gray-600 text-center">Last updated: January 2024</p>
      </div>

      {/* Content */}
      <div className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By enrolling in EduInstitute courses and using our services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not enroll in our courses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Enrollment and Admission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                - Admission is subject to availability and meeting eligibility criteria<br />
                - Students must provide accurate information during enrollment<br />
                - The institute reserves the right to refuse admission without stating reasons<br />
                - Age and educational qualifications as specified for each course must be met
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Fees and Payment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                - Course fees must be paid as per the schedule provided<br />
                - Fees once paid are non-refundable except as per our refund policy<br />
                - Late payment may result in suspension of services<br />
                - Additional charges may apply for extra services or materials
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Student Conduct</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Students are expected to:<br />
                - Maintain discipline and decorum on institute premises<br />
                - Respect faculty members and fellow students<br />
                - Attend classes regularly and punctually<br />
                - Complete assignments and tests as required<br />
                - Not engage in any unfair means during examinations
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All study materials, notes, and content provided by EduInstitute are proprietary and protected by copyright. Students may not reproduce, distribute, or share these materials without written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive for excellence, EduInstitute does not guarantee specific results or ranks in competitive examinations. Success depends on individual effort and dedication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EduInstitute reserves the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about these Terms and Conditions, please contact us at:<br />
                Email: legal@eduinstitute.com<br />
                Phone: +91 (234) 567-890
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
