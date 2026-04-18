"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { logout } from "../api/actions";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const result = await logout();

    if (result.success) {
      router.push("/login");
    } else {
      console.error(result.error);
    }
  };

  return (
    <div>
      <Button onClick={handleLogout}>Sign out</Button>
    </div>
  );
};

export default LogoutButton;
