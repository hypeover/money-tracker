import { ModeToggle } from "@/components/mode-toggle";
import Form from './login-page'
import { createClient } from "@/lib/supabase/server";


const FormPage = async () => {

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log( { user });

  return (
    <div className="w-full h-screen bg-background flex content-center items-center justify-center">
      <div className="absolute inset-s-0 top-5 left-5 ">
        <ModeToggle />
      </div>
      <Form />
    </div>
  );
};

export default FormPage;

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