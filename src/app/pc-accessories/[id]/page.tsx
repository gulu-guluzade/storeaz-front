"use client";

import pcAccessories from "@/Mock/pc-accessories";
import { useParams } from "next/navigation";
import DetailPage from "@/Components/DetailPage";

const detailPage = () => {
  const { id } = useParams();

  return <DetailPage products={pcAccessories} pathName={String(id)} />;
};

export default detailPage;
