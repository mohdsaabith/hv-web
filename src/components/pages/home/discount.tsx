import React from "react";
import Image from "next/image";

import Computer from "@/components/assets/image/computer.jpg";

type CardOverlayProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  image?: any;
};

const CardOverlay: React.FC<CardOverlayProps> = ({
  title,
  subtitle,
  buttonLabel,
  image = Computer,
}) => (
  <div className="relative rounded-[16px] overflow-hidden h-full">
    <Image
      src={image}
      alt={title}
      width={1300}
      height={1300}
      className="w-full h-full object-cover rounded-[16px]"
    />
    <div className="absolute inset-0 bg-black/60 rounded-[16px] z-10" />
    <div className="absolute bottom-0 p-4 text-white z-20">
      <div className="text-base font-semibold mb-1">{title}</div>
      <div className="text-sm mb-2">{subtitle}</div>
      <button className="border p-[0.5rem] rounded-2xl text-[12px] border-white">
        {buttonLabel}
      </button>
    </div>
  </div>
);

export default function Discount() {
  return (
    <div className="grid grid-cols-4 h-[90vh] my-[3rem] gap-[2rem]">
      {/* Main Large Box */}
      <div className="col-span-2 rounded-[16px] relative overflow-hidden">
        <Image
          src={Computer}
          alt="Main feature image"
          width={1300}
          height={1300}
          className="w-full h-full object-cover rounded-[16px]"
        />
        <div className="absolute inset-0 bg-black/60 rounded-[16px] z-10" />
        <div className="absolute bottom-0 p-6 text-white z-20">
          <div className="text-xl font-semibold mb-2">
            We'll be happy to take care of
          </div>
          <div className="text-sm mb-4">
            Our expertise enables us to offer a wide range of high-quality
            products and services tailored to
          </div>
          <button className="border p-[0.5rem] rounded-2xl text-[12px] border-white">
            Explore more
          </button>
        </div>
      </div>

      {/* Side Column 1 */}
      <div className="col-span-1 flex flex-col gap-[2rem]">
        <div className="h-[60%]">
          <CardOverlay
            title="Powerful Tech Solutions"
            subtitle="25% Sales"
            buttonLabel="Explore more"
          />
        </div>
        <div className="h-[40%]">
          <CardOverlay
            title="Innovative Designs"
            subtitle="13% Sales"
            buttonLabel="Explore more"
          />
        </div>
      </div>

      {/* Side Column 2 */}
      <div className="col-span-1 flex flex-col gap-[2rem]">
        <div className="h-[40%]">
          <CardOverlay
            title="Powerful Tech Solutions"
            subtitle="35% Sales"
            buttonLabel="Explore more"
          />
        </div>
        <div className="h-[60%]">
          <CardOverlay
            title="Innovative Designs"
            subtitle="50% Salas"
            buttonLabel="Explore more"
          />
        </div>
      </div>
    </div>
  );
}
