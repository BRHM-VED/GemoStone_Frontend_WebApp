"use client";

import Button from "@/components/ui/Button";
import PhoneInput from "@/components/auth/PhoneInput";

interface PhoneStepProps {
  phone: string;
  isLoading: boolean;
  error: string | null;
  onPhoneChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

/**
 * Presentational step for phone number entry.
 * All state and handlers come from usePhoneStep via LoginFlow.
 * Pixel-matched to Figma node 72-51.
 */
export default function PhoneStep({
  phone,
  isLoading,
  error,
  onPhoneChange,
  onSubmit,
}: PhoneStepProps) {
  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col w-full">
      {/* Heading — Figma: Montserrat Bold 18px, #211e1a, top: 114px */}
      <h1 className="text-[18px] leading-[24px] font-bold text-text-primary mb-[22px]">
        Welcome back
      </h1>

      {/* Subtext — Figma: Montserrat Regular 14px, #6b6459, top: 160px */}
      <p className="text-[14px] leading-[20px] font-normal text-text-secondary mb-[22px]">
        Enter your phone number to continue
      </p>

      {/* Label — Figma: 12px, #6b6459, top: 202px */}
      <label
        htmlFor="phone"
        className="text-[12px] leading-[16px] font-normal text-text-secondary mb-[16px] uppercase tracking-wide"
      >
        Phone Number
      </label>

      {/* Phone input — Figma node 187:393 */}
      <PhoneInput id="phone" value={phone} onChange={onPhoneChange} />

      {/* Inline error */}
      {error && (
        <p role="alert" className="mt-2 text-[12px] leading-[16px] text-red-500">
          {error}
        </p>
      )}

      {/* CTA — Figma node 187:397: h=52px, bg #ff5400, rounded-8px, SemiBold 16px white, py=14px */}
      <Button
        type="submit"
        variant="filled"
        size="lg"
        disabled={isLoading || phone.length < 10}
        className="w-full mt-[22px] h-[52px] rounded-[8px] text-[16px] leading-[24px] font-semibold py-[14px]"
      >
        {isLoading ? "Sending…" : "Send OTP"}
      </Button>

      {/* Disclaimer — Figma node 187:399: 12px, #a89a85, center, top: 380px */}
      <p className="mt-[22px] text-[12px] leading-[16px] font-normal text-text-muted text-center">
        By continuing you agree to our Terms &amp; Privacy Policy
      </p>
    </form>
  );
}
