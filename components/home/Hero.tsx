import Image from "next/image";
import { assets } from "@/lib/assets";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[154px] items-start gap-2 overflow-hidden rounded-2xl bg-primary-orange pl-[18px] py-[18px] md:min-h-[220px] md:rounded-3xl md:pl-8 md:py-8 lg:min-h-[280px] lg:pl-12 lg:py-10 xl:min-h-[320px]"
    >
      <div className="relative z-10 flex min-w-0 flex-1 flex-col gap-2.5 md:max-w-[55%] md:gap-4 lg:max-w-[50%] lg:gap-5">
        <h1
          id="hero-heading"
          className="whitespace-pre-wrap text-base font-semibold leading-6 text-white md:text-2xl md:leading-8 lg:text-3xl lg:leading-10 xl:text-4xl xl:leading-[3rem]"
        >
          {"Siddh beads, delivered \n"}
          with care
        </h1>
        <p className="text-xs leading-4 font-normal text-white md:text-sm md:leading-5 lg:text-base lg:leading-6">
          New arrivals this week
        </p>
        <Button
          variant="primary"
          size="md"
          className="self-start md:text-sm md:leading-5 lg:px-6 lg:py-2.5 lg:text-base"
        >
          Shop now
        </Button>
      </div>

      <div className="absolute right-4 top-[15px] h-[122px] w-[120px] overflow-hidden rounded-lg bg-surface-neutral md:top-6 md:h-[180px] md:w-[180px] md:rounded-xl lg:top-8 lg:h-[220px] lg:w-[220px] xl:top-10 xl:h-[260px] xl:w-[260px]">
        <Image
          src={assets.heroProduct}
          alt="Featured Rudraksha beads"
          fill
          className="object-cover object-[80%_20%]"
          priority
          sizes="(max-width: 768px) 120px, (max-width: 1024px) 180px, 260px"
          unoptimized
        />
      </div>
    </section>
  );
}
