import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

export default function HomeSlider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                navigation={true}
                spaceBetween={15}
                breakpoints={{
                    0: { slidesPerView: 1.2 },
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 4.5 },
                }}
                modules={[Navigation]}

                className="mySwiper mm-swiper">

                <SwiperSlide>
                    <div className='card-02-item'>
                        <a href="/about-us/">
                            <Image src='/img/pic-1.jpg' alt='Quarry Block Selection' className='img-fluid' width={646} height={818} />
                            <h3>Quarry Block Selection</h3>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card-02-item'>
                        <a href="/about-us/">
                            <Image src='/img/pic-2.jpg' alt='Cutting & Polishing' className='img-fluid' width={646} height={818} />
                            <h3>Cutting & Polishing</h3>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card-02-item'>
                        <a href="/about-us/">
                            <Image src='/img/pic-3.jpg' alt='Hand Carving & Engraving' className='img-fluid' width={646} height={818} />
                            <h3>Hand Carving & Engraving</h3>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card-02-item'>
                        <a href="/about-us/">
                            <Image src='/img/pic-4.jpg' alt='Custom Memorial Fabrication' className='img-fluid' width={646} height={818} />
                            <h3>Custom Memorial Fabrication</h3>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card-02-item'>
                        <a href="/about-us/">
                            <Image src='/img/pic-5.jpg' alt='Quality Assurance' className='img-fluid' width={646} height={818} />
                            <h3>Quality Assurance</h3>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card-02-item'>
                        <a href="/about-us/">
                            <Image src='/img/pic-6.jpg' alt='Export Packaging & Container Dispatch' className='img-fluid' width={646} height={471} />
                            <h3>Export Packaging & Container Dispatch</h3>
                        </a>
                    </div>
                </SwiperSlide>

            </Swiper>
            <style jsx global>
                {`

                .mm-swiper .swiper-button-next,
  .mm-swiper .swiper-button-prev {
    width: 58px;
    height: 58px;
    background: rgb(0 0 0 / 33%);
    border-radius: 50%;
    color: #d95404;
  }
    .mm-swiper .swiper-button-disabled {
  opacity: 1 !important;
    pointer-events: all;
    cursor: pointer;
  }
    .mm-swiper .swiper-button-prev:after, .swiper-button-next:after {
    font-size: 26px;
    font-weight: 600;
}
                `}
            </style>
        </>
    );
}
