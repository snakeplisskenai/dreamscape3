"use client";

import { useEffect, useState } from "react";
import { StockGrid } from "./stock-grid";
import { fetchStockAssets } from "@/lib/adobe-stock";
import { Loader } from "./loader";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import type { StockAsset } from "@/types/stock";

export default function StockPortfolio() {
  const [assets, setAssets] = useState<StockAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        setError(null);
        const data = await fetchStockAssets();
        setAssets(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load portfolio assets");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadAssets();
  }, []);

  if (loading) return <Loader />;
  
  if (error) {
    return (
      <Alert variant="destructive" className="mx-auto max-w-2xl mt-8">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!assets.length) {
    return (
      <Alert className="mx-auto max-w-2xl mt-8">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          No images found. Please check your search parameters.
        </AlertDescription>
      </Alert>
    );
  }

  return <StockGrid assets={assets} />;
}