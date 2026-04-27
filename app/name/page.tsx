import React from 'react'
import { createClient } from "@/lib/supabase/server";
import NameForm from './name-form';

const NamePage = async () => {

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log( { user });

  return (
    <div className="w-full h-screen bg-background flex content-center items-center justify-center">
      <NameForm />
    </div>
  )
}

export default NamePage
