import { NextResponse } from "next/server";

export function middleware(request) {
    const user = {
        role: "admin", 
    };

    console.log("Middleware is running");
    if (
        request.nextUrl.pathname.startsWith('/adminDashboard') &&
        user.role !== 'admin'
    ) {
        return NextResponse.rewrite(new URL('/login', request.url));
    }

    return NextResponse.next();
}
