import React from "react";
import { CustomButtonProps } from "../../types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  Handleclick,
  btnType,
  textStyles,
  rightIcon,
  IsDisabled,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
      onClick={Handleclick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative h-6 w-6">
          <Image
            src={rightIcon}
            fill
            alt="right icon"
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
