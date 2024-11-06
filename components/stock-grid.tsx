"use client";

import { StockCard } from "@/components/stock-card";
import type { StockAsset } from "@/types/stock";
import { useEffect, useState } from "react";

interface StockGridProps {
  assets: StockAsset[];
}

export function StockGrid({ assets }: StockGridProps) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const [displayedAssets, setDisplayedAssets] = useState<StockAsset[]>([]);

  useEffect(() => {
    const startIndex = 0;
    const endIndex = page * itemsPerPage;
    setDisplayedAssets(assets.slice(startIndex, endIndex));
  }, [assets, page]);

  // Implement infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000 &&
        displayedAssets.length < assets.length
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [displayedAssets.length, assets.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displayedAssets.map((asset) => (
        <StockCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}