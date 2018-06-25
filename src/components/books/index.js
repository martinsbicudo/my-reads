import React, { Component } from "react"
import ReactDOM from "react-dom"
import { getAll } from "Service"
import "./style.scss"

class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reading: [],
      read: [],
      readed: [],
      titles: [
        'Currently Reading',
        'Want to Read',
        'Read'
      ]
    }
  }

  //LIFECYCLES
  componentDidMount() {
  }

  hasBooks() {
    const { reading, read, readed, titles } = this.state
      , hasItems = list => list.length > 0

    return hasItems(reading) && hasItems(read) && hasItems(titles)
  }

  render() {
    const { reading, read, readed, titles } = this.state
      , allBooks = [
        reading,
        read,
        readed
      ]
    
    return (
      <section className="books">
        <Container>
          {allBooks.map((books, i) =>
            <section key={i}>
              <div class="books__title">
                <Title text={titles[i]} />
              </div>
              {books.length > 0
                ? <ul className="grid -wrap halign-center valign-bottom">
                  {books.map((book, k) =>
                    <li className="books__item" key={k}>
                      <Book
                        thumbnail={book.imageLinks.thumbnail}
                        title={book.title}
                        author={book.authors[0]}
                      />
                    </li>
                  )}
                </ul>
                : <div class="books__alert grid halign-center">
                  <Alert text="You dont't have any books in this category :(" />
                </div>}
            </section>
          )}
        </Container>
      </section>
    )
  }
}

export default Books
