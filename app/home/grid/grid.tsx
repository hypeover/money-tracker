"use client";

import { useEffect, useState } from "react";
import AddTabs from "./add-tabs";
import ListTabs from "./list-tabs";

interface FinanceEntry {
  id: string;
  amount: number;
  entry_type: string;
}

const Grid = () => {
  const [entries, setEntries] = useState<FinanceEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const loadEntries = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/finance");
      if (!response.ok) {
        throw new Error("Could not load finance entries");
      }
      const data = await response.json();
      setEntries(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEntries();
  }, []);

  const handleSave = async (amount: string, type: string) => {
    try {
      const response = await fetch("/api/finance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, type }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        const errorMessage = payload?.error || "Unable to save entry";
        throw new Error(errorMessage);
      }

      const newEntry = await response.json();
      if (newEntry && typeof newEntry === "object" && "entry_type" in newEntry) {
        setEntries((current) => [newEntry as FinanceEntry, ...current]);
      } else {
        console.error("Invalid entry returned from API", newEntry);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full h-full">
        <div className="pt-15 md:pt-15 grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-auto md:grid-rows-4 lg:grid-rows-5 h-full w-full p-4 md:p-6 lg:p-20">
          <div className="bg-secondary flex flex-col justify-between rounded-2xl md:row-span-2 lg:row-span-2">
            <AddTabs onSave={handleSave} />
          </div>
          <div className="bg-card flex flex-col justify-between rounded-2xl border md:row-span-2 lg:row-span-2">
            {loading ? <div className="p-6">Loading entries...</div> : <ListTabs entries={entries} />}
          </div>
          <div className="bg-card flex flex-col justify-between rounded-2xl border p-6 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-3">
            3
          </div>
          <div className="bg-muted flex flex-col justify-between rounded-2xl p-6 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-5 lg:col-start-3 lg:row-start-1">
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
