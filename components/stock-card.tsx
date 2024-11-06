"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2, ExternalLink } from "lucide-react";
import type { StockAsset } from "@/types/stock";

interface StockCardProps {
  asset: StockAsset;
}

export function StockCard({ asset }: StockCardProps) {
  const productUrl = `/product/${asset.id}`;

  return (
    <Card className="overflow-hidden group">
      <Link href={productUrl}>
        <div className="relative aspect-[4/3] bg-muted">
          <Image
            src={asset.thumbnailUrl}
            alt={asset.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <Button variant="secondary" size="icon">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button variant="secondary" size="icon">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <h3 className="font-medium line-clamp-2 mb-2">{asset.title}</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground">{asset.category}</span>
        </div>
        <Button asChild size="sm" className="w-full">
          <Link href={productUrl} className="inline-flex items-center gap-2">
            Buy Image
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}