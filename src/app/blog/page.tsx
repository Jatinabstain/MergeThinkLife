"use client"; // This line makes it a client component
import React, { useState, useEffect } from 'react';

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


// export const metadata: Metadata = {
//     title: 'Blog - Think Life',
//     description: 'Blog',
// }

export default function Blog() {
    
    const { data: articles, loading: loadingArticles, error: errorArticles } = useNotionClient({ fetchFor: "Article1" });

    const { data: articles2, loading: loadingArticles2, error: errorArticles2 } = useNotionClient({ fetchFor: "Article2" });

    const { data: categoriesData, loading: loadingCategories, error: errorCategories } = useNotionClient({ fetchFor: "Categories" });

    // Combine loading and error states
    const loading = loadingArticles || loadingArticles2 || loadingCategories;
    const error = errorArticles || errorArticles2 || errorCategories;

    // Transform categoriesData to match CategoryItem structure
    const categories: CategoryItem[] = Array.isArray(categoriesData) ? categoriesData.map((category) => ({
        id: parseInt(category.id), // Ensure id is a number
        name: category.name || "Unnamed Category", // Ensure title is available
        href: category.href // Create href based on title
    })) : [];

    




    // #################### pagination

        const [currentPage, setCurrentPage] = useState(1); // Manage currentPage using state
        
        // Assuming articles is an array and you have a total count
        const totalArticles = articles2.length; // Replace with actual total count from your API
       
        const articlesPerPage = 1; // Define how many articles per page
        
        const totalPages = Math.ceil(totalArticles / articlesPerPage); // Calculate total pages

        const [currentArticles, setCurrentArticles] = useState<ArticleItem[]>([]);

        useEffect(() => {
            if (articles2) {
                const startIndex = (currentPage - 1) * articlesPerPage;
                const endIndex = startIndex + articlesPerPage;
                setCurrentArticles(articles2.slice(startIndex, endIndex));
            }
        }, [articles2, currentPage]);

        const handlePageChange = (newPage: number) => {
            setCurrentPage(newPage); // Update currentPage state
            const startIndex = (newPage - 1) * articlesPerPage;
            const endIndex = startIndex + articlesPerPage;
            setCurrentArticles(articles2.slice(startIndex, endIndex));
        };

    // #################### End of Pagination


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
            <div className="mx-auto max-w-[1200px] px-8">
                <Search />
                <BlogTabs category={categories} />

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

                <section className='mb-16'>
                    <div className="article_heading flex gap-[10.67px] items-center mb-4">
                        <h3>Articles</h3>
                    </div>
                    <ArticleCard articles={currentArticles} />
                </section>

                <Pagination currentPage={currentPage} totalPages={totalPages}  onPageChange={handlePageChange} />
            </div>
            <Footer />
        </>
    );
}