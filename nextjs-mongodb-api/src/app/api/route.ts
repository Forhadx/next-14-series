import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectDB();
  return new NextResponse(
    JSON.stringify({
      data: null,
      success: true,
      message: "Initial Route",
    }),
    {
      status: 200,
    }
  );
};
