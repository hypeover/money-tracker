import React from 'react'
import { createClient } from '@/lib/supabase/client'
import { redirect } from 'next/navigation'

const Unauthenticated = async () => {

    const supabase = createClient()
    const { data: {session}} = await supabase.auth.getSession()
    
    if (session) {
        redirect('/')
    }

    return (
    <div>
      
    </div>
  )
}

export default Unauthenticated
