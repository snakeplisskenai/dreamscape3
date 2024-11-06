import { Suspense } from "react";
import { fetchStockAssets } from "@/lib/adobe-stock";
import { StockGrid } from "@/components/stock-grid";
import { Navbar } from "@/components/navbar";
import { SearchBar } from "@/components/search-bar";
import { Loader } from "@/components/loader";
import { Banner } from "@/components/banner";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const assets = await fetchStockAssets();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <Banner />
      <main className="flex-1 px-4 py-8">
        <div className="container mx-auto">
          <div className="mb-8">
            <SearchBar className="mt-6" />
          </div>
          
          <Suspense fallback={<Loader />}>
            {assets.length > 0 ? (
              <StockGrid assets={assets} />
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No images found. Please try adjusting your search criteria.
                </p>
              </div>
            )}
          </Suspense>
        </div>
      </main>
    </div>
  );
}