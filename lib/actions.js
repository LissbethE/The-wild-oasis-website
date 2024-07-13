"use server";

import { signIn, signOut } from "./auth";

// http://localhost:3000/api/auth/providers

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
