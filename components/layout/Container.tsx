import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer" | "nav";
}

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-12 xl:px-16 ${className}`}
    >
      {children}
    </Tag>
  );
}
