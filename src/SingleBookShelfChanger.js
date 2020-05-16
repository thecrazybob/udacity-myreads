import React from "react";

const SingleBookShelfChanger = (props) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={props.isSearch ? props.shelf : props.book.shelf}
        onChange={(event) => {
          props.onUpdate(props.book, event.target.value);
        }}
      >
        <option value="move" disabled>
          Move to...
        </option>
        {props.categories.map((category) => {
          return (
            <option key={category.id} value={category.shelf}>
              {category.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SingleBookShelfChanger;
