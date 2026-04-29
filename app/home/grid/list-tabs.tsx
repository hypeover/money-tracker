"use client";

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/animate/tabs";
import {
  Card,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ListTabsProps {
  entries: Array<{ id: string; amount: number; entry_type: string }>;
}

const ListTabs = ({ entries }: ListTabsProps) => {
  const validEntries = entries.filter(
    (entry): entry is { id: string; amount: number; entry_type: string } =>
      Boolean(entry) && typeof entry === "object" && typeof entry.entry_type === "string"
  );

  const incomeEntries = validEntries.filter((entry) => entry.entry_type === "income");
  const expenseEntries = validEntries.filter((entry) => entry.entry_type === "expense");

  return (
    <Tabs className="h-full w-full relative" defaultValue="income">
      <TabsList className="absolute -inset-y-12">
        <TabsTrigger value="income">Incomes</TabsTrigger>
        <TabsTrigger value="expense">Expenses</TabsTrigger>
      </TabsList>
      <Card className="shadow-none py-0 bg-transparent h-full">
        <TabsContents className="py-6 h-full">
          <TabsContent value="income" className="flex flex-col gap-6 px-8">
            <ScrollArea>
              <p>Incomes</p>
              {incomeEntries.length === 0 ? (
                <p>No income entries yet.</p>
              ) : (
                incomeEntries.map((entry) => (
                  <div key={entry.id}>
                    <p>{entry.amount}</p>
                  </div>
                ))
              )}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="expense" className="flex flex-col gap-6 px-8">
            <ScrollArea>
              <p>Expenses</p>
              {expenseEntries.length === 0 ? (
                <p>No expense entries yet.</p>
              ) : (
                expenseEntries.map((entry) => (
                  <div key={entry.id}>
                    <p>{entry.amount}</p>
                  </div>
                ))
              )}
            </ScrollArea>
          </TabsContent>
        </TabsContents>
      </Card>
    </Tabs>
  );
};

export default ListTabs;

//https://animate-ui.com/docs/components/animate/tabs
