export default (state = {
  reading: [],
  read: [],
  readed: []
}, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state[action.status],
        action.book
      ]
    case 'REMOVE_BOOK':
      return state[action.status].map(book =>
        book.id != action.id
      )
    default:
      return state
  }
}
