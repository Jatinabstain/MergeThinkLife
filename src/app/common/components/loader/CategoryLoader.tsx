import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function CategoryLoader() {
    return (
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#f2f2f2">
            <div className="blog_tabs max-w-[636px] mb-16 mx-auto">
                <div className="flex gap-x-9 lg:justify-center items-center flex-wrap lg:gap-y-0 gap-y-6">
                    {/* Static Link */}
                    <div key='all'>
                        <Skeleton width={50} height={20} />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
}
