import Image from 'next/image'
import Header from '../common/header';
import Footer from '../common/footer';
import TermLife from '../../../public/assets/term-life.jpg';
import Setting from '../../../public/assets/setting.svg';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Term Life Insurance - Think Life',
    description: 'Term Life Insurance',
}

export default function termLifeInsurance() {
    return (
        <>
            <Header />
            <section className="page_section pb-[128px] pt-16">
                <div className="mx-auto max-w-[1200px] px-8">
                    <div className="page_heading mb-[55px]">
                        <h1>Term Life <span>Insurance</span></h1>
                    </div>

                    <div className="page_img mb-16">
                        <Image src={TermLife} alt="Term Life Insurance" objectFit="contain" />
                    </div>
                    <div className="inner_content">
                        <div className="inner_heading">
                            <h2>Secure Your Loved Ones&apos; Future</h2>
                        </div>
                        <p className='mb-16'>Life is unpredictable, and ensuring your family&apos;s financial security is a top priority. Term Life Insurance provides a straightforward, affordable way to protect your loved ones if something happens to you.</p>

                        <h3>What is Term Life Insurance?</h3>
                        <p className='mb-16'>Term Life Insurance offers coverage for a specific period, typically ranging from 10 to 30 years. If you pass away during the term, your beneficiaries receive a death benefit that can help cover expenses like mortgage payments, education costs, and everyday living expenses.</p>

                        <div className="flex items-center icon_heading gap-x-3 mb-2">
                            <Image src={Setting} alt='setting' width={25.94} height={26.67} />
                            <h3 className='m-0'>How It Works</h3>
                        </div>
                        <p className='mb-16'>Term Life Insurance provides a death benefit to your beneficiaries if you pass away during the policy term. You choose the term length and the coverage amount based on your needs and budget. Premiums remain level throughout the term, making it easy to budget for this essential coverage.</p>
                        <h3><span>Benefits</span> of Term Life Insurance</h3>
                        <div className="mb-16 flex gap-4 flex-wrap">
                            <span className='badge'>Affordable Premiums</span>
                            <span className='badge'>Level Premiums for the Entire Term</span>
                            <span className='badge'>Flexible Term Lengths</span>
                            <span className='badge'>No Medical Exam Options Available</span>
                            <span className='badge'>Easy Online Application</span>
                            <span className='badge'>High Coverage Amounts Available</span>
                        </div>

                        <h3>Who Needs Term Life Insurance?</h3>
                        <p className='mb-2'>Term Life Insurance is an excellent choice for individuals who want to ensure their family&apos;s financial stability. It&apos;s especially beneficial if:</p>
                        <div className="notes flex gap-4 mb-16">
                            <div className='vr'></div>
                            <ul>
                                <li>You have young children or dependents.</li>
                                <li>You have a mortgage or other significant debts.</li>
                                <li>You are the primary breadwinner.</li>
                                <li>You want to cover future education expenses for your children.</li>
                                <li>You are looking for an affordable way to provide substantial coverage.</li>
                            </ul>
                        </div>

                        <h3>How Much Term Life Insurance Do You Need?</h3>
                        <p className='mb-16'>The amount of coverage you need depends on several factors, including your income, debts, and the financial needs of your dependents. A general rule of thumb is to have coverage that is 10-12 times your annual income. Consider your family&apos;s living expenses, outstanding debts, future education costs, and any other financial obligations when determining the coverage amount.</p>

                        <div className="get_quote flex flex-col justify-center items-center">
                            <div className="flex md:flex-row flex-col items-center md:gap-8 gap-4">
                                <p className='text_base'>Invest in Your Family&apos;s Future</p>
                                <Link href="https://quote.thinklife.com/" target='_blank' className='primary_fill'>Get a Quote</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}