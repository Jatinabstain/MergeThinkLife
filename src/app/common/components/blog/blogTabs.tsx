"use client";

import { usePathname } from 'next/navigation';
import React from 'react';
import Link from "next/link";

const tabs = [
    { name: 'All', href: '/blog' },
    { name: 'Life Insurance', href: '/blog-category' },
    { name: 'Work-Life', href: '#' },
    { name: 'Wellness', href: '#' },
    { name: 'Money', href: '#' },
]

export default function BlogTabs() {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className="blog_tabs max-w-[636px] mb-16 mx-auto">
            <div className="flex gap-x-9 lg:justify-center items-center flex-wrap lg:gap-y-0 gap-y-6">
                {tabs.map((item) => (
                    <div key={item.name}>
                        <Link href={item.href} className={`blog_tab_link ${pathname === item.href ? 'active' : ''}`}>{item.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}