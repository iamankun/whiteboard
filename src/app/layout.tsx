import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Providers } from "./Providers";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "White Board by An Kun Studio",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          href="/Logo-An-Kun-Studio-White.ico"
          rel="icon"
          sizes="32x32"
          type="image/x-icon"
        />
        <link
          href="/Logo-An-Kun-Studio-White.ico"
          rel="icon"
          sizes="16x16"
          type="image/x-icon"
        />
      </head>
      <body>
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
