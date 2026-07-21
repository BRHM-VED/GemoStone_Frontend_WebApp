"use client";

import { useState } from "react";
import { usePhoneStep } from "@/hooks/usePhoneStep";
import { useOtpStep } from "@/hooks/useOtpStep";
import type { LoginStep } from "@/types/auth.types";

/**
 * Top-level login flow controller.
 * Owns: step ('phone' | 'otp') and the phone number in memory.
 * Composes usePhoneStep + useOtpStep and wires the transition between them.
 * This is the single hook consumed by LoginFlow.tsx.
 */
export function useLoginFlow() {
  const [step, setStep] = useState<LoginStep>("phone");
  const [verifiedPhone, setVerifiedPhone] = useState("");

  const phoneStep = usePhoneStep();
  const otpStep = useOtpStep({ phone: verifiedPhone });

  /** Called by usePhoneStep on successful sendOtp — advances to OTP step. */
  function advanceToOtp(phone: string) {
    setVerifiedPhone(phone);
    setStep("otp");
    otpStep.reset();
  }

  return {
    // Navigation
    step,

    // Phone step
    phone: verifiedPhone || phoneStep.phone,
    isPhoneLoading: phoneStep.isLoading,
    phoneError: phoneStep.error,
    handlePhoneChange: phoneStep.handleChange,
    handlePhoneSubmit: phoneStep.handleSubmit(advanceToOtp),

    // OTP step
    otp: otpStep.otp,
    countdown: otpStep.countdown,
    isOtpLoading: otpStep.isLoading,
    otpError: otpStep.error,
    handleOtpChange: otpStep.handleOtpChange,
    handleOtpSubmit: otpStep.handleSubmit,
    handleResend: otpStep.handleResend,
  };
}
