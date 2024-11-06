"use client";

import { useEffect } from "react";
import { Frown } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    // Log the 404 error for analytics purposes
    console.error("404 - Page not found");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Frown className="h-20 w-20 text-muted-foreground" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">404</h1>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
}