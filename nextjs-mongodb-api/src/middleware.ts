// import { loggingMiddleware } from "@/middleware/apis/loggingMiddleware";
import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "./middleware/apis/authMiddleware";

export const config = {
  matcher: "/api/:path*",
};

export default function middleware(req: NextRequest) {
  // const logResult = loggingMiddleware(req);

  // req.user = 'forhad'
  // const response = NextResponse.next();
  // response.cookies.set("vercel", "fast");

  authMiddleware(req);

  return NextResponse.next();
}
