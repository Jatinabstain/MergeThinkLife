"use client"; // This line makes it a client component
import React, { useState } from 'react';
import Link from 'next/link';
import SearchIcon from '../../../../public/assets/search.svg';
import Image from 'next/image';

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value); // Update search query as the user types
    };

    return (
        <div className="mt-16 mb-8 flex gap-4 justify-center items-center">
            <input
                type="text"
                className="form-input max-w-xl w-full"
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