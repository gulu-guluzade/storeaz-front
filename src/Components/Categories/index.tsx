import links from "@/Mock/links";
import Container from "../Container";
import Link from "next/link";
import { ILinks } from "@/Types/links";


const Categories = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {links.map(({ id, title, to, imageSource }: ILinks) => {
            if (id === 0) return;
            return (
              <div
                className="relative bg-[#C8DBE9] px-4 py-2 flex flex-col items-center gap-y-6"
                key={id}
              >
                <Link href={to} className="absolute inset-0"></Link>
                <div>
                  <img src={imageSource} alt={title} />
                </div>
                <div>
                  <h3 className="uppercase text-[#242424] font-bold">
                    {title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
