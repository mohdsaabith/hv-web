import React from "react";

import { Button } from "antd";

interface ButtonTypes {
  icon?: React.ReactNode;
  type?:
    | "default"
    | "icon"
    | "RoundIconTransparent"
    | "OutlinedButton"
    | "DeleteButton";
  className?: string;
  onClick: () => void;
  text?: string;
  disable?: boolean;
  isLoading?: boolean;
  iconPosition?: "start" | "end";
  localizedContent?: any;
  size?: any;
}

export default function Buttons({
  icon,
  type = "default",
  text,
  onClick,
  isLoading,
  disable,
  iconPosition = "start",
  size = "large",
  className,
  ...props
}: ButtonTypes) {
  switch (type) {
    case "icon":
      return <IconButton icon={icon} size={size} className={className} />;

    case "RoundIconTransparent":
      return;

    case "OutlinedButton":
      return;

    case "DeleteButton":
      return;

    default:
      return;
  }
}

// function IconButton({ icon, size, className }: any) {
//   return <Button icon={icon} size={size} className="bg-transparent" />;
// }

function IconButton({ icon, size, className }: any) {
  return <button className={`cursor-pointer + ${className}`}>{icon}</button>;
}
