import React from "react";
import Item from "./Item";
import books from "../assets/books";

const Items = () => {
  return (
    <div className="mt-20">
      <p className="text-center mb-6">Buy your favourite product</p>
      <ul className="flex flex-col gap-4">
        {books.map((book) => (
          <Item key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default Items;
