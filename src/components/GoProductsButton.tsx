"use client";

// 13버전 부터는 next/router대신에 next/navigation에서 import하는게 새로운 라우팅 방식에 맞는 방법
import { useRouter } from "next/navigation";

export default function GoProductsButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/products");
      }}
    >
      제품 페이지로 이동
    </button>
  );
}
