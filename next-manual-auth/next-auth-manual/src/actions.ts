"use server";

import { sessionOptions, SessionData } from "@/lib";
import { getIronSession } from "iron-session";
// import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  return session;
};

export const login = async (data: any) => {
  const session = await getSession();

  session.token = data?.token;
  session.userName = data?.userName;
  session.id = data?.id;
  session.isLoggedIn = true;
  await session.save();
  redirect("/");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};
