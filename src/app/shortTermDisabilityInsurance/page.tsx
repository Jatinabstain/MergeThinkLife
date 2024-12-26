import Image from 'next/image'
import Header from '../common/header';
import Footer from '../common/footer';
import ShortTerm from '../../../public/assets/short-term.jpg';
import Setting from '../../../public/assets/setting.svg';
import pig from '../../../public/assets/pigibank.jpg';
import calc from '../../../public/assets/calc.jpg';
import Link from 'next/link';
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: 'Short-Term Disability Insurance - Think Life',
    description: 'Short-Term Disability Insurance',
}

export default function shortTermDisabilityInsurance() {
    return (
        <>
            <Header />
            <section className="page_section pb-[128px] pt-16">
                <div className="mx-auto max-w-[1200px] px-8">
                    <div className="page_heading mb-[105px]">
                        <h1>Short-Term Disability <span>Insurance</span></h1>
                    </div>

                    <div className="page_img mb-16">
                        <Image src={ShortTerm} alt="Short-Term Disability Insurance" objectFit="contain" />
                    </div>
                    <div className="inner_content">
                        <div className="inner_heading">
                            <h2>Protect Your Income, Secure Your Future</h2>
                        </div>
                        <p className='mb-16'>No one is immune to illness or accidents. According to the Social Security Administration, more than 1 in 4 of today&apos;s 20-year-olds will become disabled before reaching retirement age. This alarming statistic underscores the need for a reliable safety net. That&apos;s where our Short-Term Disability Insurance comes into play.</p>

                        <h3>What is Short-Term Disability Insurance?</h3>
                        <p className='mb-16'>Short-Term Disability Insurance is designed to safeguard your earning potential. While we can&apos;t prevent accidents or illnesses, we can help minimize their financial impact. Whether you&apos;re a business owner, freelancer, or have a traditional 9-5 job, our policy ensures you receive the financial support you need during a major health crisis.</p>

                        <div className="flex items-center icon_heading gap-x-3 mb-2">
                            <Image src={Setting} alt='setting' width={25.94} height={26.67} />
                            <h3 className='m-0'>How It Works</h3>
                        </div>
                        <p className='mb-16'>With Think Life&apos;s Short-Term Disability Insurance, you will receive weekly benefits while disabled, after your policy&apos;s elimination period, based on the benefit period you elect. These funds can cover your usual monthly expenses, such as mortgage, car payments, credit cards, food, and other living costs. If you return to work but can&apos;t perform the same job due to your impairment, you may still be eligible for weekly payments.</p>

                        <h3><span>Benefits</span> of Short-Term Disability Insurance</h3>
                        <div className="mb-16 flex gap-4 flex-wrap">
                            <span className='badge'>Fast approval</span>
                            <span className='badge'>Affordable Premiums</span>
                            <span className='badge'>Customizable Coverage</span>
                            <span className='badge'>No Medical Exam Required</span>
                            <span className='badge'>Easy Online Application</span>
                        </div>

                        <h3>Who Needs Short-Term Disability Insurance?</h3>
                        <p className='mb-2'>Short-Term Disability Insurance is a wise investment for healthy, employed individuals looking to secure their financial future. It&apos;s especially beneficial if:</p>
                        <div className="notes flex gap-4 mb-16">
                            <div className='vr'></div>
                            <ul>
                                <li>You own a small business and lack sick leave.</li>
                                <li>Your family members depend on you financially.</li>
                                <li>You have debt, such as a mortgage or credit card debt.</li>
                                <li>You have no other sources of income.</li>
                                <li>Your job offers little or no sick leave.</li>
                                <li>You are a freelancer with no employee benefits.</li>
                            </ul>
                        </div>

                        <h3>How Much Short-Term Disability Insurance Do You Need?</h3>
                        <p className='mb-16'>The coverage amount depends on your income and essential expenses. Calculate your monthly bills, including mortgage, rent, student loans, car payments, credit card payments, childcare, utilities, groceries, and other living expenses. Divide the total by four to determine your required weekly benefit. Even partial coverage can be beneficial if full coverage is unaffordable.</p>
                        
                        <h3>Insurance Tailored to Your Needs</h3>
                        <p className='mb-16'>With Think Life, you can customize your coverage to fit your needs, budget, and objectives.</p>

                        <div className="mb-16">
                            <Image src={pig} alt="Insurance Tailored to Your Needs" objectFit="contain" className='h-[241px] w-full object-cover rounded-xl' />
                        </div>
    
                        <h3>Choose Your Coverage</h3>
                        <div className="grid lg:grid-cols-2 lg:gap-y-0 gap-y-4 gap-x-[38px] mb-16 cover_card">
                            <div className="bg-purple-50 p-4 rounded-xl pb-7">
                                <h3 className="text-xl font-bold text-center mb-8 text_primary">Accident and Sickness</h3>
                                <p className='text-[#00000099] text-center'>Provides financial support if you are unable to work due to an injury or illness.</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl pb-7">
                                <h3 className="text-xl font-bold text-center mb-8 text_primary">Accidents-Only</h3>
                                <p className='text-[#00000099] text-center'>Pays benefits only if the policyholder is disabled or seriously injured in an accident.</p>
                            </div>
                        </div>

                        <h3>Choose Your Elimination Periods </h3>
                        <p><span className='text_primary'>The elimination period, or waiting period,</span> is the time between becoming disabled and receiving benefits. A longer waiting period results in lower premiums. Choose an elimination period that fits your financial needs and circumstances:</p>
                        <div className="mb-16 flex gap-4 flex-wrap mt-2">
                            <span className='badge'>0 days</span>
                            <span className='badge'>7 days</span>
                            <span className='badge'>14 days</span>
                            <span className='badge'>30 days</span>
                            <span className='badge'>60 days</span>
                            <span className='badge'>90 days</span>
                        </div>


                        <h3>Choose Your Benefit Periods</h3>
                        <p><span className='text_primary'>The benefit period</span> is the length of time the insurance provider pays benefits. Longer periods result in higher premiums but provide extended financial support:</p>
                        <div className="mb-16 flex gap-4 flex-wrap mt-2">
                            <span className='badge'>13 weeks</span>
                            <span className='badge'>26 weeks</span>
                            <span className='badge'>1 year</span>
                            <span className='badge'>2 years</span>
                        </div>
                        
                        <hr className='mb-16 border-2 border_primary' />

                        <h3>Short-Term Disability Insurance Policy Features</h3>
                        <p><span className='text_primary'>Childbirth Benefit (Accident & Sickness Coverage Only):</span></p>
                        <p className='mb-6'>Receive a lump sum benefit equal to two times your weekly benefit amount, up to $500, if disabled due to childbirth. Available for one child per year.</p>
                        
                        <p><span className='text_primary'>Organ Donor Benefit (Accident & Sickness Coverage Only):</span></p>
                        <p className='mb-6'>Receive weekly compensation if disabled from donating an organ or bone marrow.</p>

                        <p><span className='text_primary'>Partial Disability Benefit:</span></p>
                        <p className='mb-6'>Receive 50% of your benefit amount if you return to work part-time after total disability.</p>

                        <p><span className='text_primary'>Presumptive Disability Benefit: </span></p>
                        <p className='mb-6'>Receive full weekly benefits upon permanent loss of speech, hearing, sight, or use of limbs, regardless of employment status or medical care.</p>

                        <p><span className='text_primary'>Waiver of Premium Benefits: </span></p>
                        <p className='mb-16'>Premiums are waived if you become totally disabled until you recover or the benefit term expires.</p>
                        
                        <hr className='mb-16 border-2 border_primary' />

                        <div className="mb-16">
                            <Image src={calc} alt="Expand Your Coverage with These Riders" objectFit="contain" className='h-[241px] w-full object-cover rounded-xl' />
                        </div>

                        
                        <h3>Expand Your Coverage with These Riders</h3>
                        <p className='mb-8'>Customize your policy with optional riders for additional protection:</p>
                        
                        <p className='mb-6'><span className='text_primary'>Catastrophic Disability Rider (Accident & Sickness Coverage Only):</span> Provides extra benefits for severe disabilities that prevent basic daily activities.</p>
                        
                        <p className='mb-6'><span className='text_primary'>Family Care Rider: </span>Provides benefits for policyholders on family medical leave to care for a child, spouse, or parent.</p>

                        <p className='mb-6'><span className='text_primary'>Guaranteed Insurability Rider: </span> Allows increasing coverage without a medical exam.</p>

                        <p className='mb-6'><span className='text_primary'>Retroactive Injury Rider: </span> Provides a lump sum if a covered injury causes total disability after the elimination period.</p>
                       
                        <p className='mb-6'><span className='text_primary'>Return of Premium Rider: </span> Offers partial or full refund of premiums if the policy is terminated, lapsed, or if the policyholder reaches 65 or passes away before the policy term ends.</p>

                        <p className='mb-16'><span className='text_primary'>Stay-at-Home Spouse Disability Income Rider: </span> Provides benefits if the insured spouse becomes totally disabled.</p>

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