export type LoginStep = "phone" | "otp";

/** Validated 10-digit Indian phone number (digits only, no country code). */
export type Phone = string;

/** Array of 6 single-digit strings for OTP input boxes. */
export type OtpDigits = [string, string, string, string, string, string];

export interface SendOtpResponse {
  success: boolean;
  message: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  message: string;
  /** JWT or session token returned on successful verification. */
  token?: string;
}

export interface ApiError {
  status: number;
  message: string;
}
