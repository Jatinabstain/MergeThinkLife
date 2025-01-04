"use client";
import React, { useState, useEffect,Suspense } from 'react';

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
import CategoryLoader from '../common/components/loader/CategoryLoader';
import PaginationLoader from '../common/components/loader/PaginationLoader';
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
                <Suspense>
                    <BlogTabFunction />
                </Suspense>

                {/* Articles */}
                <Suspense>
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
        setCategoryParam(categoryParam);
    }, [searchParams]);

    useEffect(() => {
        const queryParam = searchParams.get('s');
        setQueryParam(queryParam);
    }, [searchParams]);

    let fetchFor = "";
    let toFetch = "";
    if (categoryParam) {
        fetchFor = "CategoryArticle";
        toFetch = categoryParam;
    }
    if (queryParam) {
        fetchFor = "SearchQuery";
        toFetch = queryParam;
    }


    const { data: fetchedArticles, loading: loadingfetchedArticles, error: errorfetchedArticles } = useNotionClient({ fetchFor: fetchFor, toFetch: toFetch });

    const loading = loadingfetchedArticles;
    const error = errorfetchedArticles;

    const [currentPage, setCurrentPage] = useState(1);
    const [currentArticles, setCurrentArticles] = useState<ArticleItem[]>([]);

    const totalArticles = fetchedArticles.length || 0;
    const articlesPerPage = 3;
    const totalPages = Math.ceil(totalArticles / articlesPerPage);

    useEffect(() => {
        if (fetchedArticles) {
            const startIndex = (currentPage - 1) * articlesPerPage;
            const endIndex = startIndex + articlesPerPage;
            setCurrentArticles(fetchedArticles.slice(startIndex, endIndex));
        }
    }, [fetchedArticles, currentPage]);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        const startIndex = (newPage - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        setCurrentArticles(fetchedArticles.slice(startIndex, endIndex));
    };


    if (error) {
        return (
            <div>
                <p>Error fetching articles: {error}</p>
            </div>
        );
    }
    return (

        <>
            <section className='mb-16'>
                <div className="article_heading flex gap-[10.67px] items-center mb-4">
                    <h3>Articles</h3>
                </div>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        {currentArticles.length > 0 && currentArticles ? (
                            <ArticleCard articles={currentArticles} />
                        ) : (
                            <NoResultsFound message={null} />
                        )}
                    </>

                )}

            </section>
            {currentArticles.length > 0 && currentArticles ? (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            ) : (
                <PaginationLoader />
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

    if (loading) return <CategoryLoader />;
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