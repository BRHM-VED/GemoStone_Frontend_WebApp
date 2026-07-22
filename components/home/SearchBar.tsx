import Image from "next/image";
import { assets } from "@/lib/assets";

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className = "" }: SearchBarProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <label className="sr-only" htmlFor="product-search">
        Search products
      </label>
      <div className="flex min-w-0 flex-1 items-center rounded-[24px] bg-surface-subtle px-4 py-2.5 md:py-3">
        <input
          id="product-search"
          type="search"
          placeholder="Search rudraksha, pyrite..."
          className="w-full bg-transparent text-xs leading-4 text-text-primary placeholder:text-text-muted focus:outline-none md:text-sm md:leading-5"
        />
      </div>

      <button
        type="button"
        aria-label="Search"
        className="relative flex size-[38px] shrink-0 cursor-pointer items-center justify-center rounded-[19px] bg-surface-subtle transition-colors hover:bg-surface-neutral md:size-10"
      >
        <Image
          src={assets.search}
          alt=""
          width={30}
          height={23}
          className="object-contain"
          unoptimized
        />
      </button>
    </div>
  );
}
