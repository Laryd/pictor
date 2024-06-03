
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { NavBar } from "@/components/NavBar";
import SessionWrapper from "@/components/SessionWrapper";
import { StoreProvider } from "@/redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pictoria",
  description: "Your pictures storage solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <StoreProvider>
        <html lang="en">
          <body
            className={cn(
              "min-h-screen font-sans antialiased grainy",
              inter.className
            )}
          >
            <NavBar />
            {children}
          </body>
        </html>
      </StoreProvider>
    </SessionWrapper>
  );
}
