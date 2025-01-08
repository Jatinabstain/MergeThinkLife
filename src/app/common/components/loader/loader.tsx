import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function loader() {
    return (
        <SkeletonTheme baseColor="#F1EDFD" highlightColor="#ffffff" borderRadius={12}>
            <div className="grid items-start gap-[38px] lg:grid-cols-3 md:grid-cols-2">
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="h-full">
                        <Skeleton height={176} />
                        <div className="article_content">
                            <small><Skeleton width={100} /></small>
                            <div className="flex justify-between items-center">
                                <p className="card_time"><Skeleton width={100} /></p>
                                <Skeleton width={100} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SkeletonTheme>
    );
}

