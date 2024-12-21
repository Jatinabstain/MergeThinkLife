import Link from 'next/link';
import Image from 'next/image';
import Search from '../../../../public/assets/search.svg'

export default function search() {
    return (
        <>
            <div className="mt-16 mb-8 flex gap-4 justify-center items-center">
                <input type="text" className="form-input max-w-xl w-full" placeholder='Search' />
                <Link href="#" className='primary_fill_icon'>
                    <Image src={Search} alt="search" className='input_icon' />
                </Link>
            </div>
        </>
    );
}