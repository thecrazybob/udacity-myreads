import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'

class BooksApp extends React.Component {

  
  state = {
    books: [],
    categories: [
      {id: 1, shelf: 'currentlyReading', name: 'Currently Reading'},
      {id: 2, shelf: 'wantToRead', name: 'Want to Read'},
      {id: 3, shelf: 'read', name: 'Read'},
      {id: 4, shelf: 'none', name: 'None'},
    ],
  }

  updateBooks = () => {
    this.retrieveBooks()
  }

  retrieveBooks = () => {
    BooksAPI.getAll().then( retrievedBooks => {
      this.setState({
        books: retrievedBooks
      })
    })
  }

  componentDidMount() {
    this.retrieveBooks()
  }

  render() {
    return (
      <Router>
      <div className="app">

        <Route path="/search">
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/"><button className="close-search">Close</button></Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
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
                { this.state.categories.filter( currentCategory => currentCategory.shelf !== "none").map( currentCategory => {
                  return(<ListBooks updateBooks={this.updateBooks} key={currentCategory.id} currentCategory={currentCategory} categories={this.state.categories} books={this.state.books} />)
                }) }
                
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
    )
  }
}

export default BooksApp
