"use client";

import React from 'react';
import Link from "next/link";
import { CategoryItem } from '@/types/categoryTypes';

type CategoriesProps = {
    category: CategoryItem[] | null; // Category can be an array or null
    active_cat: string | null; // Active Category String can be an string or null
};

export default function BlogTabs({ category , active_cat}: CategoriesProps) {
    return (
        <div className="blog_tabs max-w-[636px] mb-16 mx-auto">
            <div className="flex gap-x-9 lg:justify-center items-center flex-wrap lg:gap-y-0 gap-y-6">
                {/* Static Link */}
                <div key='all'>
                    <Link href="blog" className={`blog_tab_link ${active_cat === null ? 'active' : ''}`}>All</Link>
                </div>

                {/* Dynamic Link */}
                {(!category || category.length === 0) ? (<></>) : category.map((item) => (
                    <div key={item.id || item.name}>
                        <Link href={`/search?category=`+item.href} className={`blog_tab_link ${active_cat === item.href ? 'active' : ''}`}>{item.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}