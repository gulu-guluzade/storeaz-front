"use client";

// Others imports
import { ProductsProps } from "@/Types/products-props";
import { IProducts } from "@/Types/products";
import { usePathname } from "next/navigation";
import Container from "../Container";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";

const DetailPage = ({ products, pathName }: ProductsProps) => {
  const to = usePathname().split("/")[1];

  return (
    <section className="py-10 xs:py-0 xs:pb-10">
      <Container>
        {products.map(
          ({ id, title, productCategory, price, imagesSrc }: IProducts) => {
            if (pathName === id)
              return (
                <div 
                  className="grid grid-cols-1 gap-y-3
                  lg:grid-cols-2 lg:items-center lg:gap-x-10" 
                  key={id}
                >
                  <div>
                    <Swiper 
                      modules={[Navigation, Pagination]}
                      loop
                      grabCursor
                      navigation
                      pagination={{
                        clickable: true,
                        type: "fraction"
                      }}
                    >
                      {imagesSrc.map((imageSrc: string) => {
                        return (
                          <SwiperSlide>
                            <div className="px-8 pb-7 flex items-center justify-center">
                              <img className="block w-full object-cover" src={imageSrc} alt={title} />
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                  <div className="px-10 py-5 xs:py-8 lg:py-10  flex flex-col gap-y-3 shadow-[0_0_10px_rgba(0,0,0,0.15)]">
                    <h2 className="text-xl font-medium  text-[#333333]
                      xs:text-2xl
                      xl:text-3xl">{title}</h2>
                    <strong className="text-xl text-[#45b44d]
                      xs:text-xl
                      xl:text-2xl">{price} ₼</strong>
                    <p className="text-lg font-medium flex items-center justify-start gap-x-1.5">
                      <span className="text-[#333333]">Bölmə:</span> 
                      <Link href={"/" + to} className="text-[#777777] hover:underline">{productCategory}</Link>
                    </p>
                  </div>
                </div>
              );
          }
        )}
      </Container>
    </section>
  );
};

export default DetailPage;
