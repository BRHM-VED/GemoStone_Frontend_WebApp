/**
 * Auth service — the only module that calls lib/api.ts for auth operations.
 * Hooks call this service; they never call the API client directly.
 */
import { api } from "@/lib/api";
import type { SendOtpResponse, VerifyOtpResponse } from "@/types/auth.types";
import { PHONE_PREFIX } from "@/constants/auth";

/**
 * Request an OTP to be sent to the given phone number.
 * @param phone - 10-digit number without country code (country code is prepended here).
 */
export async function sendOtp(phone: string): Promise<SendOtpResponse> {
  return api.post<SendOtpResponse>("/api/auth/send-otp", {
    phone: `${PHONE_PREFIX}${phone}`,
  });
}

/**
 * Verify the OTP entered by the user.
 * @param phone - 10-digit number without country code.
 * @param otp   - 6-digit OTP string (concatenated from OtpDigits array).
 */
export async function verifyOtp(
  phone: string,
  otp: string,
): Promise<VerifyOtpResponse> {
  return api.post<VerifyOtpResponse>("/api/auth/verify-otp", {
    phone: `${PHONE_PREFIX}${phone}`,
    otp,
  });
}
