import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules"
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import "swiper/css"

const Controls = ({data}) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
    //eslint-disable-next-line react-hooks/exhaustive-deps
    },[data]);
    return <></>
}

const Carousel = ({data,component}) => {
    return (
        <div className={styles.wrapper}>
            <Swiper
            style={{padding: "0px 20px"}}
            initialSlide={0}
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={40}
            allowTouchMove
            >
                <Controls />
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {
                    data.map((ele) => {
                        return (
                            <SwiperSlide>{component(ele)}</SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Carousel;