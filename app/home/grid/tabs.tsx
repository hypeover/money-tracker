"use client"
import React, { useEffect, useState } from 'react'
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from '@/components/animate-ui/components/animate/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import TabInput from './tab-input';

const TabsCard = () => {
  


  return (
    <Tabs className='h-full w-full relative' defaultValue="income">
        <TabsList className='absolute -inset-y-12' >
          <TabsTrigger value="income">Income</TabsTrigger>
          <TabsTrigger value="expense">Expense</TabsTrigger>
        </TabsList>
        <Card className="shadow-none py-0 bg-transparent h-full ">
          <TabsContents className="py-6 h-full ">
            <TabsContent value="income" className="flex flex-col gap-6">
              <CardHeader>
                <CardTitle>Add income</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <TabInput />
              </CardContent>

            </TabsContent>


            <TabsContent value="expense" className="flex flex-col gap-6">
              <CardHeader>
                <CardTitle>Add expense</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you&apos;ll be logged
                  out.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Input placeholder='Expense' />
                </div>
              </CardContent>
            </TabsContent>
          </TabsContents>
        </Card>
      </Tabs>
  )
}

export default TabsCard

//https://animate-ui.com/docs/components/animate/tabs