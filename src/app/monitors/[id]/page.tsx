"use client";

import monitors from "@/Mock/monitors";
import { useParams } from "next/navigation";
import DetailPage from "@/Components/DetailPage";

const detailPage = () => {
  const { id } = useParams();

  return <DetailPage products={monitors} pathName={String(id)} />;
};

export default detailPage;
