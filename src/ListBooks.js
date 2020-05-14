import React, { Component } from 'react'
import SingleBook from './SingleBook.js'

class ListBooks extends Component {

    render() {
        return(
            <div className="bookshelf">
              <h2 className="bookshelf-title">{ this.props.currentCategory.name }</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  
                    { this.props.books
                    .filter(book => book.shelf === this.props.currentCategory.shelf)
                    .map( book => {
                      return(
                        <SingleBook onUpdateBooks={this.props.updateBooks} key={book.id} book={book} categories={this.props.categories} />
                      )
                    }) }
                    
                </ol>
              </div>
            </div>
        )
    }
}

export default ListBooks