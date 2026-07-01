"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import ModelBox from "@/components/ModelBox";
import Image from "next/image";

const slides = [
    {
        desktop: "/img/banner/manufacturing-unit.png",
        mobile: "/img/banner/manufacturing-unit-mobile.png",
        title: "Wholesale Granite Monuments & Headstones Manufacturer & Supplier from India",
        description:
            "Premium granite memorials crafted at our own factory in India — supplying monument dealers, funeral homes, and cemetery suppliers across the USA and Canada since 1984. No middlemen. No markups.",
    },
    {
        desktop: "/img/banner/factory-unit.png",
        mobile: "/img/banner/factory-unit-mobile.png",
        title: "Custom Granite Memorial Solutions",
        description:
            "Trusted by monument dealers across North America for quality craftsmanship, competitive pricing, and reliable export services.",
    },
    {
        desktop: "/img/banner/ready-unit.png",
        mobile: "/img/banner/ready-unit-mobile.png",
        title: "Direct Factory Pricing Since 1984",
        description:
            "Manufacturing and exporting premium granite monuments with strict quality control and North America shipping support.",
    },
];

export default function HeroSlider() {
    return (
        <section className="hero-slider position-relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                loop
                // autoplay={{
                //   delay: 5000,
                //   disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-wrapper">
                            <div className="slide-image-wrapper">
                                <Image
                                    src={slide.desktop}
                                    alt={slide.title}
                                    fill
                                    priority={index === 0}
                                    className="desktop-image"
                                />

                                <Image
                                    src={slide.mobile}
                                    alt={slide.title}
                                    fill
                                    priority={index === 0}
                                    className="mobile-image"
                                />
                            </div>
                            <div className="slide-content">
                                <div className="container">
                                    {index === 0 ? (
                                        <h1>{slide.title}</h1>
                                    ) : (
                                        <h2 className="slider-title">{slide.title}</h2>
                                    )}

                                    <p>{slide.description}</p>

                                    <div className="hero-banner-btn">
                                        <ModelBox
                                            className="btn-three"
                                            headerText="Scale Your Store!"
                                            buttonText="Request a Quote"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Arrows */}
            <button
                className="custom-prev"
                aria-label="Previous Slide"
            >
                <i className="bi bi-chevron-left"></i>
            </button>

            <button
                className="custom-next"
                aria-label="Next Slide"
            >
                <i className="bi bi-chevron-right"></i>
            </button>
        </section>
    );
}