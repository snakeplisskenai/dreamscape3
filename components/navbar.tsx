"use client";

import * as React from "react";
import Link from "next/link";
import { Camera } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const categories = [
  {
    title: "Photography",
    href: "/category/photography",
    description: "Professional photography for all your creative needs",
    subcategories: ["Nature", "Portrait", "Architecture", "Travel"]
  },
  {
    title: "Vectors",
    href: "/category/vectors",
    description: "High-quality vector graphics and illustrations",
    subcategories: ["Icons", "Patterns", "Backgrounds", "Logos"]
  },
  {
    title: "Videos",
    href: "/category/videos",
    description: "Stock footage and motion graphics",
    subcategories: ["4K", "Aerial", "Business", "Nature"]
  }
];

export function Navbar() {
  return (
    <div className="border-b bg-background">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Camera className="h-6 w-6" />
          <span className="text-xl font-bold">Digital Dreamscape</span>
        </Link>

        <NavigationMenu className="mx-6">
          <NavigationMenuList>
            {categories.map((category) => (
              <NavigationMenuItem key={category.title}>
                <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {category.subcategories.map((subcategory) => (
                      <li key={subcategory}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`${category.href}/${subcategory.toLowerCase()}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{subcategory}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}