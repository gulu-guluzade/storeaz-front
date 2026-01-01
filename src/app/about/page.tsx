import Link from "next/link";
import ContactInfo from "@/Components/ContactInfo";
import Container from "@/Components/Container";

const AboutPage = () => {
  return (
    <main>
      {/* Head */}
      <div className="py-10 bg-black text-white flex flex-col items-center gap-y-8">
        <h2 className="capitalize text-6xl">Haqqımızda</h2>
        <p className="flex items-center gap-x-1.5 text-xs">
          <Link
            className="uppercase hover:text-[#ffffffb3] font-medium"
            href="/"
          >
            Ana səhifə
          </Link>
          <span>/</span>
          <span className="uppercase">Haqqımızda</span>
        </p>
      </div>
      {/* Body */}
      <div>
        <Container>
          <div className="py-10 flex flex-col gap-y-10">
            <p>
              <strong>Store.az</strong> onlayn alış-veriş saytında satılan
              məhsulların hər biri rəsmi distributora məxsusdur və 1 il
              zəmanətlidir. Bizim digər onlayn alış-veriş saytlardan fərqimiz,
              satdığımız məhsulların Bakıda, <strong>Store.az</strong> saytına
              məxsus mağazada olmasıdır. Arzu edənlər sifariş etdiyi məhsulu
              mağazaya yaxınlaşaraq əldə edə bilərlər.
            </p>
            <ContactInfo />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default AboutPage;
