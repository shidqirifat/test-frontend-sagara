import { NextResponse } from "next/server";

export default function middleware(req) {
  const { username } = req.cookies;

  if (!username) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}
