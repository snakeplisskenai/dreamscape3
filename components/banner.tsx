"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const bannerImages = [
  {
    url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    alt: "Digital creativity",
    title: "Unleash Your Creative Vision",
    description: "Premium stock photos for your digital dreams"
  },
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    alt: "Digital technology",
    title: "Transform Your Digital Presence",
    description: "High-quality visuals for impactful storytelling"
  },
  {
    url: "https://images.unsplash.com/photo-1620121692029-d088224ddc74",
    alt: "Digital art",
    title: "Elevate Your Projects",
    description: "Curated collection of stunning imagery"
  }
];

export function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          isTransitioning ? "opacity-0" : "opacity-100"
        )}
      >
        <Image
          src={bannerImages[currentIndex].url}
          alt={bannerImages[currentIndex].alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4 transition-transform duration-500 transform translate-y-0">
            {bannerImages[currentIndex].title}
          </h1>
          <p className="text-xl transition-transform duration-500 transform translate-y-0">
            {bannerImages[currentIndex].description}
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 500);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === currentIndex ? "bg-white" : "bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}