"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <AlertTriangle className="h-20 w-20 text-destructive" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              Something went wrong!
            </h1>
            <p className="text-muted-foreground">
              An unexpected error occurred
            </p>
            <button
              onClick={() => reset()}
              className="mt-6 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}