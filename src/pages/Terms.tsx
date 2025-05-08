
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">Effective Date: April 1, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">1.1. This Agreement is entered into by Adaptive Intelligence Pte. Ltd., a Singapore company, acting through its Co.Alt Lab division (‘Adaptive Intelligence’).</p>
            <p className="text-gray-300">1.2. By accessing or using the Co.Alt Lab website and software, you agree to be bound by these Terms of Service and all applicable Singaporean and international laws.</p>
            <p className="text-gray-300">1.3. If you do not agree with any part of these Terms, please refrain from using our services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Permitted Use</h2>
            <h3 className="text-xl font-medium mb-3">2.1. Authorized Use:</h3>
            <p className="text-gray-300">2.1.1. You may use our services for lawful purposes in accordance with these Terms.</p>
            
            <h3 className="text-xl font-medium mb-3">2.2. Prohibited Conduct:</h3>
            <p className="text-gray-300">2.2.1. You agree not to misuse our services by transmitting harmful content, infringing on intellectual property rights, or engaging in any activity that violates applicable laws.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <p className="text-gray-300">3.1. All content on this website, including text, graphics, logos, and multimedia, is the property of Co.Alt Lab or its licensors.</p>
            <p className="text-gray-300">3.2. Reproduction, distribution, or creation of derivative works is prohibited without prior written permission, except as otherwise permitted by law.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. User-Generated Content</h2>
            <p className="text-gray-300">4.1. If you submit content or feedback, you grant Co.Alt Lab a worldwide, non-exclusive, transferable, irrevocable license to use, store, display, reproduce, and distribute your content.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Disclaimers and Limitation of Liability</h2>
            <h3 className="text-xl font-medium mb-3">5.1. As-Is Basis:</h3>
            <p className="text-gray-300">5.1.1. Our services are provided "as is" without any warranties, either express or implied.</p>
            
            <h3 className="text-xl font-medium mb-3">5.2. Limitation of Liability:</h3>
            <p className="text-gray-300">5.2.1. Co.Alt Lab will not be liable for any indirect, incidental, or consequential damages arising from your use of our services, even if we have been advised of the possibility of such damages.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Indemnification</h2>
            <p className="text-gray-300">6.1. You agree to indemnify and hold Co.Alt Lab, its affiliates, and their respective officers harmless from any claims, losses, or damages (including legal fees) arising from your use or misuse of our services or from your violation of these Terms.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
            <p className="text-gray-300">7.1. We reserve the right to revise these Terms at any time.</p>
            <p className="text-gray-300">7.2. Your continued use of our services following any changes constitutes acceptance of the updated Terms.</p>
            <p className="text-gray-300">7.3. We recommend that you review this page periodically for any updates.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-300">8.1. These Terms are governed by the laws of Singapore.</p>
            <p className="text-gray-300">8.2. Any disputes will be resolved in the appropriate Singaporean courts in accordance with local law.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p className="text-gray-300">9.1. For questions or concerns regarding these Terms of Service, please contact us at:</p>
            <p className="text-gray-300">Email: <a href="mailto:hello@coaltlab.com" className="text-[#33C3F0] hover:text-[#0FA0CE]">hello@coaltlab.com</a></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
