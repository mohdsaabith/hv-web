"use client";
import Image from "next/image";
import Link from "next/link";

import { Carousel } from "antd";

import Printer from "@/components/assets/image/printer.jpg";
import Computer from "@/components/assets/image/computer.jpg";

export default function HeroSection() {
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <section className="">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
            <h1 className=" font-semibold leading-tight text-teal-950  text-4xl sm:text-5xl lg:text-6xl">
              We'll be happy to take care of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-orange-800">
                your work.
              </span>
            </h1>
            <p className=" flex text-gray-700 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
              Our expertise enables us to offer a wide range of high-quality
              products and services tailored to meet the diverse needs of our
              clients across various industries. At Hasvi, we prioritize
              excellence, integrity, and customer satisfaction, striving to
              build strong and lasting partnerships.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
              <Link
                href="#"
                className="px-6 items-center h-12 rounded-3xl bg-pink-600 text-white duration-300 ease-linear flex justify-center w-full sm:w-auto"
              >
                Get started
              </Link>
              <Link
                href="#"
                className="px-6 items-center h-12 rounded-3xl text-white border   bg-pink-600 duration-300 ease-linear flex justify-center w-full sm:w-auto"
              >
                Book a call
              </Link>
            </div>
          </div>
          <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
            <div className="w-3/5 h-[80%] rounded-3xl overflow-clip  z-30">
              <Image
                src={Computer}
                alt="buildind plan image"
                width={1300}
                height={1300}
                className="w-full h-full object-cover z-30"
              />
            </div>
            <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-clip  z-10">
              <Image
                src={Printer}
                alt="working-on-housing-project"
                height={1300}
                width={1300}
                className="z-10 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
