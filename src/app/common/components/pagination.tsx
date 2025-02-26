import Image from "next/image";
import ArrowLeft from '../../../../public/assets/arrow-left.svg'
import ArrowRight from '../../../../public/assets/arrow-right.svg'

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};
export default function pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {

    const pageNumbers = [];

    // if (totalPages <= 2) {
    //     for (let i = 1; i <= totalPages; i++) {
    //         pageNumbers.push(i);
    //     }
    // } else {
    //     if (currentPage <= 3) {
    //         pageNumbers.push(1, 2, 3, '...', totalPages);
    //     } else if (currentPage >= totalPages - 2) {
    //         pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
    //     } else {
    //         pageNumbers.push(1, '...', currentPage, '...', totalPages);
    //     }
    // }

    if (totalPages <= 3) {
        // Display all page numbers directly for small page counts
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else {
        // Ensure currentPage is within valid range
        currentPage = Math.max(1, Math.min(currentPage, totalPages));
    
        if (currentPage <= 3) {
            // First few pages
            pageNumbers.push(1, 2, 3, '...', totalPages);
        } else if (currentPage >= totalPages - 2) {
            // Last few pages
            pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
        } else {
            // Middle pages
            pageNumbers.push(1, '...', currentPage, '...', totalPages);
        }
    }

    return (
        <>
            <div className="flex justify-center items-center mb-32">
                <div className="pagination">
                    <ul className="flex items-center">
                        <li className="pagination-item">
                            {currentPage > 1 ? (
                                <button onClick={() => onPageChange(currentPage - 1)} className="arrow_btn pagination-link">
                                    <Image src={ArrowLeft} alt="Previous" className="left_arrow" />
                                </button>
                            ) : (
                                <button className="arrow_btn pagination-link">
                                    <Image src={ArrowLeft} alt="Previous" className="left_arrow" />
                                </button>
                            )}
                        </li>
                        {pageNumbers.map((page, index) => (
                            <li key={index} className="pagination-item">
                                {typeof page === 'number' ? (
                                    <button onClick={() => onPageChange(page)} className={`page_num pagination-link ${currentPage === page ? 'active' : '123'}`}>
                                        {page}
                                    </button>
                                ) : (
                                    <span className="pagination-ellipsis">{page}</span>
                                )}
                            </li>
                        ))}
                        <li className="pagination-item">
                            {currentPage < totalPages ? (
                                <button onClick={() => onPageChange(currentPage + 1)} className="arrow_btn pagination-link">
                                    <Image src={ArrowRight} alt="Next" className="left_arrow" />
                                </button>
                            ) : (
                                <button className="arrow_btn pagination-link">
                                    <Image src={ArrowRight} alt="Next" className="left_arrow" />
                                </button>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}