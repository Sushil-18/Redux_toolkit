import React from "react";

export const Button = ({ children, tailwindcss, onClick }) => {
  return (
    <>
      <button className={tailwindcss} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
