import React from "react";
import type { DropdownProps, MenuProps } from "antd";
import { Dropdown } from "antd";
import { ArrowDown } from "@/components/svg";

type CategoryDropdownProps = {
  label?: string;
  menuItems: MenuProps["items"];
  hoverClass?: string;
};

function CategoryDropdown({
  label = "All Category",
  menuItems,
  hoverClass = "hover:bg-blue-100",
}: CategoryDropdownProps) {
  const [open, setOpen] = React.useState(false);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "close") {
      setOpen(false);
    }
  };

  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };

  return (
    <Dropdown
      menu={{
        items: menuItems,
        onClick: handleMenuClick,
        className: `${hoverClass} rounded-md`,
      }}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <a onClick={(e) => e.preventDefault()}>
        <div
          className={`flex items-center gap-1 justify-center px-2 py-1 rounded-md ${hoverClass} cursor-pointer`}
        >
          {label}
          <ArrowDown width="18" height="18" className="w-[18px]" fill="black" />
        </div>
      </a>
    </Dropdown>
  );
}

export default function CategoryNavbar() {
  const dropdownData = [
    {
      label: "Electronics",
      items: [
        { label: "Laptops", key: "laptops" },
        { label: "Phones", key: "phones" },
        { label: "Close", key: "close" },
      ],
      hoverClass: "hover:bg-blue-100",
    },
    {
      label: "Fashion",
      items: [
        { label: "Men", key: "men" },
        { label: "Women", key: "women" },
        { label: "Close", key: "close" },
      ],
      hoverClass: "hover:bg-pink-100",
    },
    {
      label: "Home",
      items: [
        { label: "Furniture", key: "furniture" },
        { label: "Decor", key: "decor" },
        { label: "Close", key: "close" },
      ],
      hoverClass: "hover:bg-green-100",
    },
    {
      label: "Books",
      items: [
        { label: "Fiction", key: "fiction" },
        { label: "Non-Fiction", key: "non-fiction" },
        { label: "Close", key: "close" },
      ],
      hoverClass: "hover:bg-yellow-100",
    },
    {
      label: "Toys",
      items: [
        { label: "Puzzles", key: "puzzles" },
        { label: "Games", key: "games" },
        { label: "Close", key: "close" },
      ],
      hoverClass: "hover:bg-purple-100",
    },
  ];

  return (
    <div className="h-[4rem] justify-between bg-white shadow-xl flex px-[2rem] items-center">
      <div>
        <CategoryDropdown
          label="All Categories"
          menuItems={[
            { label: "Category A", key: "a" },
            { label: "Category B", key: "b" },
            { label: "Close", key: "close" },
          ]}
          hoverClass="hover:bg-gray-100"
        />
      </div>
      <div className="flex gap-[1rem] items-center">
        {dropdownData.map((dropdown, index) => (
          <CategoryDropdown
            key={index}
            label={dropdown.label}
            menuItems={dropdown.items}
            hoverClass={dropdown.hoverClass}
          />
        ))}
      </div>
    </div>
  );
}
