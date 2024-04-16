import connectDB from "@/lib/db";
import UserModel from "@/lib/models/user";
import { authMiddleware } from "@/middleware/apis/authMiddleware";
import { NextResponse } from "next/server";
// import { useRouter } from "next/router";

export const GET = async (req: Request, context: { params: any }) => {
  const userId = context.params.userId;
  let decodeUser = authMiddleware(req);
  if (!decodeUser) {
    return new NextResponse(
      JSON.stringify({
        data: null,
        success: false,
        message: "Unauthorize user!",
      }),
      {
        status: 400,
      }
    );
  }

  await connectDB();

  let userData = await UserModel.findOne({ _id: decodeUser?._id });

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
