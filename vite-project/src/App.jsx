import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/books/Fiction">Browse Books</Link> | <Link to="/add">Add Book</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}

export default App