import React from 'react'
import Form from './form'
import { TextAnimate } from "@/components/ui/text-animate"

const NamePage = async () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className='p-10'>
        <TextAnimate className='text-5xl font-semibold text-chart-3' animate="blurInUp" by='character' duration={1} once>Hello!</TextAnimate>
        <TextAnimate className='text-4xl mt-3' animate="blurInUp" by='character' duration={1} delay={1} once >Welcome in money tracker app, </TextAnimate>
        <TextAnimate className='text-4xl' animate="blurInUp" by='character' duration={1} delay={2} once >what's your name?</TextAnimate>
        <Form />
      </div>
    </div>
  )
}

export default NamePage
