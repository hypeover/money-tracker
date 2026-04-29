"use server";

import { createClient } from "@/lib/supabase/server";

type OtpActionResult =
  | { success: true; user?: any }
  | { success: false; error: string };

export async function loginWithOtp(email: string): Promise<OtpActionResult> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function verifyOtp(email: string, token: string): Promise<OtpActionResult> {
  const supabase = await createClient();
  const { error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  });

  if (error) {
    return { success: false, error: error.message };
  }

  const { data: { user } } = await supabase.auth.getUser();

  return { success: true, user };
}

export async function logout(): Promise<OtpActionResult> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function setUserName(name: string): Promise<OtpActionResult> {
  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({
    data: { name }
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
