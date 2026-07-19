import BottomNav from "@/components/layout/BottomNav";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FilterBar from "@/components/home/FilterBar";
import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pb-20 lg:pb-10">
        <Container className="pt-0 lg:pt-2">
          {/* Mobile / tablet search — desktop search lives in Navbar */}
          <div className="pt-0 lg:hidden">
            <SearchBar />
          </div>

          <div className="pt-2 md:pt-4 lg:pt-8">
            <Hero />
          </div>

          <div className="pt-5 md:pt-6 lg:pt-8">
            <Categories />
          </div>

          <div className="pt-5 md:pt-6 lg:pt-8">
            <FilterBar />
          </div>

          <div className="pt-[18px] md:pt-6 lg:pt-10">
            <FeaturedProducts />
          </div>
        </Container>
      </main>

      <BottomNav />
    </div>
  );
}
