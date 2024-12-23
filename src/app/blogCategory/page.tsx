"use client";


import Header from '../common/header';
import Footer from '../common/footer';
import Search from '../common/search/page';
import ArticleCard from '../common/components/articles/articleCard';
import Pagination from '../common/components/pagination';
import BlogTabs from '../common/components/blog/blogTabs';
import { categoryItem } from '@/types/categoryTypes';
import useNotionClient from '../common/components/NotionClient';
import Head from "next/head";



// import type { Metadata } from 'next';
// export const metadata: Metadata = {
//     title: 'Life Insurance - Think Life',
//     description: 'Life Insurance',
// }


import React from "react";


export default function BlogCategory() {
    const { data: articles2, loading: loadingArticles2, error: errorArticles2 } = useNotionClient({ fetchFor: "Article2" });
    const { data: categoriesData, loading: loadingCategories, error: errorCategories } = useNotionClient({ fetchFor: "Categories" });

    const loading = loadingArticles2 || loadingCategories;
    const error = errorArticles2 || errorCategories;

    // Check if categoriesData is an array and transform it
    const categories: categoryItem[] = Array.isArray(categoriesData) ? categoriesData.map((category) => ({
        id: parseInt(category.id), // Ensure id is a number
        name: category.title, // Assuming title is the name you want
        href: `/blog?category=${category.title.replace(/\s+/g, '-').toLowerCase()}` // Create href based on title
    })) : [];

    if (loading) return <p>Loading...</p>;
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
             {/* Metadata using the Head component */}
             <Head>
                <title>Life Insurance - Think Life</title>
                <meta name="description" content="Life Insurance." />
            </Head>
            <div className="mx-auto max-w-7xl px-8">
                <Search />
                <BlogTabs categories={categories} />

                <section className='mb-16'>
                    <div className="article_heading flex gap-[10.67px] items-center mb-4">
                        <h3>Articles</h3>
                    </div>
                    <ArticleCard articles={articles2} />
                </section>

                <Pagination />
            </div>
            <Footer />
        </>
    );
}