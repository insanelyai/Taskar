import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req) {
  const token = req.cookies.get("JWT")?.value;
  const protectedPaths = ["/notes", "/dashboard", "/events", "/tasks"];
  const isProtectedPath = protectedPaths.includes(req.nextUrl.pathname);

  if (!token && isProtectedPath) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  try {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);
    const isExpired = decoded.exp < Date.now() / 1000;

    if (isExpired && isProtectedPath) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    } else if (!isExpired && isProtectedPath) {
      return NextResponse.next();
    }

    if (!isExpired && req.nextUrl.pathname === "/login") {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
  } catch (error) {
    console.log("JWT Token Error:", error);
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
