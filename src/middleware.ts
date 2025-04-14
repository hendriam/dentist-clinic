import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const isAuthenticated: boolean = false;

    // If the user is authenticated, continue as normal
    if (isAuthenticated) {
        return NextResponse.next();
    }

    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
    matcher: "/dashboard/:path*",
};
