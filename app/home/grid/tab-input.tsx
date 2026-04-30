"use client";
import { Button } from "@/components/ui/button";
import { useState, type FormEvent } from "react";

interface TabInputProps {
  placeholder: string;
  onSave: (amount: string, currency: string) => Promise<void>;
}

interface CurrenciesTypes {
  id: number;
  currency: string;
}

const currencies: CurrenciesTypes[] = [
  {id: 1, currency: "PLN"},
  {id: 2, currency: "USD"},
  {id: 3, currency: "EUR"},
  {id: 4, currency: "GBP"},
]

const TabInput = ({ placeholder, onSave }: TabInputProps) => {
  const [value, setValue] = useState("");
  const [saving, setSaving] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentConfig = currencies[activeIndex];

  const handleIconClick = () => {
    setActiveIndex((prev) => (prev + 1) % currencies.length);
  };

  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    setSaving(true);

    await onSave(value, currentConfig.currency);

    setValue("");
    setSaving(false);
  };

  return (
    <form className="items-start flex flex-col" onSubmit={handleSave}>
      <div className='flex flex-row justify-between w-full'>
        <input
        className="text-2xl"
        type="number"
        placeholder={"add " + placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
        <Button type="button" onClick={handleIconClick}>{currentConfig.currency}</Button>
      </div>
      <Button className="mt-2" type="submit" disabled={!value || saving}>
        {saving ? "Saving..." : "Save"}
      </Button>
    </form>
  );
};

export default TabInput;
