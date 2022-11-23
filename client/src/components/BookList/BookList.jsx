import React from 'react'
import {Link} from 'react-router-dom'

function BookList() {
  return (
    <>
      <h1>Book List</h1>
      <nav>
        <ul>
          <li><Link to="/book/1">Book 1</Link></li>
          <li><Link to="/book/2">Book 2</Link></li>
        </ul>
      </nav>
      
    </>
  )
}

export default BookList