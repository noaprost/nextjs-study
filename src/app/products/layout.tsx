import Link from "next/link";
import React, { Children } from "react";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="">
      <nav className="border-orange-400 border-solid border border-opacity-50 p-2">
        <Link href="/products/women" className="px-8">
          여성옷
        </Link>
        <Link href="/products/man" className="px-8">
          남성옷
        </Link>
      </nav>
      {children}
    </section>
  );
}
