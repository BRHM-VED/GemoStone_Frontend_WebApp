"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { assets } from "@/lib/assets";
import { navItems } from "@/lib/navigation";
import Container from "./Container";
import SearchBar from "@/components/home/SearchBar";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block size-5" aria-hidden="true">
      <span
        className={`absolute left-0 top-1 block h-0.5 w-5 bg-text-primary transition-transform duration-200 ${open ? "translate-y-1.5 rotate-45" : ""}`}
      />
      <span
        className={`absolute left-0 top-2.5 block h-0.5 w-5 bg-text-primary transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
      />
      <span
        className={`absolute left-0 top-4 block h-0.5 w-5 bg-text-primary transition-transform duration-200 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
      />
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border-strong bg-white">
        <Container className="flex h-[58px] items-center justify-between gap-4 lg:h-[72px]">
          {/* Mobile menu toggle */}
          <button
            type="button"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-surface-subtle lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <MenuIcon open={menuOpen} />
          </button>

          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center lg:mr-4">
            <Image
              src={assets.logo}
              alt="GemoStone logo"
              width={162}
              height={41}
              className="h-8 w-auto object-contain md:h-9 lg:h-10"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop search */}
          <div className="hidden flex-1 lg:block lg:max-w-xl xl:max-w-2xl">
            <SearchBar />
          </div>

          {/* Desktop nav links */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 lg:flex xl:gap-8"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex flex-col items-center gap-0.5 transition-opacity hover:opacity-80 ${item.active ? "opacity-100" : "opacity-70"}`}
              >
                <Image
                  src={item.imageUrl}
                  alt=""
                  width={item.imageWidth}
                  height={item.imageHeight}
                  className="h-7 w-auto object-contain xl:h-8"
                  unoptimized
                />
                <span className="sr-only">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Spacer for mobile layout balance */}
          <div className="size-10 lg:hidden" aria-hidden="true" />
        </Container>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-text-primary/40 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          aria-label="Close menu overlay"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />

        <aside
          className={`absolute left-0 top-0 flex h-full w-[min(320px,85vw)] flex-col bg-white shadow-xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex h-[58px] items-center border-b border-border-strong px-6">
            <Image
              src={assets.logo}
              alt="GemoStone logo"
              width={130}
              height={33}
              className="h-7 w-auto object-contain"
              unoptimized
            />
          </div>

          <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Mobile menu">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${item.active ? "bg-surface-subtle text-primary-orange" : "text-text-secondary hover:bg-surface-subtle hover:text-text-primary"}`}
                onClick={() => setMenuOpen(false)}
              >
                <Image
                  src={item.imageUrl}
                  alt=""
                  width={item.imageWidth}
                  height={item.imageHeight}
                  className="h-6 w-auto object-contain"
                  unoptimized
                />
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
