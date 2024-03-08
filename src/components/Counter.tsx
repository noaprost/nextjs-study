"use client";
import React, { useState } from "react";

export default function Counter() {
    console.log("안녕! - 클라이언트")
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>숫자 증가 시키기</button>
    </>
  );
}
