import type { Product } from "./types";

/**
 * Controller helper to resolve product image URLs.
 * If the image path is a filename, it resolves to `/assets/products/{filename}`.
 * If it is already a full URL or relative path (starts with http or /), it returns it as is.
 */
export function resolveProductImageUrl(imageNameOrUrl: string): string {
  if (!imageNameOrUrl) return "";
  if (imageNameOrUrl.startsWith("/") || imageNameOrUrl.startsWith("http")) {
    return imageNameOrUrl;
  }
  return `/assets/products/${imageNameOrUrl}`;
}

// The backend dataset for featured products
export const featuredProductsRaw = [
  {
    id: "1",
    name: "5 Mukhi Rudraksha Mala",
    price: "₹1,499",
    image: "5_Mukhi_Rudraksha.png",
    certified: true,
  },
  {
    id: "2",
    name: "Pyrite Bracelet",
    price: "₹999",
    image: "Pyrite_Bracelet.png",
    certified: true,
  },
  {
    id: "3",
    name: "1 Mukhi Rudraksha",
    price: "₹4,500",
    image: "1_Mukhi_Rudraksha.png",
    certified: true,
  },
  {
    id: "4",
    name: "7 Mukhi Rudraksha",
    price: "₹1,899",
    image: "7_Mukhi_Rudraksha.png",
    certified: true,
  },
];

// Map the raw products to conform to the Product type with resolved URLs
export const featuredProducts: Product[] = featuredProductsRaw.map((p) => ({
  id: p.id,
  name: p.name,
  price: p.price,
  imageUrl: resolveProductImageUrl(p.image),
  certified: p.certified,
}));
