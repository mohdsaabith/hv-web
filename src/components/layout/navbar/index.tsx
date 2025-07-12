"use client";

import React from "react";

import MainNavbar from "./main-navbar";
import CategoryNavbar from "./category-navbar";

export default function Navbar() {
  return (
    <div className=" z-50">
      <MainNavbar />
      <CategoryNavbar />
    </div>
  );
}
