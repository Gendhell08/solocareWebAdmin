import { NextResponse } from "next/server";

export function middleware(req, res) {
    const isPreflight = req.method === 'OPTIONS';

    if(isPreflight){
        return NextResponse.json({},{status:200})
    }
}

export const config = {
    matcher: '/api/:path*',
  }