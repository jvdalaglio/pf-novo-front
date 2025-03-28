'use client'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Category {
  id: number;
  name: string;
}

export default function Categories({ categories }: { categories: Category[] }) {
  const [activeId, setActiveId] = useState<number | null>(1);

  const handleClick = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <Carousel className="w-full">
      <CarouselContent className="px-4">
        {categories.map((category) => (
          <CarouselItem
            key={category.id}
            className={cn(
              "basis-1/3 md:basis-1/4 border-2 rounded text-center m-2 cursor-pointer transition-colors text-lg p-2",
              activeId === category.id 
                ? "bg-red-100 border-red-300"
                : "bg-white border-gray-200"
            )}
            onClick={() => handleClick(category.id)}
          >
            {category.name}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}