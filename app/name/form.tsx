"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setUserName } from "../api/actions";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { ArrowRight } from 'lucide-react'
import { motion } from "motion/react"

const Form = () => {

  const [name, setName] = useState("");
    const router = useRouter();
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (name.trim()) {
        const result = await setUserName(name.trim());
        if (result.success) {
          router.push("/home");
        } else {
          console.error(result.error);
        }
      }
    };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 3.2 }}>
      <InputGroup className='mt-5 w-full md:w-1/2 '>
        <InputGroupInput placeholder="your name..." value={name} onChange={(e) => setName(e.target.value)} />
        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={handleSubmit}>
            <ArrowRight />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </motion.div>
  )
}

export default Form
