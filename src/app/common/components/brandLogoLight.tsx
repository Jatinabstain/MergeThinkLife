import Image from 'next/image';
import LogoLight from '../../../../public/assets/logo-light.svg'
import Link from "next/link";

export default function Footer() {
    return (
        <div className="light-logo">
            <Link href="/" className='w-fit block'>
                <Image
                    src={LogoLight}
                    alt='Think Life'
                    className='object-contain logo_footer mb-[50px] w-fit'
                />
            </Link>
        </div>
    );
}