import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function slider() {
    return (
        <>
            <SkeletonTheme baseColor="#F1EDFD" highlightColor="#ffffff">
                <div className="slider_card">
                    <Swiper autoplay={true} loop={true} pagination={{
                        clickable: true, el: ".swiper-pagination", // Custom pagination outside 
                    }} modules={[Autoplay, Pagination]} className="mySwiper" >
                        <SwiperSlide>
                            <div className="flex flex-wrap lg:gap-y-0 gap-y-6 justify-between">
                                <div className="slider_content lg:w-1/2">
                                    <h3><Skeleton width={200} /></h3>
                                    <p><Skeleton count={3} /></p>
                                    <small><Skeleton width={100} /></small>
                                    <Skeleton width={80} />
                                </div>
                                <div className="slider_image lg:w-1/2 text-end">
                                    <Skeleton width={387} height={176} />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper >
                    {/* Custom Pagination outside of the Swiper component */}
                    <div className="swiper-pagination"></div>
                </div>
            </SkeletonTheme>
        </>
    );
}
