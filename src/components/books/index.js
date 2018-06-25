import React, { Component } from "react"
import ReactDOM from "react-dom"
import { getAll } from "Service"
import "./style.scss"
import { list } from "postcss";

class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      reading: [],
      read: [],
      readed: []
    }
  }

  //LIFECYCLES
  componentDidMount() {
    getAll()
      .then(data => this.setState({
        books: data
      }))
  }

  render() {
    return (
      <section className="books">
        <Container>
            <ul className="grid -wrap halign-center valign-bottom">
              {this.state.books.map((book, key) =>
                <li className="books__item" key={key}>
                  <Book
                    thumbnail={book.imageLinks.thumbnail}
                    title={book.title}
                    author={book.authors[0]}
                  />
                </li>
              )}
            </ul>
        </Container>
      </section>
    )
  }
}

export default Books
