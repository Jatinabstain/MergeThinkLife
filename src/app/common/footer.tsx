'use client'

import { usePathname } from 'next/navigation';
import BrandLogo from './components/brandLogoLight';
import Subscribe from './components/subscribe';
import Image from 'next/image';
import facebook from '../../../public/assets/facebook.svg';
import twitter from '../../../public/assets/twitter.svg';
import linkdin from '../../../public/assets/linkdin.svg';
import instagram from '../../../public/assets/instagram.svg';
import tiktok from '../../../public/assets/tiktok.svg';
import youtube from '../../../public/assets/youtube.svg';
import call from '../../../public/assets/call.svg';
import mail from '../../../public/assets/mail.svg';
import location from '../../../public/assets/location.svg';
import Link from "next/link";

const menus = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about-us' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Conditions', href: '/terms-conditions' }
]

export default function Footer() {
    const pathname = usePathname();
    return (
        <>
            <footer className='footer'>
                <div className="mx-auto max-w-[1200px] px-8">
                    <div className="pt-[91px] md:pb-[99px]">
                        <div className="flex md:flex-row flex-col lg:gap-y-0 gap-[38px]">
                            <div className="lg:w-1/2"> 
                                <BrandLogo />
                                <Subscribe />
                            </div>
                            <div className="lg:w-1/5">
                                <div className="footer_widget">
                                    <h3 className='text-base font-normal mb-11'>Navigation</h3>
                                    <ul>
                                        {menus.map((item) => (
                                            <li key={item.name}>
                                                <Link href={item.href} className={`${pathname === item.href ? 'active' : ''}`}>{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-1/5">
                                <div className="footer_widget">
                                    <h3 className='text-base font-normal mb-11'>Get in touch</h3>
                                    <ul>
                                        <li>
                                            <Link href="#" className='flex gap-3 items-start'>
                                                <Image
                                                src={call}
                                                alt="call"
                                            /> +1 (319) 555-0115</Link>
                                        </li>
                                        <li>
                                        <Link href="#" className='flex gap-3 items-start'><Image
                                                src={mail}
                                                alt="mail"
                                            /> info@thinklife.com</Link>
                                        </li>
                                        <li>
                                        <Link href="#" className='flex gap-3 items-start'><Image
                                                src={location}
                                                alt="location"
                                            /> 4517 Washington Ave. Manchester, Kentucky 39495</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-1/5">
                                <div className="footer_widget">
                                    <h3 className='text-base font-normal mb-11'>Follow Us</h3>
                                    <div className="flex gap-[18px] mb-5">
                                        <Link href="#">
                                            <Image
                                                src={facebook}
                                                alt="Facebook"
                                            />
                                        </Link>
                                        <Link href="#">
                                            <Image
                                                src={twitter}
                                                alt="twitter"
                                            />
                                        </Link>
                                        <Link href="#">
                                            <Image
                                                src={linkdin}
                                                alt="linkdin"
                                            />
                                        </Link>
                                    </div>
                                    <div className="flex gap-[18px] mb-5">
                                        <Link href="#">
                                            <Image
                                                src={instagram}
                                                alt="instagram"
                                            />
                                        </Link>
                                        <Link href="#">
                                            <Image
                                                src={tiktok}
                                                alt="tiktok"
                                            />
                                        </Link>
                                        <Link href="#">
                                            <Image
                                                src={youtube}
                                                alt="youtube"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-100 text-sm font-normal pb-[117px]">Assurity is a marketing name for the mutual holding company Assurity Group, Inc. and its subsidiaries. Those subsidiaries include but are not limited to: Assurity Life Insurance Company and Assurity Life Insurance Company of New York. Insurance products and services are offered by Assurity Life Insurance Company in all states except New York. In New York, insurance products and services are offered by Assurity Life Insurance Company of New York, Albany, NY. Product availability, features and rates may vary by state.</p>
                </div>
            </footer>
            <section className='footer_bottom py-[31px]'>
                <div className="mx-auto max-w-[1200px] px-8">
                    <p className='text-sm font-normal text-white'>© ThinkLife 2024, All rights reserved</p>
                </div>
            </section>
        </>
    );
}