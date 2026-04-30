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
import TabInput from "./tab-input";

interface AddTabsProps {
  onSave: (amount: string, type: string, currency: string) => Promise<void>;
}

const AddTabs = ({ onSave }: AddTabsProps) => {
  return (
    <Tabs className="h-full w-full relative" defaultValue="income">
      <TabsList className="absolute -inset-y-12">
        <TabsTrigger value="income">Income</TabsTrigger>
        <TabsTrigger value="expense">Expense</TabsTrigger>
      </TabsList>
      <Card className="shadow-none py-0 bg-transparent h-full">
        <TabsContents className="py-6 h-full">
          <TabsContent value="income" className="flex flex-col gap-6 px-8">
            <p className="text-2xl font-semibold">Add income</p>
            <TabInput placeholder="income" onSave={(amount, currency) => onSave(amount, "income", currency)} />
          </TabsContent>
          <TabsContent value="expense" className="flex flex-col gap-6 px-8">
            <p className="text-2xl font-semibold">Add expense</p>
            <TabInput placeholder="expense" onSave={(amount, currency) => onSave(amount, "expense", currency)} />
          </TabsContent>
        </TabsContents>
      </Card>
    </Tabs>
  );
};

export default AddTabs;

//https://animate-ui.com/docs/components/animate/tabs
