import Image from "next/image";
import { navItems } from "@/lib/navigation";

export default function BottomNav() {
  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border-strong bg-white px-4 py-2 lg:hidden"
    >
      <div className="mx-auto flex max-w-lg items-center justify-between">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-label={item.label}
            aria-current={item.active ? "page" : undefined}
            className={`flex flex-1 cursor-pointer flex-col items-center justify-center py-1 transition-opacity ${item.active ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
          >
            <Image
              src={item.imageUrl}
              alt=""
              width={item.imageWidth}
              height={item.imageHeight}
              className="h-8 w-auto object-contain"
              unoptimized
            />
            <span className="sr-only">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
