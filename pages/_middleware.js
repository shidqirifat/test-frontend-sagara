import { NextResponse } from "next/server";

export default function middleware(req) {
  const { username } = req.cookies;
  const url = req.url;

  if (
    (username && url === "http://localhost:3000/login") ||
    (username && url === "http://localhost:3000/register")
  ) {
    return NextResponse.redirect("http://localhost:3000/news");
  }
}
