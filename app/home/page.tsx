import React from "react";
import { createClient } from "@/lib/supabase/server";
import TopBar from "./top-bar";
import InputNumber from "./number-inputs";

const Home = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log({ user });

  return (
    <div className="w-full bg-background" >
      <TopBar />
      <div className="h-screen w-full flex flex-col justify-center items-center" >
        {user?.user_metadata.email}
        <InputNumber />
      </div>
    </div>
  );
};

export default Home;
