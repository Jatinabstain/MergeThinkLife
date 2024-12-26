import Image from 'next/image'
import Header from '../common/header';
import Footer from '../common/footer';
import approved from '../../../public/assets/approved.svg';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Approved With Changes - Think Life',
    description: 'Approved With Changes',
}

export default function error500() {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-[1200px] px-8">
                <div className="min-h-screen bubble_bg flex flex-wrap flex-col justify-center">
                    <div className="comming_soon">
                        <Image src={approved} alt='coming soon' className='mx-auto mb-5 h-[302px]]' />
                        <div className="error_content">
                            <h3 className='mb-6'>Approved With Changes</h3>
                            <p className='mb-8 w-3/5 mx-auto'>Congratulations! The application submitted with the changes in coverage previously presented and as applied for is approved, pending a quick internal review. Assuming everything is in order, the policy will be issued and out for delivery in the next few business days.</p>
                            <div className="policy_number">
                                <h3>Your Policy Number:</h3>
                                <p>4370422796</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}