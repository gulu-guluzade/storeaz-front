import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <address className="flex flex-col gap-y-4">
      <Link href="mailto:info@store.az" className="flex items-center gap-x-2">
        <Mail className="text-[#45B44D]" size={20} />
        <span className="text-[#333333] font-medium">info@store.az</span>
      </Link>
      <Link href="tel:+994504578802" className="flex items-center gap-x-2">
        <Phone className="text-[#45B44D]" size={20} />
        <span className="text-[#333333] font-medium">(+994 50) 457-88-02</span>
      </Link>
      <Link
        href="https://maps.app.goo.gl/ENhsGg1RabthuhCGA"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-x-2"
      >
        <MapPin className="text-[#45B44D]" size={20} />
        <span className="text-[#333333] font-medium">
          Bakı şəhəri, Süleyman Rəhimov 195
        </span>
      </Link>
    </address>
  );
};

export default ContactInfo;
