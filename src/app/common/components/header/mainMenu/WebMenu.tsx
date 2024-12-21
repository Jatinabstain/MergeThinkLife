'use client'

import { usePathname } from 'next/navigation';
import React from "react";
import Link from "next/link";
import {PopoverGroup} from "@headlessui/react";
import { MenuItem } from '@/types/types';

type WebMenuProps = {
    menus: MenuItem[] | null; // Menu can be an array or null
};
export default function WebMenu({ menus }: WebMenuProps) {
    const pathname = usePathname(); // Call usePathname at the top

    if (!menus || menus.length === 0) {
        return <p>No menu items available.</p>;
    }

    return (
        <PopoverGroup className="hidden lg:flex items-center lg:gap-x-8">
            {menus.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`nav_link ${pathname === item.href ? 'active' : ''}`}
                >
                    {item.name}
                </Link>
            ))}
        </PopoverGroup>
    );
}