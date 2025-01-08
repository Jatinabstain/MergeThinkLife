import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function loader() {
    return (
        <SkeletonTheme baseColor="#F1EDFD" highlightColor="#ffffff" borderRadius={12}>
            <div className="grid items-start gap-[38px] lg:grid-cols-3 md:grid-cols-2">
                <div className="h-full">
                    <Skeleton height={176} />
                    <div className="article_content">
                        <small><Skeleton width={100} /></small>
                        <h3><Skeleton width={200} /></h3>
                        <div className="flex justify-between items-center">
                            <p className="card_time"><Skeleton width={100} /></p>
                            <button className="btn_outline_small"><Skeleton width={100} /></button>
                        </div>
                    </div>
                </div>
                <div className="h-full">
                    <Skeleton height={176} />
                    <div className="article_content">
                        <small><Skeleton width={100} /></small>
                        <h3><Skeleton width={200} /></h3>
                        <div className="flex justify-between items-center">
                            <p className="card_time"><Skeleton width={100} /></p>
                            <button className="btn_outline_small"><Skeleton width={100} /></button>
                        </div>
                    </div>
                </div>
                <div className="h-full">
                    <Skeleton height={176} />
                    <div className="article_content">
                        <small><Skeleton width={100} /></small>
                        <h3><Skeleton width={200} /></h3>
                        <div className="flex justify-between items-center">
                            <p className="card_time"><Skeleton width={100} /></p>
                            <button className="btn_outline_small"><Skeleton width={100} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
}

