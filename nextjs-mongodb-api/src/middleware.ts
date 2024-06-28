// import { loggingMiddleware } from "@/middleware/apis/loggingMiddleware";
import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "./middleware/apis/authMiddleware";

export const config = {
  matcher: ["/", "/user", "/user/:id*", "/user/blog"],
};

export default function middleware(req: NextRequest) {
  // const logResult = loggingMiddleware(req);
  // authMiddleware(req);

  let { pathname } = req.nextUrl;
  // let pathUrl = req.nextUrl;
  // console.log("path::: ", pathname);
  // console.log("params::: ", req.url);

  return NextResponse.next();
}
