"use client"
import { Suspense, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { AuthModal } from "@/components/ui/auth-modal";
import { createClient } from "@/lib/supabase/client"

const Form = () => {
  
  const [email, setEmail] = useState('')
  const [isOtpSent, sentOtp] = useState(false)


  const signInWithOtp = async () => {
    event?.preventDefault()

    const supabase = createClient()
    const { error, data } = supabase.auth.signInWithOtp({
      email
    })
    if (error) {
        console.log(error);
      } else {
        sentOtp(true)
        console.log(sentOtp)
    }


  }

  return (
    <div className="w-full h-screen bg-background flex content-center items-center justify-center">
      <div className="absolute inset-s-0 top-5 left-5 ">
        <ModeToggle />
      </div>
      <Suspense>
        <AuthModal email={email} setEmail={setEmail} signInWithOtp={signInWithOtp} isOtpSent={isOtpSent} />
      </Suspense>
    </div>
  );
};

export default Form;

/* 

const signIn = async (email : string) => {
    "use server";

    const supabase = createClient();

    const { error, data } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        shouldCreateUser: false,
      },
    })

    if (error) {
      console.log(error)
    } else {
      console.log(data)
    }

  };

*/