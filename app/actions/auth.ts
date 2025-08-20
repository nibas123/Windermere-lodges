"use server";

import { signIn, signOut } from "@/auth";
import { getErrorMessage } from "@/lib/utils";

export async function doSocialLogin(formData: any) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

export async function credentialLogin(credentials: any) {
  try {
    console.log(credentials, "server actions");
    const response = await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    });

    return response;
  } catch (err) {
    console.log(err, "server actions")
    throw new Error("something went wrong");
  }
}

export async function doSocialLogout() {}
