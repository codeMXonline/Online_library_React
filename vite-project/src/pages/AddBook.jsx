import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBook } from '../redux/booksSlice'

const AddBook = () => {
  const [form, setForm] = useState({ title: '', author: '', description: '', rating: '', category: '' })
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const { title, author, description, rating, category } = form
    if (!title || !author || !description || !rating || !category) {
      return setError('Please fill out all fields')
    }
    dispatch(addBook({ ...form, id: Date.now() }))
    navigate(`/books/${category}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Book</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="rating" placeholder="Rating" value={form.rating} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  )
}

export default AddBook