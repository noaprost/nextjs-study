import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";

// GET 요청에 한해서 처리하는 함수
export async function GET(request: Request) {
  const products = await getProducts();
  // NextResponse.json()을 이용해서 products를 보내줌
  return NextResponse.json({ products });
}
