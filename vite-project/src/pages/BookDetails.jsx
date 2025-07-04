import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BookDetails = () => {
  const { id } = useParams()
  const book = useSelector(state => state.books.find(b => b.id.toString() === id))

  if (!book) return <p>Book not found.</p>

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <Link to={`/books/${book.category}`}>Back to Browse</Link>
    </div>
  )
}

export default BookDetails