import type { Metadata } from "next";
import { Open_Sans, Nanum_Gothic } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
});

// html의 head tag에 들어갈 내용들
export const metadata: Metadata = {
  title: "Cool Site",
  description: "멋진 제품을 판메하는 곳입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <header className="flex justify-between items-center p-2 border-b border-gray-700">
          <Link href="/" className={`text-3xl ${gothic.className}`}>
            Demo Note
          </Link>
          <nav>
            <Link className="px-8" href="/products">
              Products
            </Link>
            <Link className="px-8" href="/about">
              About
            </Link>
            <Link className="px-8" href="/contact">
              Contact
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
