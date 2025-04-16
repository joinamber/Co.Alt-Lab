
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">Effective Date: April 1, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">1.1. Co.Alt Lab is committed to safeguarding your privacy and ensuring that your data is handled in accordance with the Personal Data Protection Act (PDPA) of Singapore and international standards.</p>
            <p className="text-gray-300">1.2. This Privacy Policy explains how we collect, use, and protect your personal information when you access our website or use our software.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium mb-3">2.1. Personal Information:</h3>
            <p className="text-gray-300 mb-4">2.1.1. When you subscribe, inquire, or register with us, we may collect your name, email address, and any other contact details that you provide voluntarily.</p>
            
            <h3 className="text-xl font-medium mb-3">2.2. Usage Data:</h3>
            <p className="text-gray-300 mb-4">2.2.1. We automatically collect information such as your IP address, device and browser details, pages visited, and the duration of your visit.</p>
            
            <h3 className="text-xl font-medium mb-3">2.3. Cookies and Tracking Technologies:</h3>
            <p className="text-gray-300 mb-2">2.3.1. Cookies are used to enhance your experience, analyze trends, and secure the website.</p>
            <p className="text-gray-300">2.3.2. You may manage cookie settings via your browser, although this may affect the functionality of the site.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300">3.1. To deliver and continually improve our software and services.</p>
            <p className="text-gray-300">3.2. To respond to your inquiries and provide customer support.</p>
            <p className="text-gray-300">3.3. To personalize and tailor content for you.</p>
            <p className="text-gray-300">3.4. To analyze usage trends in order to enhance our products and services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-300">4.1. We do not sell or rent your personal information.</p>
            <p className="text-gray-300">4.2. Information may be shared with trusted third-party service providers (e.g., hosting, analytics) under strict confidentiality agreements.</p>
            <p className="text-gray-300">4.3. We may disclose information if required by law or necessary to protect our legal rights.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-gray-300">5.1. We implement industry-standard security measures, such as encryption, access controls, and regular audits, to protect your data.</p>
            <p className="text-gray-300">5.2. While we strive to maintain robust security practices, no online system is completely secure.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-300">6.1. Access & Correction: You have the right to review and update your personal information.</p>
            <p className="text-gray-300">6.2. Opt-Out: You may opt out of marketing communications or disable cookies, though certain features of the site may be affected.</p>
            <p className="text-gray-300">6.3. Data Deletion: Subject to legal and operational requirements, you can request deletion of your personal data.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. International Data Transfers</h2>
            <p className="text-gray-300">7.1. Personal data may be processed in jurisdictions outside Singapore.</p>
            <p className="text-gray-300">7.2. We ensure that all international transfers provide adequate protection in line with applicable international standards (e.g., GDPR).</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Policy Updates</h2>
            <p className="text-gray-300">8.1. Any updates to this Privacy Policy will be posted on this page along with the updated effective date.</p>
            <p className="text-gray-300">8.2. We encourage you to review this document periodically.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-gray-300">9.1. For any privacy concerns or questions, please contact us at:</p>
            <p className="text-gray-300">Email: <a href="mailto:hello@coaltlab.com" className="text-[#33C3F0] hover:text-[#0FA0CE]">hello@coaltlab.com</a></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
