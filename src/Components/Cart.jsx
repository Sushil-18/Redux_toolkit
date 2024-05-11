import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Cart = () => {
  const books = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div className="flex flex-col mx-auto w-[30%] bg-stone-500 h-auto p-4 border-0 rounded-xl">
      <p className="text-center">Your Shopping Cart</p>
      {books.map((book) => (
        <div
          key={book.id}
          className="flex flex-col w-[90%] bg-[#242424] mx-auto border-0 rounded-md m-2 p-2"
        >
          <div className="flex justify-between px-4">
            <p>{book.Title}</p>
            <p>{totalPrice}</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-white">Quantity:{book.quantity}</p>
            <div className="flex gap-2">
              <button className="border-[.3px] w-5 h-5 rounded-full">+</button>
              <button className="border-[.3px] w-5 h-5 rounded-full">-</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
