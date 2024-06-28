import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { getSession } from "next-auth/react";

import Providers from "../components/providers/Providers";
import { cn } from "@/lib/utils";

const font = Ubuntu({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Dispute",
  description: "Discord Clone",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html lang="en">
      <body className={cn(font.className, "bg-stone-950 text-stone-50")}>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
