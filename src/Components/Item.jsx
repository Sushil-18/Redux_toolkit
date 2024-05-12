import React from "react";
import { Button } from "./UI/Button";
import { cartActions } from "../Store/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Item = ({ book }) => {
  const addBookToCart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function handleAddBookToCart(book) {
    dispatch(cartActions.addItem(book));
  }
  return (
    <li className="flex flex-col w-[40%] mx-auto bg-white gap-12 p-4 rounded-xl drop-shadow-2xl">
      <div className="flex justify-between px-8">
        <p className="text-black">{book.Title}</p>
        <p className="text-white bg-black p-2 rounded-full px-4 hover:drop-shadow-md ">
          ${book.Price}
        </p>
      </div>
      <div className="flex justify-between px-8">
        <p className="text-black">{book.Description}</p>
        <Button
          tailwindcss="min-w-28 active:bg-rose-500 p-2 text-blue-400 border-[.3px] border-blue-400 rounded-xl self-end"
          onClick={() => handleAddBookToCart(book)}
        >
          Add To Cart
        </Button>
      </div>
    </li>
  );
};

export default Item;
