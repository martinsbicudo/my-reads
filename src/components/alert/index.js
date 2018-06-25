import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./style.scss"

class Alert extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      type = 'info',
      text
    } = this.props

    return (
      <p className={`alert alert--${type}`}>{text}</p>
    )
  }
}

export default Alert
