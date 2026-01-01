"use client";

import pc from "@/Mock/pc";
import { useParams } from "next/navigation";
import Detail from "@/Components/Detail";

const DetailPage = () => {
  const { id } = useParams();

  return <Detail products={pc} pathName={String(id)} />;
};

export default DetailPage;
