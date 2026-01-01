"use client";

import pcAccessories from "@/Mock/pc-accessories";
import { useParams } from "next/navigation";
import Detail from "@/Components/Detail";

const DetailPage = () => {
  const { id } = useParams();

  return <Detail products={pcAccessories} pathName={String(id)} />;
};

export default DetailPage;
