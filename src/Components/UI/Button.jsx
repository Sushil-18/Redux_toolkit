import React from "react";

export const Button = ({ buttonText, tailwindcss, onClick }) => {
  return (
    <>
      <button
        className={`${tailwindcss} p-2 text-blue-400 border-[.3px] border-blue-400 rounded-xl self-end`}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
