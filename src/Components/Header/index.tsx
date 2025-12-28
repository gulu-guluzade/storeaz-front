"use client";

import Link from "next/link";
import links from "@/Mock/links";
import Container from "../Container";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const path = usePathname();
  const [displayValue, setDisplayValue] = useState("hidden");

  const handleClick = () => {
    displayValue === "hidden"
    ? setDisplayValue("flex")
    : setDisplayValue("hidden");
  }

  
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setDisplayValue("hidden");
    };
    
    if (media.matches) setDisplayValue("hidden");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);
  


  return (
    <header className="py-5">
      <Container>
        <nav className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-between">
          {/* Logo */}
          <div className="w-full flex items-center justify-between md:justify-center lg:block lg:w-fit">
            <Link href="/" className="block w-40">
              <img className="block w-full object-cover" src="/logo-black.png" alt="logo" />
            </Link>
            <button className={`relative z-20 cursor-pointer md:hidden 
              ${displayValue === "hidden" ? "text-black" : "text-white"}`} onClick={handleClick}>
              {displayValue === "hidden" ? <Menu size={34}/> : <X size={34}/>}
            </button>
          </div>
          {/* Links */}
          <div
            className={`bg-[rgba(0,0,0,0.9)] fixed inset-0 z-10 
            ${displayValue} flex-col justify-center items-center gap-y-5 
            md:flex md:bg-transparent md:static md:flex-row md:gap-x-8`}
          >
            {links.map(({ id, title, to }) => {
              return (
                <Link
                  className={`uppercase font-bold text-lg md:text-sm 
                  ${to === path ? "text-[#04FF5A] md:text-[#212121]" : "text-white md:text-[#7a7a7a]"}`}
                  onClick={() => setDisplayValue("hidden")}
                  href={to}
                  key={id}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
