import React, { Component } from "react"
import ReactDOM from "react-dom"
import { get } from 'Service'
import "./style.scss"

class Header extends Component {
  render() {
    return (
      console.log(get(1)),
      <header className="header">
        <Container>
            <div className="grid halign-center">
              <figure className="header__figure grid valign-middle">
                <img className="header__logo" src="/public/images/icon.png" title="My Reades" alt="My Reads" />
                <figcaption className="header__caption">My Reads</figcaption>
              </figure>
            </div>
        </Container>
      </header>
    )
  }
}

export default Header
