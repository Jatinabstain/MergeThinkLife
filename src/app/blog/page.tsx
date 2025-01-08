"use client";
import React, { useState, useEffect } from 'react';

import Header from '../common/header';
import Footer from '../common/footer';
import Search from '../common/search/page';
import Image from 'next/image';
import HeadingStar from '../../../public/assets/heading-star.svg'
import ArticleCard from '../common/components/articles/articleCard';
import Pagination from '../common/components/pagination';
import Slider from '../common/slider/page';
import BlogTabs from '../common/components/blog/blogTabs';
import { CategoryItem } from '@/types/categoryTypes';
import { ArticleItem } from '@/types/articleCardTypes';
import useNotionClient from '../common/components/NotionClient';
// import Loader from '../common/components/loader/loader';
import Error from '../error500/page';

export default function Blog() {

    // Fetch popular articles
    const { data: articleList, loading: isLoadingArticles, error: articleError } = useNotionClient({ fetchFor: "Popular" });

    // Fetch paginated articles
    const { data: paginatedArticles, loading: isLoadingPaginatedArticles, error: paginatedArticleError } = useNotionClient({ fetchFor: "PaginatedArticles" });

    // Fetch categories
    const { data: categoriesData, loading: isLoadingCategories, error: categoryError } = useNotionClient({ fetchFor: "Categories" });

    // Combine loading and error states
    const isLoading = isLoadingArticles || isLoadingPaginatedArticles || isLoadingCategories;

    const hasError = articleError || paginatedArticleError || categoryError;

    // Transform categoriesData to match CategoryItem structure
    const categories: CategoryItem[] = Array.isArray(categoriesData) ? categoriesData.map((category) => ({
        id: parseInt(category.id, 10),
        name: category.name || "Unnamed Category",
        href: category.href
    })) : [];

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage   =   3;
    const totalArticles     =   paginatedArticles.length;
    const totalPages        =   Math.ceil(totalArticles / articlesPerPage);

    const [currentArticles, setCurrentArticles]     =   useState<ArticleItem[]>([]);

    useEffect(() => {
        if (paginatedArticles) {
            const startIndex    =   (currentPage - 1) * articlesPerPage;
            const endIndex      =   startIndex + articlesPerPage;
            setCurrentArticles(paginatedArticles.slice(startIndex, endIndex));
        }
    }, [paginatedArticles, currentPage]);

    const handlePageChange = (newPage: number) => setCurrentPage(newPage);

    // Handle loading and error states
    // if (isLoading) return <><Loader /></>;
console.log('isLoading', isLoading)
    if (hasError) {
        console.log(hasError)
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

            <div className="mx-auto max-w-[1200px] px-8 pt-16">
                {/* <Search /> */}
                <BlogTabs category={categories} active_cat={null} />

                {/* Latest Articles Slider */}
                <section className='mb-32'>
                    <div className="article_heading flex gap-[10.67px] items-center mb-4">
                        <h3>The Latest</h3>
                    </div>
                    <Slider />
                </section>

                {/* Popular Articles */}
                <section className='mb-32'>
                    <div className="article_heading flex gap-[10.67px] items-center mb-4">
                        <Image src={HeadingStar} alt="" className='heading_icon' />
                        <h3>Most Popular Articles</h3>
                    </div>
                    <ArticleCard articles={articleList} />
                </section>

                {/* Paginated Articles */}
                <section className='mb-16'>
                    <div className="article_heading flex gap-[10.67px] items-center mb-4">
                        <h3>Articles</h3>
                    </div>
                    <ArticleCard articles={currentArticles} />
                </section>

                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
            <Footer />
        </>
    );
}
