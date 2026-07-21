"use client";

import Button from "@/components/ui/Button";
import OtpInput from "@/components/auth/OtpInput";
import { PHONE_PREFIX } from "@/constants/auth";

interface OtpStepProps {
  phone: string;
  otp: string[];
  countdown: number;
  isLoading: boolean;
  error: string | null;
  onOtpChange: (value: string[]) => void;
  onSubmit: (e: React.FormEvent) => void;
  onResend: () => void;
}

/** Format seconds as MM:SS — e.g. 28 → "00:28" */
function formatCountdown(seconds: number): string {
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

/** Mask phone: "9876543210" → "98765 43210" */
function formatPhone(phone: string): string {
  return phone.replace(/(\d{5})(\d{5})/, "$1 $2");
}

/**
 * Presentational step for OTP verification.
 * All state and handlers come from useOtpStep via LoginFlow.
 * Pixel-matched to Figma node 187-325.
 */
export default function OtpStep({
  phone,
  otp,
  countdown,
  isLoading,
  error,
  onOtpChange,
  onSubmit,
  onResend,
}: OtpStepProps) {
  const isComplete = otp.every((d) => /^\d$/.test(d));

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-[22px] w-full">
      {/* Heading — Figma: Montserrat Bold 18px, #211e1a */}
      <h1 className="text-[18px] leading-[24px] font-bold text-text-primary">
        Verify your number
      </h1>

      {/* Subtext — Figma: Regular 14px, #6b6459 */}
      <p className="text-[14px] leading-[20px] font-normal text-text-secondary">
        Enter the 6-digit code sent to {PHONE_PREFIX} {formatPhone(phone)}
      </p>

      {/* 6-box OTP input — Figma node 187:376 */}
      <OtpInput value={otp} onChange={onOtpChange} />

      {/* Resend line — Figma node 187:384: 12px, #a89a85 */}
      <p className="text-[12px] leading-[16px] font-normal text-text-muted">
        {countdown > 0 ? (
          <>
            Resend OTP in{" "}
            <span className="text-primary-orange" aria-live="polite">
              {formatCountdown(countdown)}
            </span>
          </>
        ) : (
          <>
            Didn&apos;t receive?{" "}
            <button
              type="button"
              onClick={onResend}
              className="text-primary-orange font-semibold underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange rounded"
            >
              Resend OTP
            </button>
          </>
        )}
      </p>

      {/* Inline error */}
      {error && (
        <p role="alert" className="text-[12px] leading-[16px] text-red-500 -mt-3">
          {error}
        </p>
      )}

      {/* CTA — Figma node 187:385: h=52px, bg #ff5400, SemiBold 16px white, py=14px, rounded-8px */}
      <Button
        type="submit"
        variant="filled"
        size="lg"
        disabled={isLoading || !isComplete}
        className="w-full h-[52px] rounded-[8px] text-[16px] leading-[24px] font-semibold py-[14px]"
      >
        {isLoading ? "Verifying…" : "Verify & continue"}
      </Button>
    </form>
  );
}
