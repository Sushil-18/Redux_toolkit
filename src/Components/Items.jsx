import React from "react";
import Item from "./Item";
import books from "../assets/books";

const Items = () => {
  return (
    <div>
      <p className="text-center my-8">Buy your favourite product</p>
      <ul className="flex flex-col gap-4">
        {books.map((book) => (
          <Item key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default Items;
