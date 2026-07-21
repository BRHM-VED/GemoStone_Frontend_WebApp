"use client";

import { useState, useEffect, useCallback } from "react";
import { isValidOtp } from "@/lib/validators";
import { sendOtp, verifyOtp } from "@/services/auth.service";
import { ApiError } from "@/lib/api";
import { OTP_LENGTH, RESEND_SECONDS } from "@/constants/auth";
import { useRouter } from "next/navigation";

interface UseOtpStepOptions {
  phone: string;
}

interface UseOtpStepReturn {
  otp: string[];
  countdown: number;
  isLoading: boolean;
  error: string | null;
  handleOtpChange: (value: string[]) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleResend: () => void;
  reset: () => void;
}

function emptyOtp(): string[] {
  return Array.from({ length: OTP_LENGTH }, () => "");
}

/**
 * Controller for the OTP verification step.
 * Owns: OTP digits, countdown timer, loading state, error state.
 * Calls: authService.verifyOtp (submit) and authService.sendOtp (resend).
 * On success: redirects to "/" via Next.js router.
 */
export function useOtpStep({ phone }: UseOtpStepOptions): UseOtpStepReturn {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(emptyOtp);
  const [countdown, setCountdown] = useState<number>(RESEND_SECONDS);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Countdown timer — decrements every second until zero
  useEffect(() => {
    if (countdown <= 0) return;
    const id = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [countdown]);

  function handleOtpChange(value: string[]) {
    setOtp(value);
    if (error) setError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!isValidOtp(otp)) {
      setError("Please enter all 6 digits.");
      return;
    }

    setIsLoading(true);
    try {
      await verifyOtp(phone, otp.join(""));
      router.push("/");
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError("Verification failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  const handleResend = useCallback(async () => {
    setError(null);
    setOtp(emptyOtp());
    setCountdown(RESEND_SECONDS);
    try {
      await sendOtp(phone);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError("Could not resend OTP. Please try again.");
      }
    }
  }, [phone]);

  function reset() {
    setOtp(emptyOtp());
    setCountdown(RESEND_SECONDS);
    setIsLoading(false);
    setError(null);
  }

  return {
    otp,
    countdown,
    isLoading,
    error,
    handleOtpChange,
    handleSubmit,
    handleResend,
    reset,
  };
}
