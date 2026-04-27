import React from 'react'
import { createClient } from "@/lib/supabase/server";
import NameForm from './name-form';
import { TextAnimate } from "@/components/ui/text-animate"

const NamePage = async () => {

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log( { user });

  return (
    <div className="w-full h-screen bg-background flex flex-col content-center items-center justify-center">
      <TextAnimate className='text-5xl font-medium' animate="blurInUp" by='character'  once >Welcome in my tracker app, what is your name?</TextAnimate>
      <NameForm />
    </div>
  )
}

export default NamePage
