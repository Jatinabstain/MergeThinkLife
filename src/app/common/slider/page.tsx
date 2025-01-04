"use client";
import React from "react";
import Image from "next/image";
import placeholder from "../../../../public/assets/placeholder.jpg";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Loader from "../components/loader/slider";
import useNotionClient from "../components/NotionClient";

export default function Slider() {
   // Fetch slider articles
    const { data: sliderArticles, loading: isLoadingSliderArticles, error: sliderArticleError  } = useNotionClient({ fetchFor: "SliderArticles" });

    const isLoading = isLoadingSliderArticles;

    const hasError = sliderArticleError;
    
   // Handle loading and error states
    if (isLoading) return <Loader />;
    if (hasError) return <div><p>Error fetching articles: {hasError}</p></div>;
   
    
    if (!sliderArticles || sliderArticles.length === 0) {
        return <Loader />;
    }
    return (
        <>
            <div className="slider_card">
                {/* Swiper Component */}
                <Swiper autoplay={true} loop={true} pagination={{ 
                    clickable: true, el: ".swiper-pagination", // Custom pagination outside 
                    }}
                modules={[Autoplay, Pagination]} className="mySwiper" >

                    {sliderArticles.map((item) => (
                    <SwiperSlide  key={item.id}>
                        <div  className="flex flex-wrap lg:gap-y-0 gap-y-6">
                            <div className="slider_content lg:w-1/2">
                                <h3>{item.title}</h3>
                                {/* <p>{item.content}</p> */}
                                <small>{item.category ?? "--"}</small>
                                <Link href={'/article?atr_prm='+item.id} className="small_outline_primary">Read More</Link>
                            </div>
                            <div className="slider_image lg:w-1/2">
                                {item.image_url && item.image_url.length > 0 ? (
                                    <Image src={item.image_url}  alt="slide image" className="block ms-auto" width={387} height={176} />
                                ) : (
                                    <div className="article_image_placeholder"> <Image src={placeholder} alt="slide image" className="block ms-auto" width={387} height={176} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                        ))}
                </Swiper>

                {/* Custom Pagination outside of the Swiper component */}
                <div className="swiper-pagination"></div>
            </div>
        </>
    );
}
