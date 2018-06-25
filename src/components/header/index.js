import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./style.scss"

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Container>
            <div class="grid halign-center">
              <figure class="header__figure grid valign-middle">
                <img class="header__logo" src="/public/images/icon.png" title="My Reades" alt="My Reads" />
                <figcaption class="header__caption">My Reads</figcaption>
              </figure>
            </div>
        </Container>
      </header>
    )
  }
}

export default Header
