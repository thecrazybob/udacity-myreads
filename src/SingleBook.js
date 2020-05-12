import React from 'react'
import SingleBookCover from './SingleBookCover.js'
import SingleBookInfo from "./SingleBookInfo.js";
import SingleBookShelfChanger from './SingleBookShelfChanger.js'

const SingleBook = (props) => {
    return(
        <li>
            <div className="book">
              <div className="book-top">
                <SingleBookCover bookImg={props.book.imageLinks.thumbnail} />
                <SingleBookShelfChanger />
              </div>
              <SingleBookInfo bookName={props.book.title} bookAuthors={props.book.authors} />
            </div>
        </li>
    )
}

export default SingleBook