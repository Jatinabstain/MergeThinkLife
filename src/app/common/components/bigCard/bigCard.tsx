import React from "react";
// import { bigCardItem } from '@/types/bigCardItem';
import type { bigCardItem } from '@/types/bigCardItem';

import Link from "next/link";
import Image from "next/image";

type bigCardItemProps = {
    bigCard: bigCardItem[] | null; // Menu can be an array or null
};
export default function bigCardItem({ bigCard }: bigCardItemProps) {
    if (!bigCard || bigCard.length === 0) {
        return <p>No article available.</p>;
    }
    return (
        <div className="grid lg:grid-cols-2 lg:gap-y-0 gap-y-[38px] gap-x-[38px] mb-8">
            {bigCard.map((item) => (
                <div key={item.name} className="bg_primary_light2 p-4 rounded-xl pb-7 hover_card">
                    <Image
                        src={item.icon}
                        alt={item.name}
                        className="object-contain mx-auto mb-5"
                        width={50}
                        height={50}
                    />
                    <h3 className="text-xl	font-bold	text-center mb-8 text-[#000000DE]">{item.name}</h3>
                    <p className="mb-11 text-center text-[#00000099] text-base font-normal">{item.content}</p>
                    <Link href={item.href} className="font-medium text_primary text-center block w-fit mx-auto">Learn more</Link>
                </div>
            ))}
        </div>
    );
}

