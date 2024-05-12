import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalBooksInCart = useSelector((state) => state.cart.totalItems);
  return (
    <div className="flex justify-between mx-auto w-[100%] fixed top-0 px-28 py-4 bg-transperent backdrop-blur-sm z-50">
      <p className="font-semibold text-2xl p-2">ReduxCart</p>
      <p className="border-[.2px] rounded-md p-2 self-center">
        Cart&nbsp;
        <span className="border-0 rounded-full bg-stone-500 px-4 py-1">
          {totalBooksInCart}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
