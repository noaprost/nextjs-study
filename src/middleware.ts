import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("미들웨어가 실행되고 있음! 체크중...✔️");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어 - 경로를 리다이렉팅함!");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

// 미들웨어는 기본적으로 전체 페이지에 대해 검사하기 때문에 성능에 지장을 줄 수 있음
// 특정 페이지에 대해서만 검사하도록 하고 싶을 경우 config를 지정해줘야함
const config = {
  matcher: ["/products/:path*"],
};
