import React from "react";

const SingleBookInfo = (props) => {
  return (
    <div className="book-info">
      <div className="book-title">{props.bookName}</div>
      <div className="book-authors">
        {
        props.bookAuthors ? (
        props.bookAuthors.map((author, i) => {
          if (props.bookAuthors.length === i + 1) {
            return `${author}`;
          } else {
            return `${author}, `;
          }
        })
        ) : 'Unknown Author'
      }
      </div>
    </div>
  );
};

export default SingleBookInfo;
