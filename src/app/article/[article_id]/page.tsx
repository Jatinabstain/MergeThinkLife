"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../common/header';
import Footer from '../../common/footer';
import Image from 'next/image';
import adsImg from '../../../../public/assets/ads.jpg';
import arrowDown from '../../../../public/assets/arrow-down.svg';
import ArticleCard from '../../common/components/articles/articleCard';
import Link from 'next/link';
import useNotionClient from '../../common/components/NotionClient';
import Loader from '../../common/components/loader/loader';
import SingleArticleLoader from '../../common/components/loader/SingleArticleLoader';
// import { useSearchParams } from 'next/navigation';
import placeholder from '../../../../public/assets/placeholder.jpg';
import Error from '../../error500/page';
import { ArticleItem } from '@/types/articleCardTypes';



function SingleArticleFunction(params: { article_id: string }) {
    const { article_id } = params;  // Extract article_id from params
    const searchParams = article_id;
    const atrPrm = searchParams;
    const [activeHeading, setActiveHeading] = useState<string | null>(null); // Track active heading

    const { data, loading: loadingSingleArticle, error: errorSingleArticle } = useNotionClient({ fetchFor: "SingleArticle", toFetch: atrPrm });

    const SingleArticle = data as unknown as ArticleItem | null;

    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [headings, setHeadings] = useState<string[]>([]); // Store headings
    const [modifiedContent, setModifiedContent] = useState<string>(''); // Modified content with ids

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const loading = loadingSingleArticle;
    const error = errorSingleArticle;

    useEffect(() => {
        if (SingleArticle?.content) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(SingleArticle.content, 'text/html');
            const headingElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
            const headingTexts: string[] = [];

            headingElements.forEach((heading) => {
                const textContent = heading.textContent || "";
                headingTexts.push(textContent);

                // Add an id to each heading (if not already present)
                if (!heading.id) {
                    const id = textContent.replace(/\s+/g, '-').toLowerCase();
                    heading.id = id; // Set the id to the heading
                }
            });

            setHeadings(headingTexts); // Store headings
            setModifiedContent(doc.body.innerHTML); // Set modified content with ids
        }
    }, [SingleArticle]);

    if(loading) return <><SingleArticleLoader /></>;
    if (error) {
        console.log(error);
        return <Error />;
    }

    // Handle click on a sidebar item to set active heading
    const handleSidebarClick = (heading: string) => {
        setActiveHeading(heading); // Set active heading
        const targetId = heading.replace(/\s+/g, '-').toLowerCase(); // Convert heading to id format
        const targetElement = document.getElementById(targetId); // Locate the target element
    
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll to the element
        }
    };

    return (
        <>
            {SingleArticle ? (
                <>
                {/* <Suspense fallback={<Loader />}> */}
                    <div className="mb-[102px] mt-16">
                        {SingleArticle.image_url && SingleArticle.image_url.length > 0 ? (
                            <Image src={SingleArticle.image_url} alt="" className="article_image" width={1140} height={524} />
                        ) : (
                            <div className="article_image_placeholder">
                                <Image src={placeholder} alt="article_image" className="article_image" width={1140} height={524} />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap lg:flex-row flex-col">
                        <div className="lg:w-3/4 lg:pr-9">
                            <div className="page_heading mb-16">
                                <h1><span>{SingleArticle.title}</span></h1>
                            </div>

                            <div className="artical_inner">
                                <div
                                    className="notion-content"
                                    dangerouslySetInnerHTML={{ __html: modifiedContent ?? 'No Content Available' }}
                                ></div>
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
                                            {headings.length > 0 ? (
                                                headings.map((heading, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            href="javascript:void(0)"
                                                            onClick={() => handleSidebarClick(heading)} // Mark as active
                                                            className={activeHeading === heading ? 'active' : ''} // Apply active class
                                                        >
                                                            {heading}
                                                        </Link>
                                                    </li>
                                                ))
                                            ) : (
                                                <p>No headings found</p>
                                            )}
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
                 </>
            ) : (
                <div className="mb-[102px] mt-16">
                    <p>No data Found</p>
                </div>
            )}
        </>
    );
}

export default function Article({ params }: { params: Promise<{ article_id: string }> }) {
    const { article_id } = React.use(params); 
   
    // const { data: articles } = useNotionClient({ fetchFor: "Popular" });
    const {  data: articles, loading: loadingarticles, error: errorarticles } = useNotionClient({ fetchFor: "Popular" });
    
    if (errorarticles) {
        console.log(errorarticles);
        return <Error />;
    }
    return (
        <>
            <Header />
            <div className="mx-auto max-w-[1200px] px-8">
                {/* <Suspense fallback={<Loader />}> */}
                    <SingleArticleFunction article_id={article_id} />
                {/* </Suspense> */}

                <section className='mb-32 mt-5'>
                    <div className="article_heading flex gap-[10.67px] items-center mb-4">
                        <h3>Our Recent Articles</h3>
                    </div>
                    {loadingarticles ? <Loader /> : <>
                        <ArticleCard articles={articles} />
                    </>
                    }
                </section>
            </div>
            <Footer />
        </>
    );
}
