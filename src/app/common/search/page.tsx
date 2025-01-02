"use client";
import React, { useState, useEffect, Suspense } from 'react';

import Link from 'next/link';
import SearchIcon from '../../../../public/assets/search.svg';
import Image from 'next/image';
import Loader from '../components/loader/loader';
import { useSearchParams } from 'next/navigation';

export default function SearchBar() {
    return (
        <Suspense fallback={<Loader />}>
            <Input />
        </Suspense>
    );
}

function Input() {
    const searchParams      =   useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [href, setHref]   =   useState('blog');

    const handleInputChange =   (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setHref(`/search?s=${encodeURIComponent(event.target.value)}`); 
    };

    useEffect(() => {
        const categoryParam =   searchParams.get('s') || '';
        setSearchQuery(categoryParam);
        setHref(categoryParam); 
    }, [searchParams]);

    return (
        <div className="mt-16 mb-8 flex gap-4 justify-center items-center">
            <input
                type="text"
                className="form-input max-w-xl w-full"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange}
            />
            <Link href={href} className="primary_fill_icon">
                <Image src={SearchIcon} alt="search" className="input_icon" />
            </Link>
        </div>
    );
}