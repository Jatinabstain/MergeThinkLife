import Link from "next/link";
import Image from "next/image";
import ArrowLeft from '../../../../public/assets/arrow-left.svg'
import ArrowRight from '../../../../public/assets/arrow-right.svg'

export default function pagination() {
    return (
        <>
            <div className="flex justify-center items-center mb-32">
                <div className="pagination">
                    <ul>
                        <li>
                            <Link href='#' className="arrow_btn">
                                <Image src={ArrowLeft} alt="arrow left" className="left_arrow" />
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className="page_num active">1</Link>
                        </li>
                        <li>
                            <Link href='#' className="page_num">2</Link>
                        </li>
                        <li>
                            <Link href='#' className="page_num">3</Link>
                        </li>
                        <li>
                            <Link href='#' className="page_num">...</Link>
                        </li>
                        <li>
                            <Link href='#' className="page_num">24</Link>
                        </li>
                        <li>
                            <Link href='#' className="arrow_btn">
                                <Image src={ArrowRight} alt="arrow right" className="left_arrow" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}