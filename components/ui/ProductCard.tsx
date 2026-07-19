import Image from "next/image";
import Badge from "./Badge";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex min-w-0 flex-1 flex-col gap-1.5">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface-neutral md:rounded-2xl">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
            product.name === "Pyrite Bracelet"
              ? "object-[75%_20%]"
              : "object-center"
          }`}
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          unoptimized
        />

        {product.certified && (
          <div className="absolute left-2 top-2 md:left-3 md:top-3">
            <Badge>Certified</Badge>
          </div>
        )}

        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-2 top-2 flex size-[26px] cursor-pointer items-center justify-center rounded-full bg-white text-xs leading-4 text-text-secondary transition-colors hover:text-primary-orange md:right-3 md:top-3 md:size-8"
        >
          ♡
        </button>
      </div>

      <h3 className="break-words text-sm leading-5 font-medium text-text-primary md:text-base md:leading-6">
        {product.name}
      </h3>

      <p className="whitespace-nowrap text-base leading-6 font-semibold text-primary-orange md:text-lg md:leading-7">
        {product.price}
      </p>
    </article>
  );
}
