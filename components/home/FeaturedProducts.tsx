import { featuredProducts } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProducts() {
  return (
    <section aria-labelledby="featured-products-heading">
      <SectionHeading
        id="featured-products-heading"
        title="Featured products"
        actionLabel="View all"
        className="mb-[18px] md:mb-6 lg:mb-8"
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
