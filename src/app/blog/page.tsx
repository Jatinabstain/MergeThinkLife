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



"use client"; // This line makes it a client component

import Header from '../common/header';
import Footer from '../common/footer';
import Search from '../common/search/page';
import Link from 'next/link';
import ArticleCard from '../common/components/articles/articleCard';
import Pagination from '../common/components/pagination';
import Slider from '../common/slider/page';
import useNotionClient from '../common/components/NotionClient'; // Adjust the path as necessary

export default function Blog() {
    // Fetch 3 articles for articles
    const { data: articles, loading: loadingArticles, error: errorArticles } = useNotionClient({ no_of_record: 3 });
    
    // Fetch all articles for articles2 (null for no_of_record)
    const { data: articles2, loading: loadingArticles2, error: errorArticles2 } = useNotionClient({ no_of_record: 0 });

    // Combine loading and error states
    const loading = loadingArticles || loadingArticles2;
    const error = errorArticles || errorArticles2;

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
                <div className="blog_tabs max-w-[636px] mb-16 mx-auto">
                    <div className="flex gap-x-9 lg:justify-center items-center flex-wrap lg:gap-y-0 gap-y-6">
                        <Link href="blog" className='blog_tab_link active'>All</Link>
                        <Link href="blogCategory" className='blog_tab_link'>Life Insurance</Link>
                        <Link href="#" className='blog_tab_link'>Work-Life</Link>
                        <Link href="#" className='blog_tab_link'>Wellness</Link>
                        <Link href="#" className='blog_tab_link'>Money</Link>
                    </div>
                </div>

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