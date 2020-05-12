import React from 'react'

const SingleBookCover = (props) => {
    return(
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.bookImg}")` }}></div>
    )
}

export default SingleBookCover