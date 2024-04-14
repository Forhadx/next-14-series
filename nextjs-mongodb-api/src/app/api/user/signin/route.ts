import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/db";
import UserModel from "@/lib/models/user";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { email, password } = await req.json();
    await connectDB();

    const userData = await UserModel.findOne({ email });

    if (!userData) {
      return new NextResponse(
        JSON.stringify({
          data: null,
          success: false,
          message: "User Not Found!",
        }),
        {
          status: 400,
        }
      );
    }

    const isEqual = await bcrypt.compare(password, userData?.password);

    if (!isEqual) {
      return new NextResponse(
        JSON.stringify({
          data: null,
          success: false,
          message: "Invalid Password!",
        }),
        {
          status: 400,
        }
      );
    }

    let payload = {
      data: {
        _id: userData._id,
        email: userData.email,
        role: userData.role,
      },
      expiresIn: "365d",
    };
    let secret = process.env.TOKEN_SECRET!;
    const token = jwt.sign(payload, secret);

    return new NextResponse(
      JSON.stringify({
        data: { ...JSON.parse(JSON.stringify(userData)), token },
        success: true,
        message: "User Registered.",
      }),
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
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
