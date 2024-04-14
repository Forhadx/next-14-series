import bcrypt from "bcrypt";
import connectDB from "@/lib/db";
import UserModel from "@/lib/models/user";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { email, password, userName } = await req.json();
    await connectDB();

    const exitUser = await UserModel.findOne({ email });

    if (exitUser) {
      return new NextResponse(
        JSON.stringify({
          data: null,
          success: false,
          message: "User Already Exist!",
        }),
        {
          status: 400,
        }
      );
    }

    const hashPassword = await bcrypt.hash(password, 12);

    let userData = await UserModel.create({
      email: email,
      password: hashPassword,
      userName: userName,
    });
    return new NextResponse(
      JSON.stringify({
        data: userData,
        success: true,
        message: "User Registered.",
      }),
      {
        status: 201,
      }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        data: null,
        success: false,
        message: "Internal Server Error!",
      }),
      {
        status: 500,
      }
    );
  }
};
