import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./services/auth";

type Role = keyof typeof roleBasedRoutes;

const authRoutes = ["/login", "/register"];

const roleBasedRoutes = {
  user: [/^\/user/],
  admin: [/^\/admin/],
};

// Middleware function
export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const userInfo = await getCurrentUser();

  // If user is not logged in, redirect to login page
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirectPath=${pathname}`, request.url)
      );
    }
  }

  // Get user role
  const userRole = userInfo?.role; // Example: 'admin', "user"

  if (userRole && roleBasedRoutes[userRole as Role]) {
    const routes = roleBasedRoutes[userRole as Role];
    console.log("route check ==>>", routes);

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
};

// Define paths that the middleware should match
export const config = {
  matcher: [
    "/login",
    "/create-shop",
    "/admin",
    "/admin/:page",
    "/user",
    "/user/:page",
  ],
};
