"use client";
import { Button } from "@/components/ui/button";
import { useState, type FormEvent } from "react";

interface TabInputProps {
  placeholder: string;
  onSave: (amount: string) => Promise<void>;
}

const TabInput = ({ placeholder, onSave }: TabInputProps) => {
  const [value, setValue] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    setSaving(true);

    await onSave(value);

    setValue("");
    setSaving(false);
  };

  return (
    <form className="flex gap-4 items-end" onSubmit={handleSave}>
      <input
        className="text-2xl"
        type="number"
        placeholder={"add " + placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" disabled={!value || saving}>
        {saving ? "Saving..." : "Save"}
      </Button>
    </form>
  );
};

export default TabInput;
