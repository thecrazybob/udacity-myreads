import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Shelf from "./Shelf.js";
import ListBooks from "./ListBooks.js";
import { debounce } from "throttle-debounce";

class BooksApp extends React.Component {
  state = {
    books: [],
    categories: [
      { id: 1, shelf: "currentlyReading", name: "Currently Reading" },
      { id: 2, shelf: "wantToRead", name: "Want to Read" },
      { id: 3, shelf: "read", name: "Read" },
      { id: 4, shelf: "none", name: "None" },
    ],
    searchQuery: "",
    searchResults: [],
  };

  updateBooks = () => {
    this.retrieveBooks();
  };

  retrieveBooks = () => {
    BooksAPI.getAll().then((retrievedBooks) => {
      this.setState({
        books: retrievedBooks,
      });
    });
  };

  handleSearchQuery = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
    this.searchForBooks(event.target.value);
  };

  searchForBooks = debounce(300, false, (query) => {
    this.getSearchResults(query);
  });

  getSearchResults = (query) => {
    BooksAPI.search(query).then((response) => {
      if (query.length > 0) {
        if (response.error) {
          this.setState({
            searchResults: [],
          });
        } else {
          this.setState({
            searchResults: response,
          });
        }
      } else {
        this.setState({
          searchResults: [],
        });
      }
    });
  };

  componentDidMount() {
    this.retrieveBooks();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/search">
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/">
                  <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                  <input
                    value={this.state.searchQuery}
                    onChange={this.handleSearchQuery}
                    type="text"
                    placeholder="Search by title or author"
                  />
                </div>
              </div>
              <div className="search-books-results">
                {this.state.searchQuery !== "" ? (
                  <ListBooks
                    currentCategory=""
                    books={this.state.searchResults}
                    updateBooks={this.updateBooks}
                    categories={this.state.categories}
                  />
                ) : (
                  "Type something to search for!"
                )}
              </div>
            </div>
          </Route>

          <Route exact path="/">
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {this.state.categories
                    .filter(
                      (currentCategory) => currentCategory.shelf !== "none"
                    )
                    .map((currentCategory) => {
                      return (
                        <Shelf
                          updateBooks={this.updateBooks}
                          key={currentCategory.id}
                          currentCategory={currentCategory}
                          categories={this.state.categories}
                          books={this.state.books}
                        />
                      );
                    })}
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          </Route>
        </div>
      </Router>
    );
  }
}

export default BooksApp;
