import React, { Component } from "react";
import SingleBookCover from "./SingleBookCover.js";
import SingleBookInfo from "./SingleBookInfo.js";
import SingleBookShelfChanger from "./SingleBookShelfChanger.js";
import * as BooksAPI from "./BooksAPI";

class SingleBook extends Component {

  state = {
    shelf: 'none'
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((book) => {
      this.props.onUpdateBooks(book, shelf);
    });
    if (shelf !== 'none') {
      setTimeout(() => {
        this.determineShelf()
      }, 1500)
    } else {
      this.setState({
        shelf: 'none'
      })
    } 
  };

  determineShelf = () => {
    if (this.props.isSearch === true) {
      this.props.booksOnHomePage
        .filter(book => book.id === this.props.book.id)
        .map((book) => this.setState({shelf: book.shelf}))
    }
  }

  componentDidMount() {
    this.determineShelf()
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <SingleBookCover bookImg={this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : 'https://via.placeholder.com/128x193.png'} />
            <SingleBookShelfChanger
              book={this.props.book}
              categories={this.props.categories}
              onUpdate={this.changeBookShelf}
              shelf={this.state.shelf}
              isSearch={this.props.isSearch}
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
