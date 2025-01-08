import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function CategoryLoader() {
    return (
        <SkeletonTheme baseColor="#F1EDFD" highlightColor="#ffffff" borderRadius={12}>
            <div className="mb-[102px] mt-16">
                <Skeleton height={524} width={1140} />
            </div>

            <div className="flex flex-wrap lg:flex-row flex-col">
                <div className="lg:w-3/4 lg:pr-9">
                    <div className="page_heading mb-16">
                        <Skeleton height={40} width={`80%`} />
                    </div>

                    <div className="artical_inner">
                        <div className="notion-content">
                            <Skeleton count={5} />
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/4">
                    <div className="article_time">
                        <Skeleton height={20} width={`50%`} />
                    </div>

                    <div className="article_tab mb-16">
                        <div className="article_link_toggle mb-3">
                            <Skeleton height={30} width={`70%`} />
                        </div>

                        <div className="article_sidebar">
                            <ul>
                                <Skeleton count={5} />
                            </ul>
                        </div>
                    </div>

                    <div className="article_ads">
                        <Skeleton height={200} width={`100%`} />
                        <Skeleton height={40} width={`60%`} />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
}
