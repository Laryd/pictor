"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";


const Hero = () => {
  return (
    <div className="flex flex-col gap-7 sm:flex-row items-center justify-center m-6 p-5 py-16  bg-[#E7E3E0]">
      <div className="">
        <main className="text-2xl md:text-3xl font-bold space-y-4">
          <h1 className="inline">
            Manage <span className="inline bg-clip-text">Your</span>
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-blue-500 via-blue-300 to-blue-600 text-transparent bg-clip-text">
              Memories
            </span>{" "}
            <br />
            Effortlessly
          </h2>
          <p className="text-xl text-muted-foreground mx-auto lg:mx-0 max-w-96">
            Welcome to Pictoria, your go-to app for organizing and managing
            photo albums with ease. Keep your memories at your fingertips,
            easily accessible and beautifully displayed. Start now and
            experience seamless photo management.
          </p>
          <Button>
            Get Started
          </Button>
        </main>
      </div>
      <div className="hidden sm:block">
        <Image
          alt="Beautiful woman holding a flower"
          src="/hero.svg"
          width={626}
          height={417}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
