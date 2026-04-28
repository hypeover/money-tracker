import React from "react";
import { createClient } from "@/lib/supabase/server";
import TopBar from "./top-bar";
import Grid from "./grid/grid";

const Home = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log({ user });

  return (
    <div className="w-full bg-background h-screen flex flex-col" >
      <TopBar />
      <Grid />
    </div>
  );
};

export default Home;
