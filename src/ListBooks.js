import React, { Component } from 'react'
import SingleBook from './SingleBook.js'

class ListBooks extends Component {

    render() {
        return(
          <ol className="books-grid">
            
              { (this.props.books !== []) ? (
                this.props.books
                .filter(book => book.shelf === this.props.currentCategory.shelf)
                .map( book => {
                  return(
                    <SingleBook onUpdateBooks={this.props.updateBooks} key={book.id} book={book} categories={this.props.categories} />
                  )
                })) : <p>No results found for the search query</p>
              }              
          </ol>

        )
    }
}

export default ListBooks