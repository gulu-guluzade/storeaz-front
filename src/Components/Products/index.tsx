import Link from "next/link";
import Container from "../Container";
import { IProducts } from "@/Types/products";

interface ProductsProps {
  products: IProducts[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <section className="pt-5 pb-10">
      <Container>
        <div className="grid grid-cols-1 gap-y-10
          xs:grid-cols-2 xs:gap-x-5
          sm:grid-cols-3
          lg:grid-cols-4 lg:gap-x-10">
          {products.map(
            ({ id, title, productCategory, price, imagesSrc }: IProducts) => {
              return (
                <div key={id} 
                  className="px-2 relative border border-transparent rounded-2xl
                  overflow-hidden transition-all duration-200
                  md:hover:shadow-[0_0_10px_rgba(0,0,0,0.15)]
                  md:hover:scale-105">
                  <Link href={id} className="absolute inset-0"></Link>
                  
                  {/* Image */}
                  <div>
                    <img src={imagesSrc[0]} alt={title} />
                  </div>
                  
                  {/* Text */}
                  <div className="text-center flex flex-col items-center gap-y-1">
                    <h4 className="text-sm font-medium text-[#333333]">{title}</h4>
                    <span className="text-xs font-medium text-[#a5a5a5]">{productCategory}</span>
                    <strong className="text-[#45b44d]">{price} ₼</strong>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </Container>
    </section>
  );
};

export default Products;
