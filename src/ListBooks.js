import React, { Component } from 'react'
import SingleBook from "./SingleBook.js";

class ListBooks extends Component {

    render() {
        return(
            <div className="bookshelf">
              <h2 className="bookshelf-title">{ this.props.category.name }</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  
                    { this.props.books
                    .filter(book => book.shelf === this.props.category.shelf)
                    .map( book => {
                      return(
                        <SingleBook book={book} />
                      )
                    }) }
                    
                </ol>
              </div>
            </div>
        )
    }
}

export default ListBooks