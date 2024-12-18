import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./assets/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Weather Facts",
  description: "Created by Mahmoud Abu Youssef",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#317EFB" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
