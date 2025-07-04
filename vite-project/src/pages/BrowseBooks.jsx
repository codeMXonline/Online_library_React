import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BrowseBooks = () => {
  const { category } = useParams()
  const books = useSelector(state => state.books.filter(book => book.category === category))
  const [query, setQuery] = useState('')

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(query.toLowerCase()) || 
    book.author.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <h1>{category} Books</h1>
      <input 
        type="text" 
        placeholder="Search by title or author" 
        value={query} 
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} - <Link to={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BrowseBooks
