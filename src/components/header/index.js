import React, { Component } from "react"
import ReactDOM from "react-dom"
import css from "./style.scss"

class Header extends Component {
  render() {
    return (
      console.log(css),
      <header className={css.header}>Sou a Header</header>
    )
  }
}

export default Header
