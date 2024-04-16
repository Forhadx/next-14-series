import { NextResponse } from "next/server";

export const GET = async () => {
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
