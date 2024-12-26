import Image from 'next/image'
import Header from '../common/header';
import Footer from '../common/footer';
import errorImg from '../../../public/assets/404.svg';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - Think Life',
    description: '404',
}
export default function error() {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-[1200px] px-8">
                <div className="min-h-screen bubble_bg flex flex-wrap flex-col justify-center">
                    <div className="comming_soon">
                        <Image src={errorImg} alt='coming soon' className='mx-auto mb-[72px]' />
                        <div className="error_content">
                            <h3 className='mb-6'>ERROR <span className='text_primary'>404</span></h3>
                            <p className='mb-0'>Sorry, the page you are searching <br />for cannot be found</p>
                            <Link href="/" className='mt-6 primary_fill mx-auto'>Go Back</Link>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}