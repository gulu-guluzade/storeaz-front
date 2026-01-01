"use client";

import monitors from "@/Mock/monitors";
import { useParams } from "next/navigation";
import Detail from "@/Components/Detail";

const DetailPage = () => {
  const { id } = useParams();

  return <Detail products={monitors} pathName={String(id)} />;
};

export default DetailPage;
