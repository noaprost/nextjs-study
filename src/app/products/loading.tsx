import React from "react";

export default function ProductsLoading() {
  return <p>로딩중입니다...😃</p>;
}

// 이렇게만 해주면 해당 route(지금은 products)에서 page.tsx가 준비되는 동안 자동으로 loading 페이지를 보여줌
// layout은 적용이 안되고 page.tsx에 대한 것만 적용됨
// loading페이지는 SSR을 할 때 실제로 의미있는 정보를 보여주고, 이후에 page 정보가 도착을 했을 때 병렬적으로 교체해서 보여주고 싶을 때 사용
// 페이지 전체를 SSG로 만드는 경우에는 이 페이지가 큰 의미가 없음

// 내부적으로 React에서 제공해주는 Suspense를 사용해서 동작
// 한계점 : 해당 route에 대해서 한번만 정의해줄 수 있음
// 그래서 필요에 따라 suspense boundary를 사용해서 부분별로 loading 페이지를 만들어 줄 수도 있음
// 중요한 데이터를 먼저 보여주고 내부에서 suspense tag를 추가적으로 사용함으로써 suspense boundary를 사용할 수 있음
