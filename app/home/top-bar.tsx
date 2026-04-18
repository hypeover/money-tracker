import { ModeToggle } from "@/components/mode-toggle";
import React from "react";
import LogoutButton from "./logout-button";

const TopBar = () => {
  return (
    <div className="w-full px-5 py-3 h-15 bg-primary-foreground flex flex-row justify-between items-center">
      <ModeToggle />
      <LogoutButton />
    </div>
  );
};

export default TopBar;
