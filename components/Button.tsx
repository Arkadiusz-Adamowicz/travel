import { ButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

const Button = ({ type, icon, title, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && "w-full"}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 cursor-pointer whitespace-nowrap">
        {title}
      </label>
    </button>
  );
};

export default Button;
