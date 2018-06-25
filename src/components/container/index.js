import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./style.scss"

class Container extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}

export default Container
