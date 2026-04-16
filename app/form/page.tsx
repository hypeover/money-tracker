import React, { Suspense } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { AuthModal } from "@/components/ui/auth-modal";


const Form = () => {
  


  return (
    <div className="w-full h-screen bg-background flex content-center items-center justify-center">
      <div className="absolute inset-s-0 top-5 left-5 ">
        <ModeToggle />
      </div>
      <Suspense>
        <AuthModal />
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