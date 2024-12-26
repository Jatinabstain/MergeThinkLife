'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from '../../../public/assets/logo.svg'
import Link from "next/link";
import WebMenu from './components/header/mainMenu/WebMenu';
import MobileMenu from './components/header/mainMenu/MobileMenu';
import ActionMenu from './components/header/ActionMenu';
import { MenuItem } from '@/types/types';


const menus: MenuItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about-us' },
    { name: 'How It Works', href: '/how-it-works' }
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white border-b border-gray-300">
            <nav aria-label="Global" className="mx-auto flex max-w-[1200px] items-center justify-between lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <Image
                            src={logo}
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex items-center lg:justify-end lg:gap-x-4">
                    <WebMenu menus={menus} />

                    <ActionMenu />
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <Image
                                src={logo}
                                alt="Logo"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <MobileMenu menus={menus} />

                            <div className="flex items-center gap-x-4 py-6">
                                <ActionMenu />
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}