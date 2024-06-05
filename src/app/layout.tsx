
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn, constructMetadata } from "../lib/utils";
import { NavBar } from "@/components/NavBar";
import SessionWrapper from "@/components/SessionWrapper";
import { StoreProvider } from "@/redux/StoreProvider";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <SkeletonTheme>
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
              <Toaster />
            </body>
          </html>
        </StoreProvider>
      </SkeletonTheme>
    </SessionWrapper>
  );
}
