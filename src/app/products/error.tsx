// 내부적으로 react ErrorBoundary를 사용
"use client"; // useEffect를 사용해야하기 때문에, 무조건 client component로 만들어야함

import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

// reset : 에러를 리셋해줄 수 있는 callback 함수
export default function ProductsError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

// 만약 현재 route에 error 페이지가 따로 없다면 가장 근접한 부모의 error 페이지를 찾아서 로드해줌
