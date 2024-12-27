"use client";
import { useState,useEffect  } from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import Image from 'next/image';
import adsImg from '../../../public/assets/ads.jpg';
import arrowDown from '../../../public/assets/arrow-down.svg';
import ArticleCard from '../common/components/articles/articleCard';
import Link from 'next/link';
import useNotionClient from '../common/components/NotionClient';
import Loader from '../common/components/loader/loader';
import { useSearchParams } from 'next/navigation';
import placeholder from '../../../public/assets/placeholder.jpg';
import { ArticleItem } from '@/types/articleCardTypes';


export default function Article() {
    const searchParams = useSearchParams();
    // const atrPrm = searchParams.get('atr_prm') || ''; // Retrieve the 'atr_prm' value
    const [atrPrm, setAtrPrm] = useState<string | null>(null);
    
    useEffect(() => {
        // Get the 'atr_prm' query parameter value when the component mounts or the searchParams change
        const atrPrmFromUrl = searchParams.get('atr_prm');
        setAtrPrm(atrPrmFromUrl); // Update state with the new 'atr_prm'
    }, [searchParams]); // Dependency array ensures this effect runs when `searchParams` changes

    
    const { data: articles, loading: loadingArticles, error: errorArticles } = useNotionClient({ fetchFor: "Article1" });

    const {data,loading: loadingSingleArticle,error: errorSingleArticle} = useNotionClient({ fetchFor: "SingleArticle",ArticleId: atrPrm});

    const SingleArticle = data as unknown as ArticleItem | null;

    const [isSidebarVisible, setSidebarVisible] = useState(true); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible); // Toggle the visibility
    };

    const loading = loadingArticles || loadingSingleArticle;
    const error = errorArticles || errorSingleArticle;

    // Handle loading and error states
    if (loading) return <><Loader /></>;
    if (error) {
        return (
            <div>
                <p>Error fetching articles: {error}</p>
            </div>
        );
    }

    return (
        <>
            <Header />
                 
            {SingleArticle ? (
                <div className="mx-auto max-w-[1200px] px-8">
                    <div className="mb-[102px] mt-16">
                        {SingleArticle.image_url && SingleArticle.image_url.length > 0 ? (
                            <Image src={SingleArticle.image_url} alt="" className="article_image" width={1140} height={524} />
                        ) : (
                            <div className="article_image_placeholder"> <Image src={placeholder} alt="article_image" className="article_image" width={1140} height={524} />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap lg:flex-row flex-col">
                        <div className="lg:w-3/4 lg:pr-9">
                            <div className="page_heading mb-16">
                                <h1><span>{SingleArticle.title}</span></h1>
                            </div>

                            <div className="artical_inner">
                                <p className='mb-8'> No Content Available</p>
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
            ) : (
                <div className="mx-auto max-w-[1200px] px-8">
                    <div className="mb-[102px] mt-16">
                        <p>No data Found</p>
                        </div>
                </div>
            )}


            <Footer />
        </>
    );
}