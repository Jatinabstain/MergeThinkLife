"use client";

import { useState } from 'react';

import Header from '../common/header';
import Footer from '../common/footer';
import Image from 'next/image';
import article from '../../../public/assets/article.jpg';
import insurance from '../../../public/assets/insurance.jpg';
import { ArticleItem } from "@/types/articleCardTypes";
import articleImg from '../../../public/assets/card-1.jpg';
import adsImg from '../../../public/assets/ads.jpg';
import arrowDown from '../../../public/assets/arrow-down.svg';
import ArticleCard from '../common/components/articles/articleCard';
import Link from 'next/link';

// const articles: ArticleItem[] = [
//     { id: '1', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src },
//     { id: '2', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src },
//     { id: '3', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src }
// ]


const articles: ArticleItem[] = [
    { id: '1', title: "Nike Sneakers", released_date: "4 Feb 2024",  category: "5 Minute Read", article_url: "article", image_url: articleImg.src },
    { id: '2', title: "Nike Sneakers", released_date: "4 Feb 2024",  category: "5 Minute Read", article_url: "article", image_url: articleImg.src },
    { id: '3', title: "Nike Sneakers", released_date: "4 Feb 2024",  category: "5 Minute Read", article_url: "article", image_url: articleImg.src }
]

export default function Article() {
    const [isSidebarVisible, setSidebarVisible] = useState(true); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible); // Toggle the visibility
    };

    return (
        <>
            <Header />
            <div className="mx-auto max-w-7xl px-8">
                <div className="mb-[102px] mt-16">
                    <Image src={article} alt="about us" className='page_img max-h-[524px] w-full' />
                </div>

                <div className="flex flex-wrap lg:flex-row flex-col">
                    <div className="lg:w-3/4 lg:pr-9">
                        <div className="page_heading mb-16">
                            <h1><span>Accidental Death Insurance vs. Life Insurance</span></h1>
                        </div>

                        <div className="artical_inner">
                            <p className='mb-8'>Life insurance and accidental death & dismemberment (AD&D) insurance can be confusing. They both have the same basic purpose, which is to provide financial protection for your family if something happens to you. But there are also key differences between the two. In this article, we&apos;ll examine the similarities and differences between these two types of insurance so you can make an informed decision about which one is right for your situation</p>
                            <h3 className='mb-4'>What is Accidental Death And Dismemberment Insurance (AD&D)?</h3>
                            <p>According to the Centers for Disease Control, accidents are the leading cause of death in the US for adults aged 25 to 44. Thus, it may be cost-effective to purchase an insurance policy covering accidental deaths and injuries caused by it.</p>
                            <p>AD&D insurance is a type of life insurance that only pays out if a covered accident results in death or severe injuries such as limb loss, paralysis, or blindness. This coverage can be purchased as a standalone policy or as an add-on provision to a standard life insurance policy.</p>
                            <p className='mb-8'>When AD&D is added as a rider to a life insurance policy, the beneficiary will receive the death benefit limit specified in the life insurance policy, as well as the additional amount specified in the AD&D rider if the insured dies due to a covered accident. However, if the insured dies due to any other cause, the payout will only be the death benefit limit specified in the life insurance policy, and the AD&D rider will not be included.</p>
                            <h3 className="mb-4">What is Life Insurance?</h3>
                            <p>Life insurance pays out a predetermined amount if you pass away within a specified period of time after the policy is purchased. How much you pay for this type of coverage depends on several factors: how long you want your policy to last, how much coverage you want, where you live, your age, health history, gender, marital status, etc.</p>
                            <p className='mb-8'>Although it is not required by law, life insurance might be a very important purchase for your loved ones if you have a mortgage and your spouse or children depend on your income. Life insurance guarantees financial security for your family members after you pass away. It could be extremely helpful in assisting them to manage continuous living expenses, such as mortgage payments, school tuition, and utility bills.</p>

                            <h3 className="mb-4">AD&D vs. Life Insurance: Coverage</h3>
                            <p>The main difference between AD&D and life insurance is how much coverage they offer.</p>
                            <p>AD&D policies typically cover two types of events: death by accident and dismemberment due to an accident. The latter may include loss of fingers, toes, feet, hands and arms, as well as loss of sight in one eye or both eyes. Accidental deaths include those caused by motor vehicle accidents, slips, choking, drowning, industrial equipment, and any other uncontrollable circumstances.</p>
                            <p className='mb-8'>Life insurance, on the other hand, typically covers death from any cause, so it’s more comprehensive in that way,  but it doesn’t cover dismemberment due to an accident.</p>
                            
                            <h3 className='mb-4'>AD&D vs. Life Insurance: Customers </h3>
                            <p className='mb-8'>The importance of AD&D death benefits is typically greater for those who work in or near potential dangers. For example, it’s a must-have if you work in industries like construction and roofing, automotive repair, trash collection and processing, manufacturing, or outdoor employment.</p>
                            <h3 className="mb-4">AD&D vs. Life Insurance: Cost</h3>
                            <p className='mb-8'>Like many types of insurance coverages, the older you are, the more premiums you pay. Depending on a range of variables, insurance premiums might differ dramatically. Age, sex, health, and way of life are the most typical variables influencing insurance rates.  However, although your specific rate of insurance will vary based on your age, the average cost of an AD&D policy is from $7 to $10 per month for $100,000 of coverage. At the same time, the price of a 10-year, $250,000 life insurance policy is between $15 and $17 each month, according to recent surveys.</p>
                            
                            <h3 className="mb-4">AD&D vs. Life Insurance: Requirements</h3>
                            <p className='mb-8'>To qualify for life insurance coverage, customers generally need to pass a medical exam. On the other hand, an AD&D policy may be simpler to qualify for because it doesn&apos;t require a medical exam, and you can generally get an AD&D policy more quickly than a regular life insurance policy. Thus, if you don&apos;t qualify for standard life insurance, AD&D coverage may still be preferable to having no coverage at all.</p>
                            
                            <h3 className='mb-4'>Do You Need Both AD&D and Life Insurance?</h3>
                            <p>Insurance coverages are generally intended to provide you and your family with appropriate financial protection at all times; thus, it is important to make a wise decision and pick up the appropriate policies for your individual situation. Life insurance is a wise investment if your goal is to protect your family&apos;s financial future. However, Accidental Death and Dismemberment Insurance is only meant to strengthen the power of life insurance coverage. Therefore, it can be purchased either as an additional policy on top of your life insurance coverage or as a rider, which can be attached to the base plan for an extra premium.</p>
                            <p className='mb-8'>It is also crucial to note that AD&D insurance is not a substitute for traditional life insurance. Standard life insurance provides an all-cause death benefit excluding nonfatal injuries, whereas AD&D coverage exclusively covers accidental deaths and injuries. As a result, if you currently have life insurance and are concerned about how to cover the costs of a serious accidental injury, we advise strengthening your coverage with an AD&D independent policy or a rider.</p>

                            <h3 className="mb-4">Do You Need Both AD&D and Life Insurance?</h3>
                            <Image src={insurance} alt='Do You Need Both AD&D and Life Insurance?'  className='mb-8'/>

                            <h3 className="mb-4">The Bottom Line</h3>
                            <p className='mb-8'>Accidental death insurance is meant to cover your family&apos;s financial needs if you die unexpectedly in an accident. Life insurance is built around the idea of replacing your income should you pass away. Both types of policies can be helpful for families who need help navigating an unexpected tragedy, but they&apos;re structured differently and have different goals.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4">
                    <div className="article_time">
                            <p className='lg:mb-16 mb-8 text-right'>5 minute read</p>
                        </div>

                        <div className="article_tab mb-16">
                            <div className="article_link_toggle mb-3">
                                <button className='flex gap-[9px] w-fit' onClick={toggleSidebar}>In this Article <Image src={arrowDown} alt="" className='icon_down' /></button>
                            </div>
                            {isSidebarVisible && (
                                <div className="article_sidebar">
                                    <ul>
                                        <li>
                                            <Link href="#" className='active'>What is Accidental Death And Dismemberment Insurance (AD&D)?</Link>
                                        </li>
                                        <li>
                                            <Link href="#">What is Life Insurance?</Link>
                                        </li>
                                        <li>
                                            <Link href="#">AD&D vs. Life Insurance: Coverage</Link>
                                        </li>
                                        <li>
                                            <Link href="#">AD&D vs. Life Insurance: Cost</Link>
                                        </li>
                                        <li>
                                            <Link href="#">AD&D vs. Life Insurance: Requirements</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Accidental Death Insurance Vs. Life Insurance </Link>
                                        </li>
                                        <li>
                                            <Link href="#">The Bottom Line </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        
                        <div className="article_ads">
                            <Image src={adsImg} alt='ads' />
                            <Link href="#" className="border border_primary text-white bg_primary py-4 px-5 rounded font-medium block w-fit bg_primary">Get my Quote</Link>
                        </div>
                    </div>
                </div>

                <section className='mb-32'>
                    <div className="article_heading flex gap-[10.67px] items-center mb-4">
                        <h3>Our Recent Articles</h3>
                    </div>
                    <ArticleCard articles={articles} />
                </section>
                
            </div>
            <Footer />
        </>
    );
}