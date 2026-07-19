import Image from "next/image";
import { assets } from "@/lib/assets";
import Button from "@/components/ui/Button";

export default function FilterBar() {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="whitespace-nowrap text-xs leading-4 font-normal text-text-muted md:text-sm md:leading-5">
        42 products
      </p>

      <div className="flex items-center gap-3.5 md:gap-5">
        <Button
          variant="outline"
          size="sm"
          className="flex w-[79px] items-center gap-1.5 md:w-auto md:px-4"
        >
          <Image
            src={assets.filter}
            alt=""
            width={26}
            height={20}
            className="object-contain"
            unoptimized
          />
          Filters
        </Button>

        <button
          type="button"
          className="cursor-pointer whitespace-nowrap text-xs leading-4 font-normal text-text-secondary transition-colors hover:text-text-primary md:text-sm md:leading-5"
        >
          Sort: Relevance
        </button>
      </div>
    </div>
  );
}
