export const addBook = (status, book) => ({
  type: 'ADD_BOOK',
  status,
  book
})

export const removeBook = (status, id) => ({
  type: 'REMOVE_BOOK',
  status,
  id
})
