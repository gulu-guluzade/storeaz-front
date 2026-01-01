"use client";

// Others imports
import { ProductsProps } from "@/Types/products-props";
import { usePathname } from "next/navigation";
import Container from "../Container";
import Link from "next/link";

// Swiper
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const Detail = ({ products, pathName }: ProductsProps) => {
  // .filter(Boolean) — убирает пустые элементы ("")
  // ["", "laptops", "123"].filter(Boolean) → ["laptops", "123"]
  const segments = usePathname().split("/").filter(Boolean);
  const to = segments[0] ?? "";

  const product = products.find((p) => p.id === pathName);

  if (!product) {
    return (
      <section className="py-20 xs:py-52">
        <Container>
          <div className="bg-[#d9b158] text-white px-6 py-4 flex items-center gap-x-4">
            <span
              className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold"
              aria-hidden="true"
            >
              !
            </span>
            <p className="font-medium">Məhsul tapılmadı.</p>
          </div>
        </Container>
      </section>
    );
  }

  const { title, productCategory, price, imagesSrc } = product;

  return (
    <section className="py-10 xs:py-0 xs:pb-10">
      <Container>
        <div
          className="grid grid-cols-1 gap-y-3
          lg:grid-cols-2 lg:items-center lg:gap-x-10"
        >
          <div>
            <Swiper
              modules={[Navigation, Pagination]}
              loop
              grabCursor
              navigation
              pagination={{ clickable: true, type: "fraction" }}
            >
              {imagesSrc.map((imageSrc: string) => (
                <SwiperSlide key={imageSrc}>
                  <div className="px-8 pb-7 flex items-center justify-center">
                    <img
                      className="block w-full object-cover"
                      src={imageSrc}
                      alt={title}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="px-10 py-5 xs:py-8 lg:py-10 flex flex-col gap-y-3 shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            <h2
              className="text-xl font-medium text-[#333333]
              xs:text-2xl
              xl:text-3xl"
            >
              {title}
            </h2>

            <strong
              className="text-xl text-[#45b44d]
              xs:text-xl
              xl:text-2xl"
            >
              {price} ₼
            </strong>

            <p className="text-lg font-medium flex items-center justify-start gap-x-1.5">
              <span className="text-[#333333]">Bölmə:</span>
              <Link href={`/${to}`} className="text-[#777777] hover:underline">
                {productCategory}
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Detail;
