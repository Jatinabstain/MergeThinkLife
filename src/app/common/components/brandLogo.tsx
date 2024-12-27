import Image from 'next/image';
import logo from '../../../../public/assets/logo.svg'
import Link from "next/link";

export default function BrandLogo() {
    return (
        <Link href="/" className="-m-1.5 p-1.5">
            <Image
                src={logo}
                alt="Logo"
            />
        </Link>
    );
}