"use client";

// Others imports
import Container from "../Container";
import carousel from "@/Mock/carousel";
import { ICarousel } from "@/Types/carousel";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/autoplay";

const Carousel = () => {
  return (
    <section className="bg-[#F7F7F7]">
      <Container>
        <div>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={3000}
            slidesPerView={2}
            spaceBetween={60}
            grabCursor={true}
            autoplay={{
              delay: 1000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
            }}
          >
            {carousel.map(({ id, imageSrc, imageAlt }: ICarousel) => {
              return (
                <SwiperSlide key={id}>
                  <div className="relative py-5">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="block w-full object-contain"
                    />
                    <div className="bg-[#F7F7F7] absolute inset-0 opacity-40 transition-opacity duration-200 hover:opacity-0"></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Carousel;
