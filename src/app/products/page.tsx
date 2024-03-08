import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/service/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import clothesImage from "../../../public/images/clothes.jpg";

export const revalidate = 3; // 3초마다 revalidate된다는 의미 (0으로 설정할 경우 SSR과 같이 동작함)

// 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
// aysnc, await을 붙이지 않으면 promise가 할당됨
export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>제품 설명 페이지</h1>
      {/* next.js에게 이 이미지는 중요하니까 먼저 다운받아줘라고 하고 싶으면 priority를 설정해주면 됨 */}
      <Image src={clothesImage} alt="Clothes" priority />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </div>
  );
}
