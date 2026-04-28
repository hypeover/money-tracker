"use client";
import React, { useState } from "react";

interface PlaceholderConfig {
  id: number;
  placeholder: string;
  sufix: string;
}

// Change Here
const placeholderOptions: PlaceholderConfig[] = [
  { id: 1, placeholder: "add amount in PLN", sufix: "PLN" },
  { id: 2, placeholder: "add amount in USD", sufix: "USD" },
  { id: 3, placeholder: "add amount in EUR", sufix: "EUR" },
  { id: 4, placeholder: "add amount in GBP", sufix: "GBP" },
];

const SpentInput = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const currentConfig = placeholderOptions[activeIndex];

  const handleSufixClick = () => {
    setActiveIndex((prev) => (prev + 1) % placeholderOptions.length);
  };

  const IconComponent = currentConfig.sufix;

  return (
    <div className="flex flex-col">
      <p className="font-medium ">Add your spent here</p>
      <div className="w-full bg-green-200" >
        <input
          type="number"
          placeholder={currentConfig.placeholder}
          className="outline-none text-2xl bg-red-500"
        />
        <button className="bg-red-200 hover:bg-gray-300 text-2xl" onClick={handleSufixClick}>
          {IconComponent}
        </button>
      </div>
    </div>
  );
};

export default SpentInput;
