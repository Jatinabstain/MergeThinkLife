'use client'
import React, { useState } from "react";
import { AccordionItem } from '@/types/accordionTypes';

type AccordionProps = {
    accordion: AccordionItem[]; // Expecting an array of AccordionItem
};

export default function Accordion({ accordion }: AccordionProps) {
    const [openItemId, setOpenItemId] = useState<string | null>(null);

    const handleToggle = (itemId: string) => {
        // If the clicked item is already open, close it; otherwise, open the clicked item
        setOpenItemId(openItemId === itemId ? null : itemId);
    };

    if (!accordion || accordion.length === 0) {
        return <p className="text-center">No accordion items available.</p>;
    }

    return (
        <>
            {accordion.map((item) => (
                <div key={item.title} className="accordion_item"> {/* Use a unique key */}
                    <h2>
                        <button
                            id={`accordion-title-${item.title}`} // Use item.title for unique identification
                            className="flex items-center justify-between w-full text-left accrodion_heading"
                            onClick={() => handleToggle(item.title)} // Call handleToggle with item.title
                            aria-expanded={openItemId === item.title} // Check if this item is open
                            aria-controls={`accordion-text-${item.title}`}
                        >
                            <span>{item.title}</span>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.59 0.589996L6 5.17L1.41 0.589996L0 2L6 8L12 2L10.59 0.589996Z" fill="black" className={`transform origin-center transition duration-200 ease-out ${openItemId === item.title ? '!rotate-180' : ''}`} />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id={`accordion-text-${item.title}`}
                        role="region"
                        aria-labelledby={`accordion-title-${item.title}`}
                        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${openItemId === item.title ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                        <div className="overflow-hidden">
                            <p className="accordion_content">
                                {item.content}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}