import Link from "next/link";
import Container from "../Container";

const Header = () => {
  return (
    <header className="py-5">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="w-40">
            <Link href="/">
              <img className="w-full" src="/logo-black.png" alt="logo" />
            </Link>
          </div>
          <div className="flex items-center gap-x-8">
            <Link className="uppercase text-[#7a7a7a] font-bold text-sm" href="/">Ana Səhifə</Link>
            <Link className="uppercase text-[#7a7a7a] font-bold text-sm" href="/laptops">Noutbuklar</Link>
            <Link className="uppercase text-[#7a7a7a] font-bold text-sm" href="/pc">Kompüterlər PC</Link>
            <Link className="uppercase text-[#7a7a7a] font-bold text-sm" href="/monitors">Monitorlar</Link>
            <Link className="uppercase text-[#7a7a7a] font-bold text-sm" href="/computerAccessories">Kompüter aksesuarları</Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
