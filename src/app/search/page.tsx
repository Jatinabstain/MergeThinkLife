"use client";
import React, { useState, useEffect, Suspense } from 'react';

import Header from '../common/header';
import Footer from '../common/footer';
import SearchInput from '../common/search/page';
import ArticleCard from '../common/components/articles/articleCard';
import Pagination from '../common/components/pagination';
import BlogTabs from '../common/components/blog/blogTabs';
import useNotionClient from '../common/components/NotionClient';
import { CategoryItem } from '@/types/categoryTypes';
import { ArticleItem } from '@/types/articleCardTypes';
import Loader from '../common/components/loader/loader';
import { useSearchParams } from 'next/navigation';
import NoResultsFound from '../common/components/noResultsFound/noResultsFound';
import Error from '../error500/page';

export default function Search() {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-[1200px] px-8">

                <SearchInput />

                {/* Blog */}
                <Suspense fallback={<Loader />}>
                    <BlogTabFunction />
                </Suspense>

                {/* Articles */}
                <Suspense fallback={<Loader />}>
                    <ArticleFunction />
                </Suspense>
            </div>
            <Footer />
        </>
    );
}

// Article Function
function ArticleFunction() {
    const searchParams = useSearchParams();
    const [categoryParam, setCategoryParam] = useState<string | null>(null);
    const [queryParam, setQueryParam] = useState<string | null>(null);
 
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        const queryParam = searchParams.get('s');
        setCategoryParam(categoryParam);
        setQueryParam(queryParam);
    }, [searchParams]);

    const fetchFor = categoryParam ? "CategoryArticle" : "SearchQuery";
    const toFetch = categoryParam || queryParam;

    const { data: fetchedArticles, loading: loadingfetchedArticles, error: errorfetchedArticles } = useNotionClient({ fetchFor: fetchFor, toFetch: toFetch });

    const loading   =   loadingfetchedArticles;
    const error     =   errorfetchedArticles;

    const [currentPage, setCurrentPage]         =   useState(1);
    const [currentArticles, setCurrentArticles] =   useState<ArticleItem[]>([]);

    const totalArticles     =   fetchedArticles.length || 0;
    const articlesPerPage   =   3;
    const totalPages        =   Math.ceil(totalArticles / articlesPerPage);

    useEffect(() => {
        if (fetchedArticles) {
            const startIndex    =   (currentPage - 1) * articlesPerPage;
            const endIndex      =   startIndex + articlesPerPage;
            setCurrentArticles(fetchedArticles.slice(startIndex, endIndex));
        }
    }, [fetchedArticles, currentPage]);

    const handlePageChange  =   (newPage: number) => {
        setCurrentPage(newPage);
        const startIndex    =   (newPage - 1) * articlesPerPage;
        const endIndex      =   startIndex + articlesPerPage;
        setCurrentArticles(fetchedArticles.slice(startIndex, endIndex));
    };

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
            {currentArticles.length > 0 && currentArticles ? (
                <>
                    <section className='mb-16'>
                        <div className="article_heading flex gap-[10.67px] items-center mb-4">
                            <h3>Articles</h3>
                        </div>
                        <ArticleCard articles={currentArticles} />
                    </section>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            ) : (
                <NoResultsFound />
            )}
        </>
    );
}

// Blog Tab Function
function BlogTabFunction() {
    const searchParams = useSearchParams();
    const [active_cat, setActiveCat] = useState<string | null>('all');

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        setActiveCat(categoryParam);
    }, [searchParams]);

    const { data: categoriesData, loading: loadingCategories, error: errorCategories } = useNotionClient({ fetchFor: "Categories" });

    // Transform categoriesData to match CategoryItem structure
    const categories: CategoryItem[] = Array.isArray(categoriesData) ? categoriesData.map((category) => ({
        id: parseInt(category.id),
        name: category.name || "Unnamed Category",
        href: category.href
    })) : [];

    const loading = loadingCategories;
    const error = errorCategories;

    if (loading) return <><Loader /></>;
    if (error) {
        console.log(error)
        return (
            <Error />
        );
    }
    return (
        <>
            <BlogTabs category={categories} active_cat={active_cat} />
        </>
    );
}