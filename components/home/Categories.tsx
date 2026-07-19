"use client";

import type { Category } from "@/lib/types";

const categories: Category[] = [
  { id: "all", label: "All" },
  { id: "rudraksha", label: "Rudraksha" },
  { id: "pyrite", label: "Pyrite" },
  { id: "bestsellers", label: "Bestsellers" },
];

interface CategoriesProps {
  activeCategory?: string;
  onCategoryChange?: (id: string) => void;
}

export default function Categories({
  activeCategory = "all",
  onCategoryChange,
}: CategoriesProps) {
  return (
    <section aria-label="Product categories">
      <div className="no-scrollbar flex items-start gap-2 overflow-x-auto md:flex-wrap md:justify-start md:gap-3 lg:gap-4">
        {categories.map((cat) => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onCategoryChange?.(cat.id)}
              aria-pressed={isActive}
              className={[
                "shrink-0 rounded-[18px] px-[14px] py-2 text-xs leading-4 font-normal whitespace-nowrap transition-colors md:px-4 md:py-2.5 md:text-sm md:leading-5",
                isActive
                  ? "bg-primary-orange text-white"
                  : "border border-border-strong bg-white text-text-secondary hover:border-primary-orange hover:text-primary-orange",
              ].join(" ")}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
