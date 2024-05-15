import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cartSlice";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

const Cart = () => {
  const books = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  function handleBookIncrement(book) {
    dispatch(cartActions.addItem(book));
  }

  function handleBookDecrement(id) {
    dispatch(cartActions.removeItem(id));
  }
  return (
    <Modal>
      <div className="flex flex-col mx-auto w-[30%] bg-stone-500 h-auto p-4 border-0 rounded-xl">
        <p className="text-center">Your Shopping Cart</p>
        {books.map((book) => (
          <div
            key={book.id}
            className="flex flex-col w-[90%] bg-[#242424] mx-auto border-0 rounded-md m-2 p-3 gap-6"
          >
            <div className="flex justify-between px-4">
              <p>{book.Title}</p>
              <p>{book.Price * book.quantity}</p>
            </div>
            <div className="flex justify-between px-4">
              <p className="text-white">Quantity:{book.quantity}</p>
              <div className="flex gap-2 justify-center items-center">
                <Button
                  tailwindcss="border-[.3px] w-6 h-6 rounded-full"
                  onClick={() => handleBookIncrement(book)}
                >
                  +
                </Button>
                <Button
                  tailwindcss="border-[.3px] w-6 h-6 rounded-full"
                  onClick={() => handleBookDecrement(book.id)}
                >
                  -
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default Cart;
