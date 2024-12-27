'use client'

import { usePathname } from 'next/navigation';
import BrandLogoLight from './components/brandLogoLight';
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
    { name: 'Blog', href: '/products' },
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
                <div className="mx-auto max-w-[1200px] md:px-0">
                    <div className="pt-[50px] md:pb-[28px]">
                        <div className="flex md:flex-row lg:flex-nowrap md:flex-wrap flex-col lg:gap-y-0 gap-[20px]">
                            <div className="lg:w-[55%] lg:pe-[100px] md:w-2/4"> 
                                <div className="md:p-[10px]">
                                    <BrandLogoLight />
                                </div>
                                <Subscribe />
                            </div>
                            <div className="lg:w-1/5 md:w-[47%]">
                                <div className="footer_widget">
                                    <h3 className='text-base leading-4 font-medium mb-9'>Navigation</h3>
                                    <ul>
                                        {menus.map((item) => (
                                            <li key={item.name}>
                                                <Link href={item.href} className={`leading-4 lg:p-0 md:py-3 ${pathname === item.href ? 'active' : ''}`}>{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2">
                                <div className="footer_widget get_in_touch">
                                    <h3 className='text-base leading-4 font-medium mb-9'>Get in touch</h3>
                                    <ul>
                                        <li>
                                            <Link href="#" className='leading-4 flex gap-[22px] items-center'>
                                                <Image
                                                src={call}
                                                alt="call"
                                            /> +1 (319) 555-0115</Link>
                                        </li>
                                        <li>
                                        <Link href="#" className='leading-4 flex gap-[22px] items-start'><Image
                                                src={mail}
                                                alt="mail"
                                            /> info@thinklife.com</Link>
                                        </li>
                                        <li>
                                        <Link href="#" className='leading-4 flex gap-[22px] items-start'><Image
                                                src={location}
                                                alt="location"
                                            /> 4517 Washington Ave. Manchester, Kentucky 39495</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-1/5 md:w-1/5">
                                <div className="footer_widget social_media">
                                    <h3 className='text-base leading-4 font-medium mb-9'>Follow Us</h3>
                                    <div className="flex gap-[20px] mb-5 pb-[6.5px] items-center">
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
                                    <div className="flex gap-[20px] mb-5 pb-[6.5px]">
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
                    <p className="text-gray-100 text-sm font-normal md:pb-[50px] pb-[100px]">Assurity is a marketing name for the mutual holding company Assurity Group, Inc. and its subsidiaries. Those subsidiaries include but are not limited to: Assurity Life Insurance Company and Assurity Life Insurance Company of New York. Insurance products and services are offered by Assurity Life Insurance Company in all states except New York. In New York, insurance products and services are offered by Assurity Life Insurance Company of New York, Albany, NY. Product availability, features and rates may vary by state.</p>
                </div>
            </footer>
            <section className='footer_bottom py-[31px]'>
                <div className="mx-auto max-w-[1200px] md:px-0 px-[10px]">
                    <p className='text-sm font-normal text-white'>© ThinkLife 2024, All rights reserved</p>
                </div>
            </section>
        </>
    );
}