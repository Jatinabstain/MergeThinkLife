import Image from 'next/image'
// import noResults from '../../../../public/assets/no-results.svg';
import noResults from '../../../../../public/assets/no-results.svg';

export default function noResultsFound() {
    return (
        <>
            <div className="mx-auto max-w-[1200px] px-8">
                <div className="min-h-screen bubble_bg flex flex-wrap flex-col">
                    <div className="comming_soon mt-12">
                        <Image src={noResults} alt='No Result Found IMG' className='mx-auto mb-7' />
                        <div className="error_content">
                            <h3 className='mb-4'>No results found</h3>
                            <p>We couldn&apos;t find what you searched for. Try searching again.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}