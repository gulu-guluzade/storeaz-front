"use client";

import pc from "@/Mock/pc";
import { useParams } from "next/navigation";
import DetailPage from "@/Components/DetailPage";

const detailPage = () => {
  const { id } = useParams();

  return <DetailPage products={pc} pathName={String(id)} />;
};

export default detailPage;
