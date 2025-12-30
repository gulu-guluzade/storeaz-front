"use client";

import laptops from "@/Mock/laptops";
import { useParams } from "next/navigation";
import DetailPage from "@/Components/DetailPage";

const detailPage = () => {
  const { id } = useParams();

  return <DetailPage products={laptops} pathName={String(id)} />;
};

export default detailPage;
