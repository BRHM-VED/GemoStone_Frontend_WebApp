"use client";

import Input from "@/components/ui/Input";
import { PHONE_LENGTH, PHONE_PREFIX } from "@/constants/auth";

interface PhoneInputProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
}

/**
 * Controlled phone-number input.
 * Renders the +91 prefix + 1px divider + digit-only text field.
 * Pixel-matched to Figma node 187:393:
 *   h=44px, px=14px, py=12px, gap=10px, border-radius=8px, border=#e5e0da
 *   Focus ring: border + ring in #ff5400.
 */
export default function PhoneInput({ id = "phone", value, onChange }: PhoneInputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Strip non-digits, cap at PHONE_LENGTH
    const digits = e.target.value.replace(/\D/g, "").slice(0, PHONE_LENGTH);
    onChange(digits);
  }

  return (
    <div className="flex items-center h-[44px] border border-border-strong rounded-[8px] px-[14px] py-[12px] gap-[10px] bg-white focus-within:border-primary-orange focus-within:ring-1 focus-within:ring-primary-orange transition-all">
      {/* Country code prefix */}
      <span className="text-[14px] leading-[20px] font-normal text-text-primary shrink-0">
        {PHONE_PREFIX}
      </span>

      {/* 1px vertical divider — Figma node 187:395 */}
      <div className="w-px h-[20px] bg-border-strong shrink-0" aria-hidden="true" />

      <Input
        id={id}
        type="tel"
        inputMode="numeric"
        placeholder="98765 43210"
        maxLength={PHONE_LENGTH}
        value={value}
        onChange={handleChange}
        autoComplete="tel-national"
        aria-label="Phone number"
      />
    </div>
  );
}
