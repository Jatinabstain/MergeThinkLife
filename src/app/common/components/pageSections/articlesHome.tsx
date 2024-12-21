// "use client"; // This line makes it a client component

// import ArticleCard from '../articles/articleCard';
// import { ArticleItem } from "@/types/articleCardTypes";
// import articleImg from '../../../../../public/assets/card-1.jpg';
// import Link from 'next/link';
// import useNotionClient from '../NotionClient'; // Adjust the path as necessary



// const articles: ArticleItem[] = [
//     { id: '1', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read",  href: "article", image: articleImg },
//     { id: '2', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read",  href: "article", image: articleImg },
//     { id: '3', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read",  href: "article", image: articleImg }
// ]

// export default function ArticlesHome() {
//     return (
//         <section className="page_section pb-[128px]">
//             <div className="mx-auto max-w-7xl px-8">
//                 <div className="heading mb-8">
//                     <h3>Our Recent Articles</h3>
//                 </div>
//                 <ArticleCard articles={articles} />

//                 <Link href="blog" className="primary_fill_outline mt-8 mx-auto">All Articles</Link>
//             </div>
//         </section>
//     );
// }

"use client"; // This line makes it a client component

import Link from 'next/link';
import useNotionClient from '../NotionClient'; // Adjust the path as necessary
import ArticleCard from '../articles/articleCard';

export default function ArticlesHome() {
    // Use the custom hook to fetch articles
    const { data: articleData, loading, error } = useNotionClient({ no_of_record: 3 });

    // Handle loading and error states
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="page_section pb-[128px]">
            <div className="mx-auto max-w-7xl px-8">
                <div className="heading mb-8">
                    <h3>Our Recent Articles</h3>
                </div>
                <ArticleCard articles={articleData} />
            
                <Link href="blog" className="primary_fill_outline mt-8 mx-auto">All Articles</Link>
            </div>
        </section>
    );
}