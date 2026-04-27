"use client"
import { Suspense, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { AuthModal } from "@/components/ui/auth-modal";
import { useRouter } from "next/navigation";
import {
  loginWithOtp as loginWithOtpAction,
  verifyOtp as verifyOtpAction,
} from "../api/actions";

const Form = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();

  const signInWithOtp = async (email: string) => {
    const result = await loginWithOtpAction(email);

    if (result.success) {
      setIsOtpSent(true);
      setIsValid(false);
    } else {
      console.error("Login error:", result.error);
      // You can also show this error to the user
      alert(`Login failed: ${result.error}`);
    }
  };

  const verifyOtp = async (token: string, email: string) => {
    const result = await verifyOtpAction(email, token);

    if (result.success) {
      if (result.user?.user_metadata?.name) {
        router.push("/home");
      } else {
        router.push("/name");
      }
    } else {
      console.error(result.error);
      setIsValid(true);
      setTimeout(() => {
        setIsValid(false);
      }, 10000);
    }
  };

  return (
    <div className="w-full h-screen bg-background flex content-center items-center justify-center">
      <div className="absolute inset-s-0 top-5 left-5 ">
        <ModeToggle />
      </div>
      <Suspense>
        <AuthModal signInWithOtp={signInWithOtp} isOtpSent={isOtpSent} isValid={isValid} verifyOtp={verifyOtp} setIsValid={setIsValid}  />
      </Suspense>
    </div>
  );
};

export default Form;
