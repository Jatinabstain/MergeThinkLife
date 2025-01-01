"use client"; // This line makes it a client component`1234  
import Header from '../common/header';
import Footer from '../common/footer';
import Image from 'next/image';
import quote from '../../../public/assets/quote.svg';
import apply from '../../../public/assets/apply.svg';
import policy from '../../../public/assets/policy.svg';
import managePolicy from '../../../public/assets/managePolicy.svg';
import claim from '../../../public/assets/claim.svg';
import ArticleCard from '../common/components/articles/articleCard';
import useNotionClient from '../common/components/NotionClient';
import Loader from '../common/components/loader/loader';
import Error from '../error500/page';


export default function HowItWorks() {

    const { data: articleList, loading: isLoadingArticles, error: articleError } = useNotionClient({ fetchFor: "Popular" });

    // Combine loading and error states
    const loading = isLoadingArticles;
    const error = articleError;

    // Handle loading and error states
    if (loading) return <><Header /><Loader /><Footer /></>;
    if (error) {
        console.log(error)
        return (
            <>
                <Header />
                <Error />
                <Footer />
            </>
        );
    }
    return (
        <>
            <Header />
            <div className="mx-auto max-w-[1200px] px-8">
                <div className="page_heading mb-[50px] mt-16">
                    <h3>How<span> it works</span></h3>
                </div>
                <div className="how_works_cards mb-32">
                    {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-y-[76px] gap-y-[38px] gap-x-[38px] mb-32 justify-center items-center how_grid"> */}
                    <div className="flex flex-wrap items-stretch mb-32 lg:gap-y-[76px] gap-y-[38px] justify-center how_grid">
                        <div className="lg:basis-2/6 md:px-[19px] lg:ps-0 flex-grow">
                            <div className="how_card h-full">
                                <div className="how_icon mb-5">
                                    <Image src={quote} alt='' className='block mx-auto' />
                                </div>
                                <div className="count">
                                    <p>1</p>
                                </div>
                                <div className="how_content">
                                    <h3>Get a Quote</h3>
                                    <p>The first step in getting a life insurance policy is to get a quote. You&apos;ll need to provide some basic information about yourself, your health, and your lifestyle. After that, you&apos;ll get an estimated premium amount and coverage options.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:basis-2/6 md:px-[19px] flex-grow">
                            <div className="how_card h-full">
                                <div className="how_icon mb-5">
                                    <Image src={apply} alt='' className='block mx-auto' />
                                </div>
                                <div className="count">
                                    <p>2</p>
                                </div>
                                <div className="how_content">
                                    <h3>Apply for Coverage</h3>
                                    <p>If you&apos;re happy with the quote, you can proceed with your application. This typically involves filling out an application form with more detailed information about yourself. You may need to undergo a medical exam or provide additional documentation, based on the type of coverage you want.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:basis-2/6 md:px-[19px] lg:pe-0 flex-grow">
                            <div className="how_card h-full">
                                <div className="how_icon mb-5">
                                    <Image src={policy} alt='' className='block mx-auto' />
                                </div>
                                <div className="count">
                                    <p>3</p>
                                </div>
                                <div className="how_content">
                                    <h3>Receive Your Policy</h3>
                                    <p>Once you submit your application, we will promptly inform you of our decision. If your application is accepted, we will send you a policy contract that details the terms and conditions of your coverage. Your coverage will begin on the effective date specified in your policy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:basis-2/6 md:px-[19px]">
                            <div className="how_card">
                                <div className="how_icon mb-5">
                                    <Image src={managePolicy} alt='' className='block mx-auto' />
                                </div>
                                <div className="how_content">
                                    <h3>Manage Your Policy</h3>
                                    <p>Our online portal allows you to easily manage your policy and make any necessary changes. From increasing coverage to updating beneficiaries, you have complete control over your life insurance policy
                                        at any time.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:basis-2/6 md:px-[19px]">
                            <div className="how_card">
                                <div className="how_icon mb-5">
                                    <Image src={claim} alt='' className='block mx-auto' />
                                </div>
                                <div className="how_content">
                                    <h3>File a Claim</h3>
                                    <p>If you ever need to file a claim, simply contact us and we will assist you every step of the way. We are dedicated to providing you with quick and fair claims service and will collaborate with you to ensure that you receive all the benefits you deserve.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="page_section pb-[128px]">
                    <div className="heading mb-8">
                        <h3>Blog</h3>
                    </div>
                    <ArticleCard articles={articleList} />
                </section>
            </div>
            <Footer />
        </>
    );
}