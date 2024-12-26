import Header from '../common/header';
import Footer from '../common/footer';
import Image from 'next/image';
import Link from 'next/link';
import aboutUsImg from '../../../public/assets/think-life.jpg';
import dedication from '../../../public/assets/dedication.svg';
import professionlism from '../../../public/assets/professionlism.svg';
import teamwork from '../../../public/assets/teamwork.svg';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - Think Life',
    description: 'About Us',
}

export default function aboutUs() {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-[1200px] px-8">
                <div className="my-16">
                    <Image src={aboutUsImg} alt="about us" className='page_img' />
                </div>

                <div className="page_heading mb-8">
                    <h3>About <span>Us</span></h3>
                </div>

                <div className="inner_content">
                    <p className='mb-6'>Think Life is an insurance company dedicated to safeguarding your and your loved ones&apos; financial future. Backed by years of extensive experience, we offer insurance solutions to combat unforeseen circumstances and fulfill your family&apos;s life goals.</p>
                    <p className='mb-6'>We recognize and value each client&apos;s uniqueness. We try to anticipate our clients&apos; needs and act in a way that the results of our work exceed their expectations. We value our clients&apos; trust and build long-term relationships with them. We want Think Life to be the best choice for You.</p>
                    <p className='mb-6'>By growing the company, we are creating a corporate culture that promotes personal development, encourages taking the initiative, and fosters unity. We want to give our employees an opportunity to improve professionally, gain new knowledge, generate ideas, correctly assess their business qualities and use them for the benefit of the company.</p>
                    <p className='mb-[105px]'>We work hard to ensure a better future for our private and corporate clients, employees, partners, and shareholders.</p>
                </div>
            </div>
            <div className="py-16 bg_violet">
                <div className="mx-auto max-w-[1200px] px-8">
                    <div className="card_heading">
                        <h3>Our Values</h3>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-y-0 gap-[38px] mb-32">
                        <div className="value_card">
                            <div className="value_card_icon">
                                <Image src={dedication} alt='Dedication' className='mx-auto' />
                            </div>
                            <h3>Dedication</h3>
                            <p>We give each client our full attention, anticipating their needs and being honest and open with all details, terms, and conditions.</p>
                        </div>
                        <div className="value_card">
                            <div className="value_card_icon">
                                <Image src={professionlism} alt='Professionlism' className='mx-auto' />
                            </div>
                            <h3>Professionlism</h3>
                            <p>As we interact with our clients and other businesses, we strive to be considerate, honest, and responsible.</p>
                        </div>
                        <div className="value_card">
                            <div className="value_card_icon">
                                <Image src={teamwork} alt='Teamwork' className='mx-auto' />
                            </div>
                            <h3>Teamwork</h3>
                            <p>By combining our individual strengths, we produce results greater than the sum of our individual efforts.</p>
                        </div>
                    </div>

                    <div className="card_heading mb-8">
                        <h3 className='mb-2'>Why Choose Us</h3>
                        <p>We work hard to ensure a better future for our private and corporate clients, employees, partners, and shareholders. </p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-y-0 gap-[38px] mb-16">
                        <div className="value_card">
                            <div className="count mx-auto">
                                <p>1</p>
                            </div>
                            <h3>Quick Application</h3>
                            <p>Our simple application form is easy to fill in and will take only 10 minutes to complete. Most often, you will get an instant decision after submitting it and can activate the coverage right away.</p>
                        </div>
                        <div className="value_card">
                            <div className="count mx-auto">
                                <p>2</p>
                            </div>
                            <h3>Affordable Premiums</h3>
                            <p>Our team will help you find the right life insurance policy that meets your needs at a reasonable price. So, the flexible insurance policy options and affordability will allow you to get the most out of our services.</p>
                        </div>
                        <div className="value_card">
                            <div className="count mx-auto">
                                <p>3</p>
                            </div>
                            <h3>Satisfaction Guarantee</h3>
                            <p> If you&apos;re unhappy with your policy, we&apos;ll refund your payment in full within 30 days. Additionally, you can cancel your policy for free at any time. With us, you have the flexibility to choose what works best for you.</p>
                        </div>
                    </div>
                    <Link href="https://quote.thinklife.com/" target='_blank' className="primary_fill_big mx-auto">Get Started</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}