"use client"; // This line makes it a client component
// import React, { useState } from 'react';
import React, { useState, useEffect, Suspense } from 'react';

import Link from 'next/link';
import SearchIcon from '../../../../public/assets/search.svg';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Loader from '../components/loader/loader';



export default function SearchBar() {


    return (
        <Suspense fallback={<Loader />}>
            <Input />
        </Suspense>
    );
}


function Input() {
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value); // Update search query as the user types
    };

    useEffect(() => {
        const categoryParam = searchParams.get('s');
        setSearchQuery(categoryParam || '');
    }, [searchParams]);

    return (
        <div className="mt-16 mb-8 flex gap-4 justify-center items-center">
            <input
                type="text"
                className="form-input max-w-xl w-full"
                // placeholder="Article Label"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange} // Capture input value
            />
            <Link href={`/search?s=${encodeURIComponent(searchQuery)}`} className="primary_fill_icon">
                <Image src={SearchIcon} alt="search" className="input_icon" />
            </Link>
        </div>
    );
}