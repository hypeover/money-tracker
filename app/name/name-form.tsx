"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setUserName } from "../api/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NameForm = () => {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Set Your Name</h1>
      <Input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Button type="submit">Save Name</Button>
    </form>
  );
};

export default NameForm;