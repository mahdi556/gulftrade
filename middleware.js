import { NextResponse, NextRequest } from "next/server";
export default async function middleware(req, res) {
  const token = req.cookies.get("token");
  // if (!token && req.nextUrl.pathname != "/") {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/","/user/:path*"],
};
