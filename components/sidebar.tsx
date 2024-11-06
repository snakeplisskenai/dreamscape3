"use client";

import { Button } from "@/components/ui/button";
import {
  Camera,
  Image,
  Users,
  Building2,
  TreePine,
  PawPrint,
  Coffee,
  Palette,
} from "lucide-react";

const categories = [
  { name: "Photography", icon: Camera },
  { name: "Nature", icon: TreePine },
  { name: "Business", icon: Building2 },
  { name: "People", icon: Users },
  { name: "Animals", icon: PawPrint },
  { name: "Lifestyle", icon: Coffee },
  { name: "Art", icon: Palette },
  { name: "Abstract", icon: Image },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-card px-4 py-6">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Categories</h2>
        <nav className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className="w-full justify-start"
            >
              <category.icon className="mr-2 h-4 w-4" />
              {category.name}
            </Button>
          ))}
        </nav>

        <div className="pt-4 border-t">
          <h3 className="text-sm font-medium mb-3">Filters</h3>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-sm">
              Most Popular
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Latest
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Portrait
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Landscape
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}