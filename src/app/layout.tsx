import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { NextAuthProvider } from "@/providers/auth";

import "./globals.css";
import { Header } from "@/components/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Travel Booking",
  description: "Created by FullStack Week",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header />
          <div className="p-5">{children}</div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
