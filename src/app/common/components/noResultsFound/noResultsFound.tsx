import Image from 'next/image'
// import noResults from '../../../../public/assets/no-results.svg';
import noResults from '../../../../../public/assets/no-results.svg';


type noResultsProps = {
    message: string | null; // Active Category String can be an string or null
};

export default function noResultsFound({ message}: noResultsProps) {
    return (
        <>
            <div className="mx-auto max-w-[1200px] px-8">
                <div className="min-h-screen bubble_bg flex flex-wrap flex-col">
                    <div className="comming_soon mt-12">
                        <Image src={noResults} alt='No Result Found IMG' className='mx-auto mb-7' />
                        <div className="error_content">
                            <h3 className='mb-4'>No results found</h3>
                            <p>{message ?? "We couldn&apos;t find what you searched for. Try searching again."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}