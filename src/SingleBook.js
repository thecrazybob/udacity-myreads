import React, { Component } from "react";
import SingleBookCover from "./SingleBookCover.js";
import SingleBookInfo from "./SingleBookInfo.js";
import SingleBookShelfChanger from "./SingleBookShelfChanger.js";
import * as BooksAPI from "./BooksAPI";

class SingleBook extends Component {
  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((book) => {
      this.props.onUpdateBooks();
    });
  };

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <SingleBookCover bookImg={this.props.book.imageLinks.thumbnail} />
            <SingleBookShelfChanger
              book={this.props.book}
              categories={this.props.categories}
              onUpdate={this.changeBookShelf}
            />
          </div>
          <SingleBookInfo
            bookName={this.props.book.title}
            bookAuthors={this.props.book.authors}
          />
        </div>
      </li>
    );
  }
}

export default SingleBook;
