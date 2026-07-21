"use client";

import Image from "next/image";
import Card from "@/components/ui/Card";
import PhoneStep from "@/components/auth/PhoneStep";
import OtpStep from "@/components/auth/OtpStep";
import { useLoginFlow } from "@/hooks/useLoginFlow";
import { assets } from "@/lib/assets";

/**
 * Shared card shell for the entire login flow.
 * Renders ONCE — both PhoneStep and OtpStep live inside this same card.
 *
 * Layout derived from Figma:
 *   Page:  bg #ff5400, full screen, card centred vertically on desktop / bottom-anchored on mobile
 *   Card:  white, width 370px, border-radius 8px, pt=120px pb=40px px=24px
 *   Logo:  162×41px, absolute at top:43px left:104px inside the card
 */
export default function LoginFlow() {
  const {
    step,
    phone,
    otp,
    countdown,
    isPhoneLoading,
    isOtpLoading,
    phoneError,
    otpError,
    handlePhoneChange,
    handlePhoneSubmit,
    handleOtpChange,
    handleOtpSubmit,
    handleResend,
  } = useLoginFlow();

  return (
    <main className="min-h-screen bg-primary-orange flex flex-col items-center justify-end sm:justify-center p-4">
      {/* White card — 370px wide, radius-8, pt=120 for logo room, pb=40, px=24 */}
      <Card className="relative w-full max-w-[370px] pt-[120px] pb-[40px] px-[24px] mb-4 sm:mb-0">

        {/* Logo — Figma: 162×41px, top:43px, left:104px inside card */}
        <div className="absolute top-[43px] left-[104px] w-[162px] h-[41px]" aria-label="GemoStone">
          <Image
            src={assets.logo}
            alt="GemoStone"
            width={162}
            height={41}
            className="object-contain w-full h-full"
            priority
            unoptimized
          />
        </div>

        {/* Step content switches here — card shell never re-mounts */}
        {step === "phone" ? (
          <PhoneStep
            phone={phone}
            isLoading={isPhoneLoading}
            error={phoneError}
            onPhoneChange={handlePhoneChange}
            onSubmit={handlePhoneSubmit}
          />
        ) : (
          <OtpStep
            phone={phone}
            otp={otp}
            countdown={countdown}
            isLoading={isOtpLoading}
            error={otpError}
            onOtpChange={handleOtpChange}
            onSubmit={handleOtpSubmit}
            onResend={handleResend}
          />
        )}
      </Card>
    </main>
  );
}
