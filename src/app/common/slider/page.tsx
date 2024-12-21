"use client";
import React from "react";
import Image from "next/image";
import sliderImage from "../../../../public/assets/slider_img.jpg";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
    return (
        <>
            <div className="slider_card">
                {/* Swiper Component */}
                <Swiper
                    autoplay={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination", // Custom pagination outside
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="flex flex-wrap lg:gap-y-0 gap-y-6">
                            <div className="slider_content lg:w-1/2">
                                <h3>Lorem ipsum dolor sit amet, consectetur </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore </p>
                                <small>5 minute read</small>
                                <Link href="#" className="small_outline_primary">Income Protection</Link>
                            </div>
                            <div className="slider_image lg:w-1/2">
                                <Image src={sliderImage} alt="slide image" className="block ms-auto" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-wrap lg:gap-y-0 gap-y-6">
                            <div className="slider_content lg:w-1/2">
                                <h3>Lorem ipsum dolor sit amet, consectetur </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore </p>
                                <small>5 minute read</small>
                                <Link href="#" className="small_outline_primary">Income Protection</Link>
                            </div>
                            <div className="slider_image lg:w-1/2">
                                <Image src={sliderImage} alt="slide image" className="block ms-auto" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* Custom Pagination outside of the Swiper component */}
                <div className="swiper-pagination"></div>
            </div>
        </>
    );
}
