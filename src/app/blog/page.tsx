// import Header from '../common/header';
// import Footer from '../common/footer';
// import Search from '../common/search/page';
// import Image from 'next/image';
// import HeadingStar from '../../../public/assets/heading-star.svg'
// import { ArticleItem } from "@/types/articleCardTypes";
// import articleImg from '../../../public/assets/card-1.jpg';
// import ArticleCard from '../common/components/articles/articleCard';
// import Pagination from '../common/components/pagination';
// import Slider from '../common/slider/page';
// import type { Metadata } from 'next';
// import BlogTabs from '../common/components/blog/blogTabs';

// const articles: ArticleItem[] = [
//     { id: '1', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src },
//     { id: '2', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src },
//     { id: '3', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src }
// ]
// const articles2: ArticleItem[] = [
//     { id: '1', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src },
//     { id: '2', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src },
//     { id: '3', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src },
//     { id: '4', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src },
//     { id: '5', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src },
//     { id: '6', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src },
//     { id: '7', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src },
//     { id: '8', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src },
//     { id: '9', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read", href: "article", image: articleImg.src },
// ]

// export const metadata: Metadata = {
//     title: 'Blog - Think Life',
//     description: 'Blog',
// }

// export default function blog() {
    
//     return (
//         <>
//             <Header />
//             <div className="mx-auto max-w-7xl px-8">
//                 <Search />
//                 <BlogTabs />

//                 <section className='mb-32'>
//                     <div className="article_heading flex gap-[10.67px] items-center mb-4">
//                         <h3>The Latest</h3>            
//                     </div>
//                     <Slider />
//                 </section>

//                 <section className='mb-32'>
//                     <div className="article_heading flex gap-[10.67px] items-center mb-4">
//                         <Image src={HeadingStar} alt="" className='heading_icon' />
//                         <h3>Most Popular Articles</h3>
//                     </div>
//                     <ArticleCard articles={articles} />
//                 </section>

//                 <section className='mb-16'>
//                     <div className="article_heading flex gap-[10.67px] items-center mb-4">
//                         <h3>Articles</h3>
//                     </div>
//                     <ArticleCard articles={articles2} />
//                 </section>

//                 <Pagination />
//             </div>
//             <Footer />
//         </>
//     );
// }

// #############################################################################################################################################################################################

"use client"; // This line makes it a client component

import Header from '../common/header';
import Footer from '../common/footer';
import Search from '../common/search/page';
import ArticleCard from '../common/components/articles/articleCard';
import Pagination from '../common/components/pagination';
import Slider from '../common/slider/page';
import useNotionClient from '../common/components/NotionClient'; // Adjust the path as necessary
import BlogTabs from '../common/components/blog/blogTabs';
import { categoryItem } from '@/types/categoryTypes'; // Import categoryItem type


export default function Blog() {
    // Fetch 3 articles for articles
    // const { data: articles, loading: loadingArticles, error: errorArticles } = useNotionClient({ no_of_record: 3, fetchCategories:1});
    const { data: articles, loading: loadingArticles, error: errorArticles } = useNotionClient({ fetchFor: "Article1"});
    
    // Fetch all articles for articles2 (null for no_of_record)
    // const { data: articles2, loading: loadingArticles2, error: errorArticles2 } = useNotionClient({ no_of_record: 0 , fetchCategories:1});
    const { data: articles2, loading: loadingArticles2, error: errorArticles2 } = useNotionClient({ fetchFor: "Article2"});

   
    // Fetch all articles for articles2 (null for no_of_record)
    // const { data: categories, loading: loadingCategories, error: errorCategories } = useNotionClient({ fetchFor: "Categories" });

    const { data: categoriesData, loading: loadingCategories, error: errorCategories } = useNotionClient({ fetchFor: "Categories" });

    

    // Combine loading and error states
    const loading = loadingArticles || loadingArticles2 || loadingCategories;
    const error = errorArticles || errorArticles2 || errorCategories;

    // Transform categoriesData (NotionPage[]) to categoryItem[]
    const categories: categoryItem[] = categoriesData.map((category) => ({
        id: parseInt(category.id), // Ensure id is a number
        name: category.title, // Assuming title is the name you want
        href: `/blog?category=${category.title.replace(/\s+/g, '-').toLowerCase()}` // Create href based on title
    }));

    // Handle loading and error states
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
            <div className="mx-auto max-w-7xl px-8">
                <Search />
                <BlogTabs categories={categories} />

                <section className='mb-32'>
                    <div className="article_heading flex gap-[10.67px] items-center mb-4">
                        <h3>The Latest</h3>            
                    </div>
                    <Slider />
                </section>

                <section className='mb-32'>
                    <div className="article_heading flex gap-[10.67px] items-center mb-4">
                        <h3>Most Popular Articles</h3>
                    </div>
                    <ArticleCard articles={articles} />
                </section>

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

