import axios from "axios";
import { config } from "@/lib/config";
import type { StockAsset, StockApiResponse } from "@/types/stock";

export async function fetchStockAssets(limit: number = config.adobe.resultsPerPage || 20): Promise<StockAsset[]> {
  try {
    const params = {
      'search_parameters[limit]': limit,
      'search_parameters[creator_id]': config.adobe.creatorId,
      'search_parameters[filters][content_type:photo]': 1,
      'result_columns[]': [
        'id',
        'title',
        'thumbnail_url',
        'category',
        'width',
        'height',
        'creation_date'
      ],
      'locale': 'en_US'
    };

    console.log("Fetching Adobe Stock assets with params:", params);

    const response = await axios.get<StockApiResponse>(config.adobe.apiUrl, {
      params,
      headers: {
        'x-api-key': config.adobe.apiKey,
        'x-product': 'Adobe Stock Portfolio/1.0.0',
        'Accept': 'application/json'
      }
    });

    console.log("Adobe Stock API Response:", response.data);

    if (!response.data?.files?.length) {
      console.warn("No files found in Adobe Stock API response");
      return [];
    }

    return response.data.files.map(file => ({
      id: String(file.id),
      title: file.title || "Untitled",
      thumbnailUrl: file.thumbnail_url,
      category: file.category?.name || "Photography",
      width: file.width,
      height: file.height,
      createdAt: file.creation_date
    }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;
      const data = error.response?.data;
      
      console.error("Adobe Stock API Error:", { status, message, data });
      
      // More descriptive error message based on the status code
      let errorMessage = "Failed to fetch Adobe Stock assets";
      if (status === 401 || status === 403) {
        errorMessage = "Authentication failed. Please check your API credentials.";
      } else if (status === 400) {
        errorMessage = `Invalid request: ${message}`;
      }
      
      throw new Error(errorMessage);
    }
    
    console.error("Unexpected error:", error);
    throw new Error("An unexpected error occurred while fetching assets");
  }
}