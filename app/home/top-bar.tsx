import { ModeToggle } from "@/components/mode-toggle";
import React from "react";
import LogoutButton from "./top-bar/logout-button";
import UserName from "./top-bar/user-name";

const TopBar = () => {
  return (
    <div className="w-full px-5 py-3 h-15 bg-primary-foreground flex flex-row justify-between items-center">
      <div className="flex h-full justify-between items-center gap-5" >
        <ModeToggle />
        <UserName />
      </div>
      <LogoutButton />
    </div>
  );
};

export default TopBar;
