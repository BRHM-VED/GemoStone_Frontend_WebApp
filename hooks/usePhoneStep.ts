"use client";

import { useState } from "react";
import { isValidPhone } from "@/lib/validators";
import { sendOtp } from "@/services/auth.service";
import axios from "axios";
// import { ApiError } from "@/lib/api";

interface UsePhoneStepReturn {
  phone: string;
  isLoading: boolean;
  error: string | null;
  handleChange: (value: string) => void;
  handleSubmit: (
    onSuccess: (phone: string) => void,
  ) => (e: React.FormEvent) => void;
}

/**
 * Controller for the phone-entry step.
 * Owns: phone value, loading state, error state.
 * Calls: validators.isValidPhone → authService.sendOtp.
 * Knows nothing about the card shell or step navigation.
 */
export function usePhoneStep(): UsePhoneStepReturn {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(value: string) {
    setPhone(value);
    if (error) setError(null); // clear error on change
  }

  function handleSubmit(onSuccess: (phone: string) => void) {
    return async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);

      if (!isValidPhone(phone)) {
        setError("Please enter a valid 10-digit phone number.");
        return;
      }

      setIsLoading(true);
      try {
        await sendOtp(phone);
        onSuccess(phone);
      } catch (err) {
        if (err instanceof axios.AxiosError && err.response) {
          setError(err.response.data.message || "Something went wrong");
        } else {
          setError("Something went wrong. Please try again.");
        }
      } finally {
        setIsLoading(false);
      }
    };
  }

  return { phone, isLoading, error, handleChange, handleSubmit };
}
