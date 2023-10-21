import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-proxima-nova relative mb-10 box-border h-14 w-full rounded-sm border-[2px] border-solid border-blue-500 text-left text-[16px] text-blue-400"
    >
      <h2 className="flex items-center justify-center font-medium leading-[24px] text-blue-600">
        {text}
      </h2>
    </button>
  );
};

export default Button;
