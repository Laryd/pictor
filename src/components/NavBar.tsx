"use client";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button, buttonVariants } from "./ui/button";
import { Menu, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Skeleton from "react-loading-skeleton";





export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {data: session} = useSession()
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto my-1">
        <NavigationMenuList className="container h-20 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link href="/" className="ml-2 mb-2 font-bold text-xl flex">
              <Image src="/logo.svg" alt="logo" width={145} height={45} />
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                ></Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    <Link href="/" className="ml-2 mt-5 font-bold text-xl flex">
                      <Image
                        src="/logo.svg"
                        alt="logo"
                        width={187}
                        height={74}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                {session ? (
                  <nav className="flex flex-col items-start gap-8">
                    <Button variant="ghost">
                      Welcome,{" "}
                      {session.user?.name?.split(" ")[0] || (
                        <Skeleton width={50} />
                      )}{" "}
                    </Button>
                    <Link
                      href="/"
                      className={`${buttonVariants({
                        variant: "outline",
                      })}`}
                    >
                      Home
                    </Link>
                    <Link
                      href="/home"
                      className={`${buttonVariants({
                        variant: "outline",
                      })}`}
                    >
                      Dashboard
                    </Link>
                    <Button onClick={() => signOut()}>
                      Sign out
                      <MoveRight />
                    </Button>
                  </nav>
                ) : (
                  <nav className="flex flex-col justify-start items-left gap-5 mt-4">
                    <Link
                      href="/"
                      className={`${buttonVariants({
                        variant: "outline",
                      })}`}
                    >
                      Home
                    </Link>
                    <Link
                      href="/signin"
                      onClick={() => setIsOpen(false)}
                      className={`${buttonVariants({ variant: "outline" })}`}
                    >
                      Sign in
                    </Link>
                    <Button>
                      <Link href="/signup">Get Started </Link>
                      <MoveRight />
                    </Button>
                  </nav>
                )}
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}

          {session ? (
            <nav className="hidden md:flex gap-2">
              <Button variant="ghost">
                Welcome,{" "}
                {session.user?.name?.split(" ")[0] || <Skeleton width={50} />}{" "}
              </Button>
              <Link
                href="/"
                className={`${buttonVariants({
                  variant: "outline",
                })}`}
              >
                Home
              </Link>
              <Link
                href="/home"
                className={`${buttonVariants({
                  variant: "outline",
                })}`}
              >
                Dashboard
              </Link>
              <Button onClick={() => signOut()}>
                Sign out
                <MoveRight />
              </Button>
            </nav>
          ) : (
            <nav className="hidden md:flex gap-2">
              <Link
                href="/"
                className={`${buttonVariants({
                  variant: "outline",
                })}`}
              >
                Home
              </Link>
              <Link
                href="/signin"
                className={`text-[17px] text-gray-600 ${buttonVariants({
                  variant: "outline",
                })}`}
              >
                Sign in
              </Link>

              <Button className="flex gap-2">
                <Link href="/signup">Get Started </Link>

                <MoveRight />
              </Button>
            </nav>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
