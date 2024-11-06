export interface StockAsset {
  id: string;
  title: string;
  thumbnailUrl: string;
  category: string;
  width: number;
  height: number;
  createdAt?: string;
}

export interface StockApiResponse {
  files: Array<{
    id: number;
    title: string;
    thumbnail_url: string;
    category?: {
      name: string;
    };
    width: number;
    height: number;
    creation_date?: string;
  }>;
  nb_results: number;
}