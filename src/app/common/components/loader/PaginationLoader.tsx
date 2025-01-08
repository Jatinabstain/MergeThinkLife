import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function PaginationLoader() {
    return (
        <SkeletonTheme baseColor="#F1EDFD" highlightColor="#ffffff" borderRadius={12}>
            <div className="flex justify-center items-center mb-32">
                <div className="pagination">
                    <ul className="flex items-center">
                        <li className="pagination-item">
                            <Skeleton width={30} height={30} circle={true} />
                        </li>
                        {[...Array(5)].map((_, index) => (
                            <li key={index} className="pagination-item">
                                <Skeleton width={30} height={30} />
                            </li>
                        ))}
                        <li className="pagination-item">
                            <Skeleton width={30} height={30} circle={true} />
                        </li>
                    </ul>
                </div>
            </div>
        </SkeletonTheme>
    );
}
