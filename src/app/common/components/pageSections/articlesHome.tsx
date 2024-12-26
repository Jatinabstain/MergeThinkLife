"use client"; // This line makes it a client component

import Link from 'next/link';
import useNotionClient from '../NotionClient'; // Adjust the path as necessary
import ArticleCard from '../articles/articleCard';
import Loader from '../loader/loader';

export default function ArticlesHome() {
    // Use the custom hook to fetch articles
    const { data: articleData, loading, error } = useNotionClient({  fetchFor: "Article1"});

    // Handle loading and error states
    if (loading) return <Loader />;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="page_section pb-[128px]">
            <div className="mx-auto max-w-[1200px] px-8">
                <div className="heading mb-8">
                    <h3>Our Recent Articles</h3>
                </div>
                <ArticleCard articles={articleData} />

                <Link href="blog" className="primary_fill_outline mt-8 mx-auto">All Articles</Link>
            </div>
        </section>
    );
}