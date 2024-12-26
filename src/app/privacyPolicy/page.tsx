import Header from '../common/header';
import Footer from '../common/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - Think Life',
    description: 'Privacy Policy',
}

export default function privacyPolicy() {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-[1200px] px-8">
                <div className="page_heading mt-16 mb-9">
                    <h3><span>Privacy Policy</span></h3>
                </div>
                <div className="privacy_content">
                    <p>Think Life Insurance Solutions, Inc. (&apos;Think Life,&apos; &apos;we,&apos; &apos;our,&apos; or &apos;us&apos;) created this document to explain how we collect, use, disclose, and secure your information.</p>
                    <p>This Privacy Policy applies to the information we collect when you use our website https://thinklife.com (the &apos;Site&apos;) and services or communicate with us through email or phone.</p>
                    <p>By using our website and services, you consent to the practices described in this Privacy Policy. If you disagree with this Privacy Policy, you should stop using the Services immediately and follow the method outlined in the section headed &apos;Opting-Out.&apos;</p>
                    <p className='mb-[50px]'>We may modify our Privacy Policy periodically, so we invite you to return to this page regularly to get the most up-to-date information on our privacy standards.</p>

                    <h3 className="text-2xl font-black text_primary">1. Information We Collect</h3>
                    <p>We collect personal information from you when you visit our website, use our services, or communicate with us. The types of personal information we may collect include:</p>
                    <ol className='list mb-12'>
                        <li>Personal Identification Information: This includes your name, address, contact details, social security number, date of birth, and other information necessary to provide our services.</li>
                        <li>Financial Information: We may collect your financial information, such as bank account details and credit card information, to process payments and facilitate transactions.</li>
                        <li>Health Information: To provide life insurance services, we may collect health-related information, including medical history, lifestyle habits, and other relevant details.</li>
                        <li>Website Usage Information: When you visit our website, we may collect certain information automatically, such as your IP address, browser type, operating system, and browsing behavior. This information helps us improve our website and tailor our services to better meet your needs.</li>
                    </ol>

                    <h3 className="text-2xl font-black text_primary">1.1 Data Collection Technologies</h3>
                    <p>We use various technologies to automatically collect data from you as you navigate through our website or use our services. Such technologies include but are not limited to:</p>
                    <ol className='list'>
                        <li>Cookies: data files placed on your device when you use it to visit a website.</li>
                        <li>Pixel tags: transparent graphic image, also called a web beacon or tracking beacon, placed on a web page or in an email, indicating that a page or email has been viewed.</li>
                        <li>Google Analytics: Google web analytics service that tracks and reports website traffic.</li>
                    </ol>
                    <p className='mb-12'>You can choose not to accept cookies if you don&apos;t want tracking to occur. Please be aware that some features and services of our Site may not function correctly if you disable cookies, as we may not be able to identify and link you to your account.</p>
                    <h3 className="text-2xl font-black text_primary">2. Use of Information</h3>
                    <p>We use the collected information for the following purposes:</p>
                    <ol className='list mb-12'>
                        <li>Providing Services: We use your personal information to provide you with life insurance services, process applications, underwrite policies, manage claims, and communicate with you about your policy.</li>
                        <li>Marketing and Communication: We may use your information to send you promotional materials, newsletters, and other communications about our products and services.</li>
                        <li>Legal and Compliance: We may use and disclose your information to comply with applicable laws, regulations, legal processes, and government requests. This includes sharing information with regulatory authorities, law enforcement agencies, or other authorized entities.</li>
                        <li>Internal Operations: We may use your information for internal purposes such as data analysis, research, product development, enhancing our website, and improving our services.</li>
                    </ol>

                    <h3 className="text-2xl font-black text_primary">3. Information Sharing</h3>
                    <p>We may share your personal information with third parties for the following purposes:</p>
                    <ol className="list mb-12">
                        <li>Service Providers: We may engage third-party service providers to assist us in delivering our services. These providers may include insurance carriers, underwriters, reinsurers, claims processors, medical professionals, and technology vendors. We share information with them to facilitate the provision of services to you.</li>
                        <li>Business Partners: We may share your information with our trusted business partners, such as affiliated companies, agents, brokers, and financial institutions. Our Partners include Assurity Life Insurance Company. This sharing enables us to offer a comprehensive range of products and services to you.</li>
                        <li>Legal Requirements: We may disclose your information to comply with applicable laws, regulations, legal processes, or government requests. This includes responding to subpoenas, court orders, or similar legal processes.</li>
                        <li>Your Consent: We may share your information with third parties with your explicit consent or at your direction.</li>
                    </ol>

                    <h3 className="text-2xl font-black text_primary">4. Your Choices</h3>
                    <ol className="list mb-12">
                        <li><span className="font-black">Opting Out:</span> You have the right to opt out of receiving marketing communications from us. You can unsubscribe from our marketing emails by following the instructions provided in the email or by contacting us directly.</li>
                        <li><span className="font-black">Declining Information Disclosure:</span> You have the right to decline or prevent the disclosure of your information by our partners to third parties. One way to exercise this right is by choosing not to use the partner&apos;s website or services. If you choose not to provide certain information or decline the sharing of your information with third parties, it may limit our ability to provide you with certain services or products.</li>
                    </ol>

                    <h3 className="text-2xl font-black text_primary">5. Links to Third-Party Websites</h3>
                    <p className='mb-12'>Our website may contain links to third-party websites or resources that are not controlled or operated by Think Life. We are not responsible for the privacy practices or the content of these third-party websites. We encourage you to review the privacy policies of these websites before providing any personal information to them.</p>

                    <h3 className="text-2xl font-black text_primary">6. Contact from our Partners</h3>
                    <p className='mb-12'>Upon receipt of shared information, our partners may seek to initiate contact directly with you regarding their products and services. Please refer to their Privacy Policy to find out how they handle your personal information.</p>

                    <h3 className="text-2xl font-black text_primary">7. Data Security</h3>
                    <p>We take the security of your personal information seriously and implement standard international data protection measures to protect it.</p>
                    <p className='mb-12'>However, please note that no method of transmission or storage is 100% secure. We cannot guarantee the absolute security of your information. If you have any concerns about the security of your data, please contact us using the information provided at the end of this Privacy Policy.</p>

                    <h3 className="text-2xl font-black text_primary">8. Minors&apos; Privacy</h3>
                    <p className='mb-12'>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information. If you believe we may have collected personal information from a child, please contact us using the information provided below.</p>
                    
                    <h3 className="text-2xl font-black text_primary">9. Changes to the Privacy Policy</h3>
                    <p className='mb-12'>We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We will notify you of any material changes by posting the updated Privacy Policy on our website or through other appropriate communication channels.</p>

                    <h3 className="text-2xl font-black text_primary">Contact Us</h3>
                    <p className='mb-12'>If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us.</p>
                    
                    <p><span className='font-bold text_primary'>Email:</span> info@thinklife.com</p>
                    <p><span className='font-bold text_primary'>Phone:</span> +1 (319) 555-0115</p>
                    <p className='mb-12'><span className='font-bold text_primary'>Address:</span> 4517 Washington Ave. Manchester, Kentucky 39495</p>
                    <p className='mb-32 font-bold'>Thank you for entrusting Think Life with your personal information.</p>
                </div>
            </div>
            <Footer />
        </>
    );
}