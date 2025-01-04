"use client"; // This line makes it a client component

import Link from 'next/link';
import useNotionClient from '../NotionClient'; // Adjust the path as necessary
import ArticleCard from '../articles/articleCard';
import Loader from '../loader/loader';
import NoResultsFound from '../noResultsFound/noResultsFound';

export default function ArticlesHome() {
    // Use the custom hook to fetch articles
    const { data: articleData, loading, error } = useNotionClient({ fetchFor: "Popular" });
    if (error) console.log('Error', { error });

    return (
        <section className="page_section pb-[128px]">
            <div className="mx-auto max-w-[1200px] px-8">
                <div className="heading mb-8">
                    <h3>Our Recent Articles</h3>
                </div>


                <div className='relative' >
                    {loading ? <Loader /> : ((!articleData || articleData.length === 0) ? (
                        <NoResultsFound message="Sorry, no results were found. Please try again later." />
                    ) : (
                        <>
                            <ArticleCard articles={articleData} />
                            <Link href="blog" className="primary_fill_outline mt-8 mx-auto">All Articles</Link>
                        </>
                    ))
                    }
                </div>
            </div>
        </section>
    );
}