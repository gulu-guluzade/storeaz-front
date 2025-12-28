import Link from "next/link";
import Container from "../Container";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-[#45B44D]">
      <Container>
        <div className="flex flex-col gap-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="block w-40">
              <img
                className="w-full block object-cover"
                src="/logo-white.svg"
                alt="logo"
              />
            </Link>
          </div>
          {/* Contacts */}
          <address className="text-white flex flex-col items-center justify-center gap-5 md:flex-row">
            <Link
              href="mailto:info@store.az"
              className="flex items-center gap-x-2 md:order-2"
            >
              <Mail />
              <span className="font-medium">info@store.az</span>
            </Link>
            <Link
              href="tel:+994504578802"
              className="flex items-center gap-x-2 md:order-1"
            >
              <Phone />
              <span className="font-medium">(+994 50) 457-88-02</span>
            </Link>
            <Link
              href="https://maps.app.goo.gl/ENhsGg1RabthuhCGA"
              target="_blank"
              className="flex items-center gap-x-2 md:order-3"
            >
              <MapPin />
              <span className="font-medium">
                Bakı şəhəri, Süleyman Rəhimov 195
              </span>
            </Link>
          </address>
          {/* Social */}
          <div className="text-white flex items-center justify-center gap-x-8">
            <Link
              href="#"
              target="_blank"
              className="block p-2.5 border rounded-full border-gray-200 transition-colors duration-200 hover:bg-black hover:border-black"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="block p-2.5 border rounded-full border-gray-200 transition-colors duration-200 hover:bg-black hover:border-black"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="block p-2.5 border rounded-full border-gray-200 transition-colors duration-200 hover:bg-black hover:border-black"
            >
              <Twitter size={20} />
            </Link>
          </div>
          {/* Created By */}
          <div className="flex items-center justify-center">
            <p className="text-white font-medium flex items-center gap-x-2">
              <span>Store.az Created by</span>
              <Link
                href="https://runwaylanderspot.com/?d=webline.global&pkAId=2143526812"
                target="_blank"
                className="font-bold"
              >
                Webline
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
