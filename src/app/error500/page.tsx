import Image from 'next/image'
import errorImg from '../../../public/assets/500.png';
import Link from 'next/link';

export default function error500() {
    return (
        <>
            <div className="mx-auto max-w-[1200px] px-8">
                <div className="min-h-screen bubble_bg flex flex-wrap flex-col justify-center">
                    <div className="comming_soon">
                        <Image src={errorImg} alt='coming soon' className='mx-auto mb-5' />
                        <div className="error_content">
                            <h3 className='mb-6'>ERROR <span className='text_primary'>500</span></h3>
                            <p className='mb-0'>We&apos;re experiencing a temporary <br />issue. Please try again later. <br />Thank you for your patience!</p>
                            <Link href="/" className='mt-6 primary_fill mx-auto'>Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}