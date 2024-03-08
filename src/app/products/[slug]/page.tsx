import GoProductsButton from "@/components/GoProductsButton";
import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import React from "react";

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `${params.slug}`,
  };
}
export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    redirect("/products");
    //notFound();
  }
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <>
      <h1 className="text-2xl">{product.name} 제품 설명 페이지</h1>
      <Image
        // 기본적으로 /만 입력하면 public 폴더로 이동
        src={`/images/${product.image}`}
        alt={product.name}
        width={400}
        height={400}
      />
      <GoProductsButton />
    </>
  );
}

// 동적으로 어떤 경로든 생성될 수 있기 때문에 미리 보여주고 싶은 페이지를 만들 수 없다는 문제점을 해결하기 위해 나온 함수
// 함수의 이름은 Next.js에서 정해준 규격 사항
// Dynimic Route Page에서 특정 경로에 한에서는 미리 페이지를 보여주고 싶다면
// 이 함수에 경로들을 설정해줄 수 있음
export async function generateStaticParams() {
  // 모든 제품의 페이지를 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const products = await getProducts();
  return products.map((product) => ({ slug: product.id }));
}
