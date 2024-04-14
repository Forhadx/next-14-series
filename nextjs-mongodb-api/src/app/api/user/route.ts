import connectDB from "@/lib/db";
import UserModel from "@/lib/models/user";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectDB();

  let userData = await UserModel.create({
    username: "<NAME>",
    email: "<EMAIL>",
    password: "<PASSWORD>",
  });
  return new NextResponse(
    JSON.stringify({
      data: userData,
      success: true,
      message: "Initial Route",
    }),
    {
      status: 200,
    }
  );
};
