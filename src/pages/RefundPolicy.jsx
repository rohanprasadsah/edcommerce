const RefundPolicy = () => {
  return (
    <div>
      {/* Page Heading */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-2">Refund Policy</h1>
        <p className="text-gray-600 text-center">Last updated: January 2024</p>
      </div>

      {/* Content */}
      <div className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Refund Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refund requests are considered under the following circumstances:<br />
                - Cancellation within 7 days of enrollment with less than 2 classes attended<br />
                - Course cancellation by the institute due to insufficient enrollment<br />
                - Technical issues preventing access to online classes (after proper verification)<br />
                - Medical emergencies with valid documentation
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Non-Refundable Fees</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The following fees are non-refundable:<br />
                - Registration and admission fees<br />
                - Study material and book costs<br />
                - Processing and administrative charges<br />
                - Fees paid after attending more than 10% of total classes<br />
                - Special discounts and scholarship amounts
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Refund Process</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request a refund:<br />
                1. Submit a written refund request to admin@eduinstitute.com<br />
                2. Include enrollment details and reason for refund<br />
                3. Provide supporting documents if applicable<br />
                4. Refund requests will be processed within 15-30 business days<br />
                5. Approved refunds will be credited to the original payment method
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Refund Amount Calculation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refund amounts are calculated as follows:<br />
                - Within 7 days of enrollment: 90% refund (minus registration fees)<br />
                - Within 15 days of enrollment: 70% refund (minus registration fees)<br />
                - Within 30 days of enrollment: 50% refund (minus registration fees)<br />
                - After 30 days: No refund applicable<br />
                - Processing fee of ₹500 will be deducted from all refunds
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Course Transfer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As an alternative to refunds, students may opt for:<br />
                - Transfer to a different batch of the same course<br />
                - Transfer to a different course of equal or lesser value<br />
                - Credit towards future courses (valid for 1 year)<br />
                Transfer requests are subject to availability and approval.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Special Circumstances</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In case of serious medical emergencies, family crises, or other exceptional situations, refund requests will be evaluated on a case-by-case basis by the management. Valid documentation must be provided.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Payment Gateway Charges</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any payment gateway charges, transaction fees, or bank charges incurred during the original payment will not be refunded and will be deducted from the refund amount.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you disagree with a refund decision, you may appeal by contacting our management at disputes@eduinstitute.com within 7 days of the decision. All decisions made by the management committee will be final.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For refund-related queries:<br />
                Email: refunds@eduinstitute.com<br />
                Phone: +91 (234) 567-890<br />
                Address: 123 Education Street, New Delhi, India 110001<br />
                Office Hours: Monday - Saturday, 9:00 AM - 6:00 PM
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
