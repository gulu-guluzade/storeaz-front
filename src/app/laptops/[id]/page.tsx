"use client";

import laptops from "@/Mock/laptops";
import { useParams } from "next/navigation";
import Detail from "@/Components/Detail";

const DetailPage = () => {
  const { id } = useParams();

  return <Detail products={laptops} pathName={String(id)} />;
};

export default DetailPage;
