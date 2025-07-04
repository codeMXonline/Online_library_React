import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, title: 'Book A', author: 'Author A', description: 'Desc A', rating: '4.5', category: 'Fiction' },
  { id: 2, title: 'Book B', author: 'Author B', description: 'Desc B', rating: '4.0', category: 'Non-Fiction' }
]

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addBook } = booksSlice.actions
export default booksSlice.reducer