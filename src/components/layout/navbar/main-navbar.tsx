import React from "react";
import Link from "next/link";

import { Input } from "antd";
import type { GetProps } from "antd";

import { Cart, Love } from "@/components/svg";
import Buttons from "@/components/common/button";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

export default function MainNavbar() {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="bg-[#FF3562] h-[4rem] flex justify-between items-center px-[2rem]">
      <div className="text-white w-[50%] font-semibold text-[32px]">HASVI</div>

      <div className="text-white flex justify-end items-center gap-[2rem] w-[50%]">
        <div className="w-[20rem]">
          <Search
            placeholder="What are you looking for ?"
            allowClear
            onSearch={onSearch}
            size="large"
            className="w-full "
          />
        </div>
        <div className="flex gap-[1rem]">
          <Buttons
            type="icon"
            onClick={() => {}}
            icon={<Love width={24} fill="white" />}
          />

          <Buttons
            type="icon"
            onClick={() => {}}
            icon={<Cart width={24} fill="white" />}
          />
        </div>
        <div>
          <Link href={""}>Login / Signup</Link>
        </div>
      </div>
    </div>
  );
}
