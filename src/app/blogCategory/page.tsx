"use client"; // This line makes it a client component
import React, { useState, useEffect } from 'react';

import Header from '../common/header';
import Footer from '../common/footer';
import Search from '../common/search/page';
import ArticleCard from '../common/components/articles/articleCard';
import Pagination from '../common/components/pagination';
import BlogTabs from '../common/components/blog/blogTabs';
import useNotionClient from '../common/components/NotionClient';
import { CategoryItem } from '@/types/categoryTypes';
import { ArticleItem } from '@/types/articleCardTypes';
import Loader from '../common/components/loader/loader';

export default function BlogCategory() {
    
    const { data: articles2, loading: loadingArticles2, error: errorArticles2 } = useNotionClient({ fetchFor: "Article2" });
    const { data: categoriesData, loading: loadingCategories, error: errorCategories } = useNotionClient({ fetchFor: "Categories" });

    const loading = loadingArticles2 || loadingCategories;
    const error = errorArticles2 || errorCategories;

    // Transform categoriesData to match CategoryItem structure
    const categories: CategoryItem[] = Array.isArray(categoriesData) ? categoriesData.map((category) => ({
        id: parseInt(category.id), // Ensure id is a number
        name: category.name || "Unnamed Category", // Ensure title is available
        href: category.href,
    })) : [];






    // #################### pagination

    // const searchParams = useSearchParams();

    // const initialPage = parseInt(searchParams.get('page') || '1', 10); // Get the initial page from query parameters

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

    // Handle loading state
    if (loading) return <><Loader /></>;

    // Handle error state
    if (error) {
        return (
            <>
                <Header />
                <div className="mx-auto max-w-7xl px-8">
                    <p>Error fetching articles: {error}</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="mx-auto max-w-[1200px] px-8">
                <Search />
                <BlogTabs category={categories} active_cat={null}/>

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