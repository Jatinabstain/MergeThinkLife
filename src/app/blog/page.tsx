"use client"; // This line makes it a client component
import React, { useState, useEffect, Suspense } from 'react';

import Header from '../common/header';
import Footer from '../common/footer';
import Search from '../common/search/page';
import Image from 'next/image';
import HeadingStar from '../../../public/assets/heading-star.svg'
import ArticleCard from '../common/components/articles/articleCard';
import Slider from '../common/slider/page';
import BlogTabs from '../common/components/blog/blogTabs';
import { CategoryItem } from '@/types/categoryTypes';
import { ArticleItem } from '@/types/articleCardTypes';
import useNotionClient from '../common/components/NotionClient';
import Loader from '../common/components/loader/loader';
import Pagination from '../common/components/pagination';
import { useSearchParams } from 'next/navigation';


// export const metadata: Metadata = {
//     title: 'Blog - Think Life',
//     description: 'Blog',
// }

export default function Blog() {

    const { data: articles, loading: loadingArticles, error: errorArticles } = useNotionClient({ fetchFor: "Article1" });
  
    
    // Combine loading and error states
    const loading = loadingArticles;
    const error = errorArticles;
    // Handle loading and error states
    if (loading) return <><Loader /></>;
    if (error) {
        return (
            <>
                <Header />
                <div>
                    <p>Error fetching articles: {error}</p>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="mx-auto max-w-[1200px] px-8">
                <Search />
                <Suspense fallback={<Loader />}>
                    <BlogTabFunction />
                </Suspense>

                <section className='mb-32'>
                    <div className="article_heading flex gap-[10.67px] items-center mb-4">
                        <h3>The Latest</h3>
                    </div>
                    <Slider />
                </section>

                <section className='mb-32'>
                    <div className="article_heading flex gap-[10.67px] items-center mb-4">
                        <Image src={HeadingStar} alt="" className='heading_icon' />
                        <h3>Most Popular Articles</h3>
                    </div>
                    <ArticleCard articles={articles} />
                </section>

                <Suspense fallback={<Loader />}>
                    <ArticleFunction />
                </Suspense>
            </div>
            <Footer />
        </>
    );
}

function ArticleFunction() {
    const searchParams = useSearchParams();
    const [categoryParam, setCategoryParam] = useState<string | null>(null);

    useEffect(() => {
        // Get the 'fetch_cat_art' query parameter value when the component mounts or the searchParams change
        const categoryParam = searchParams.get('fetch_cat_art');

        setCategoryParam(categoryParam); // Update state with the new 'fetch_cat_art'
    }, [searchParams]); // Dependency array ensures this effect runs when `searchParams` changes

    //  to fetch from Notion APi
    const { data: articlesByCategory, loading: loadingArticlesByCategory, error: errorArticlesByCategory  } = useNotionClient({ fetchFor: "CategoryArticle", toFetch: categoryParam });

    // Combine loading and error states
    const loading = loadingArticlesByCategory;
    const error = errorArticlesByCategory;

    const [currentPage, setCurrentPage] = useState(1); // Manage currentPage using state
    const [currentArticles, setCurrentArticles] = useState<ArticleItem[]>([]);

    // Assuming articles is an array and you have a total count
    const totalArticles = articlesByCategory.length; // Replace with actual total count from your API

    const articlesPerPage = 3; // Define how many articles per page

    const totalPages = Math.ceil(totalArticles / articlesPerPage); // Calculate total pages

    useEffect(() => {
        if (articlesByCategory) {
            const startIndex = (currentPage - 1) * articlesPerPage;
            const endIndex = startIndex + articlesPerPage;
            setCurrentArticles(articlesByCategory.slice(startIndex, endIndex));
        }
    }, [articlesByCategory, currentPage]);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage); // Update currentPage state
        const startIndex = (newPage - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        setCurrentArticles(articlesByCategory.slice(startIndex, endIndex));
    };

    console.log(error, loading, articlesByCategory);
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
            {/* <div>
                <p>Article Function : {searchParams}</p>
            </div> */}
            <section className='mb-16'>
                <div className="article_heading flex gap-[10.67px] items-center mb-4">
                    <h3>Articles</h3>
                </div>
                <ArticleCard articles={currentArticles} />
            </section>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
    );
}
function BlogTabFunction() {
    const searchParams = useSearchParams();
    const [active_cat, setactive_cat] = useState<string | null>('all');

    useEffect(() => {
        // Get the 'fetch_cat_art' query parameter value when the component mounts or the searchParams change
        const categoryParam = searchParams.get('fetch_cat_art');
        setactive_cat(categoryParam); // Update state with the new 'fetch_cat_art'
    }, [searchParams]); // Dependency array ensures this effect runs when `searchParams` changes

    const { data: categoriesData, loading: loadingCategories, error: errorCategories } = useNotionClient({ fetchFor: "Categories" });

    // Transform categoriesData to match CategoryItem structure
    const categories: CategoryItem[] = Array.isArray(categoriesData) ? categoriesData.map((category) => ({
        id: parseInt(category.id), // Ensure id is a number
        name: category.name || "Unnamed Category", // Ensure title is available
        href: category.href // Create href based on title
    })) : [];

    // Combine loading and error states
    const loading = loadingCategories;
    const error = errorCategories;

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
            <BlogTabs category={categories} active_cat={active_cat} />
        </>
    );
}

