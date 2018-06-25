import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./style.scss"

class Book extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      thumbnail,
      title,
      author
    } = this.props

    return (
      <div className="book">
        <figure className="book__figure">
          <img className="book__cover" src={thumbnail} />
          <figcaption>
            <p className="book__title">{title}</p>
            <span className="book__author">{author}</span>
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default Book
