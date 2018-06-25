import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./style.scss"

class Title extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      text
    } = this.props

    return (
      <h1 className="title">{text}</h1>
    )
  }
}

export default Title
