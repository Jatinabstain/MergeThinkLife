import Image from 'next/image'
import Header from '../common/header';
import Footer from '../common/footer';
import noResults from '../../../public/assets/no-results.svg';
// import Search from '../common/search/page';

export default function noResultsFound() {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-[1200px] px-8">
                <div className="min-h-screen bubble_bg flex flex-wrap flex-col">
                    {/* <Search /> */}
                    <div className="comming_soon mt-12">
                        <Image src={noResults} alt='coming soon' className='mx-auto mb-7' />
                        <div className="error_content">
                            <h3 className='mb-4'>No results found</h3>
                            <p>We couldn&apos;t find what you searched for. Try searching again.</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}