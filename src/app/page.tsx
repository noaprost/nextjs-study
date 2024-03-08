import Counter from "@/components/Counter";
import Image from "next/image";
import os from "os"; // 노드 환경에서 동작하고 있는 운영체제의 정보를 얻을 수 있음, 노드 API 중에 하나

export default function Home() {
  console.log("안녕! - 서버");
  return (
    <>
      <h1>홈페이지다! ver3</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
    </>
  );
}
