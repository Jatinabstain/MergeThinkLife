import Header from '../common/header';
import Footer from '../common/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms Conditions - Think Life',
    description: 'Terms Conditions',
}

export default function termsConditions() {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-7xl px-8">
                <div className="page_heading mt-16 mb-9">
                    <h3><span>Terms and Conditions</span></h3>
                </div>
                <div className="privacy_content">
                    <p>Welcome to Think Life&apos;s Terms and Conditions (&apos;Terms,&apos;). These Terms constitute a legally binding agreement between you and Think Life Insurance Solutions, Inc. (&apos;Think Life,&apos; &apos;we,&apos; &apos;us,&apos; or &apos;our&apos;).By using our website or engaging with our services, you agree to be bound by these Terms.</p>
                    <p className='mb-[50px] font-bold'>This document contains important information about your rights in connection to the Site and the services, as well as your relationship with us. Please read it carefully and revisit it frequently to find the most up-to-date information.</p>

                    <h3 className="text-2xl font-black text_primary">Eligibility</h3>
                    <p className='mb-12'>You must be at least 18 years old to use our website and services. By using our website and services, you represent and warrant that you are 18 years of age or older.</p>

                    <h3 className="text-2xl font-black text_primary">Insurance Products </h3>
                    <p>Our insurance products are issued by Assurity Life Insurance Company. Our insurance products are only available to those who live in areas where they are lawfully sold. By applying for insurance products through our Site, you agree to (1) designate us as your agent of record, (2) authorize us to communicate such designation to any insurance carrier, your prior insurance provider, and any other person or entity we deem should be notified, and (3) allow us to receive any compensation that any insurance carrier agrees to pay to us in connection with your purchase of insurance products.</p>
                    <p className='mb-12'>Think Life does not offer legal, regulatory, accounting, or tax advice, and we encourage you to consult with a financial advisor before making any financial decisions.</p>

                    <h3 className="text-2xl font-black text_primary">Registration & Data</h3>
                    <p>Certain Services or sections of the Site may require you to create an account (&quot;Account&quot;) and become a &quot;Registered User.&quot; While creating your Account, you may be prompted to provide unique login credentials, such as a username and password (&quot;Login Information&quot;). It is your responsibility to maintain the confidentiality of your Login Information and not to disclose or transfer it to any unauthorized third party except for individuals with explicit authority to act on your behalf.</p>
                    <p>You are solely accountable for any activities carried out under your Account.</p>
                    <p>By registering for our Services, you explicitly allow us to share certain data you provide during the registration process with third parties. This sharing is done to provide the Services to you and is subject to our Privacy Policy.</p>
                    <p className='mb-12'>When you apply for insurance, you consent to receive communication from one or more of our third-party insurance partners, even if you have opted into any Do Not Call Lists. The communications may be carried out via various channels, including phone, email, mail, or text messages, based on the information you provided. Please be aware that third-party insurance companies may retain the information you submitted to us, regardless of whether you choose to utilize their services. If you no longer wish to receive communications from a specific third-party insurance company, you agree to notify that company directly.</p>

                    <h3 className="text-2xl font-black text_primary">User Content</h3>
                    <p className='mb-12'>If you submit any content to our website, you grant Think Life a non-exclusive, royalty-free, worldwide, transferable, and sublicensable right to use, reproduce, modify, adapt, publish, translate, distribute, and display such content for the purpose of providing our services and operating our business.</p>

                    <h3 className="text-2xl font-black text_primary">User Conduct</h3>
                    <p>You are prohibited from engaging in any of the following conduct:</p>
                    <ol className="list list_number mb-12">
                        <li>Violating any applicable laws or regulations;</li>
                        <li>Impersonating any person or entity or falsely stating or misrepresenting your affiliation with a person or entity;</li>
                        <li>Interfering with or disrupting the operation of our website or services;</li>
                        <li>Attempting to gain unauthorized access to our systems or networks;</li>
                        <li>Uploading or transmitting any viruses, malware, or harmful code;</li>
                        <li>Collecting or harvesting any personally identifiable information from our website or services without authorization;</li>
                        <li>Engaging in any activity that could damage, disable, overburden, or impair our website or services;</li>
                        <li>Using our website or services for any illegal or unauthorized purpose;</li>
                        <li>Engaging in any conduct that violates these Terms or any additional agreements or policies.</li>
                    </ol>

                    <h3 className="text-2xl font-black text_primary">Copyright Infringementtent</h3>
                    <p className='mb-12'>We value the intellectual property rights of others. The Digital Millennium Copyright Act (DMCA) provides a procedure for copyright owners to address potential infringements on our website. If you believe your work has been copied and posted without authorization, please provide the following information: (i) your contact details and a signature of the copyright owner or authorized representative, (ii) a description of the copyrighted work being infringed, (iii) the specific location of the infringing material on our site, (iv) a statement expressing your good faith belief that the use is unauthorized, and (v) a statement under penalty of perjury that the information provided is accurate and that you are the copyright owner or authorized to act on their behalf. To submit a copyright infringement complaint, please email info@thinklife.com.</p>

                    <h3 className="text-2xl font-black text_primary">Intellectual Property</h3>
                    <p className='mb-12'>All intellectual property rights, including copyrights, trademarks, and patents on our website, belong to Think Life or our licensors. You agree not to modify, reproduce, distribute, or create derivative works based on our website or services without our prior written consent.</p>

                    <h3 className="text-2xl font-black text_primary">Third-Party Websites</h3>
                    <p className='mb-12'>We may provide links or access to third-party services or websites. We do not endorse, control, or assume any responsibility for such third-party services or websites. Your use of any third-party services is subject to their respective terms and policies, and we encourage you to review them before using those services.</p>

                    <h3 className="text-2xl font-black text_primary">Disclaimer of Warranties</h3>
                    <p className=' font-bold'>You acknowledge and agree that the Services provided on this life insurance company website are offered on an &quot;as is&quot; basis, and your use of the Services is at your own risk. We hereby disclaim, to the maximum extent permitted by law, all warranties, whether express or implied.</p>
                    <p className=' font-bold'>We do not provide any warranties, including but not limited to warranties of merchantability or fitness for a particular purpose. We do not warrant against an y infringement of third-party intellectual property or proprietary rights. We do not guarantee the absence of delays, interruptions, errors, or omissions in the Services or on the Site. Additionally, we do not warrant the accuracy or correctness of data on the Services. We also disclaim any other warranties relating to our performance, nonperformance, or any other acts or omissions.</p>
                    <p className=' font-bold'>We cannot guarantee that the Site or the Services will operate error-free or be free from computer viruses or other harmful materials. Should your use of the Site or the Services result in the need for equipment or data servicing or replacement, we shall not be held responsible for any associated costs.</p>
                    <p className=' font-bold'>Please note that certain jurisdictions may not allow the exclusion or limitation of certain categories of damages or implied warranties. In such cases, our liability is limited to the extent permitted by law.</p>
                    <p className='mb-12 font-bold'>By using this website, you acknowledge and accept these limitations on warranties and agree to assume any associated risks. It is advisable to review and understand the applicable laws and regulations regarding warranties in your jurisdiction.</p>

                    <h3 className="text-2xl font-black text_primary">Liability Limitations</h3>
                    <p className='mb-12 font-bold'>In no event shall Think Life be liable to you or any third party for special, indirect, punitive, exemplary, or consequential damages, including lost profits, revenues, or savings, even if we have been advised of the possibility of such damages in advance. Furthermore, our liability for damages to you or any third parties shall not exceed, in the aggregate, the fees paid by you to us during the last six months before the date when the cause of action arises.</p>

                    <h3 className="text-2xl font-black text_primary">Indemnification</h3>
                    <p className='mb-12'>You agree to indemnify, defend, and hold harmless Think Life, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses, including reasonable attorneys&apos; fees, arising out of or in connection with your use of our website or services or any violation of these Terms.</p>

                    <h3 className="text-2xl font-black text_primary">Note to California Users</h3>
                    <p>As a user from California, you are granted specific consumer rights under California Civil Code Section 1789.3. To ensure transparency and compliance with this law, we want to inform you about the following:</p>
                    <p className='mb-12'>The Complaint Assistance Unit, which operates under the Division of Consumer Services within the California Department of Consumer Affairs, is available to assist you. If you have any concerns, issues, or complaints regarding your experience with our website or services, you can contact the Complaint Assistance Unit in writing at the following address: 1625 N. Market Blvd., Suite S-202, Sacramento, California 95834. Additionally, they can be reached by telephone at (800) 952-5210.</p>

                    <h3 className="text-2xl font-black text_primary">Modification and Termination</h3>
                    <p className='mb-12'>We reserve the right to modify these Terms at any time without prior notice. Any changes will be effective immediately upon posting the revised Terms on our website. Your continued use of our website or services after the posting of the revised Terms constitutes your acceptance of the modified Terms. We may terminate or suspend your access to our website or services at any time without prior notice.</p>
                    <h3 className="text-2xl font-black text_primary">Governing Law and Dispute Resolution</h3>
                    <p className='mb-12'>These Terms shall be governed by and construed in accordance with the laws of California. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of California.</p>

                    <h3 className="text-2xl font-black text_primary">Severability</h3>
                    <p className='mb-12'>If we waive or fail to enforce any provisions of the Terms, it does not waive our right to enforce them against you or any other party in the future. If any provision of the Terms is found unenforceable, the remaining provisions shall remain in full effect, and we will substitute a replacement enforceable term that reflects our original intent as closely as possible.</p>

                    <h3 className="text-2xl font-black text_primary">Notices and electronic signatures</h3>
                    <p>Certain activities on the Services may require an electronic signature. You acknowledge and agree that an electronic signature has the same legal rights and obligations as a physical signature.</p>
                    <p className='mb-12'>If you have an Account, you agree that we may send you any and all required notices via email or other electronic methods. You acknowledge that we are not liable for any delivery fees incurred as a result of receiving our electronic notices.</p>

                    <h3 className="text-2xl font-black text_primary">Entire Agreement</h3>
                    <p className='mb-12'>By agreeing to these Terms, you acknowledge that they constitute the entire agreement governing your use of the Services, and no other agreements or understandings exist.</p>

                    <h3 className="text-2xl font-black text_primary">Contact Us</h3>
                    <p className='mb-12'>If you have any questions, comments, or concerns about these Terms, please contact us:</p>

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