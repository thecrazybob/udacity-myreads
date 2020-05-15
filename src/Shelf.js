import React from "react";
import ListBooks from "./ListBooks";

const Shelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.currentCategory.name}</h2>
      <div className="bookshelf-books">
        <ListBooks
          updateBooks={props.updateBooks}
          key={props.currentCategory.id}
          currentCategory={props.currentCategory}
          categories={props.categories}
          books={props.books}
        />
      </div>
    </div>
  );
};

export default Shelf;
