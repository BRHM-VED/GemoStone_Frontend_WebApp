import { assets } from "@/lib/assets";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "5 Mukhi Rudraksha Mala",
    price: "₹1,499",
    imageUrl: assets.product1,
    certified: true,
  },
  {
    id: "2",
    name: "Pyrite Bracelet",
    price: "₹999",
    imageUrl: assets.product2,
    certified: true,
  },
  {
    id: "3",
    name: "1 Mukhi Rudraksha",
    price: "₹4,500",
    imageUrl: assets.product3,
    certified: true,
  },
  {
    id: "4",
    name: "7 Mukhi Rudraksha",
    price: "₹1,899",
    imageUrl: assets.product4,
    certified: true,
  },
];

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
