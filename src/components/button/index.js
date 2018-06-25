import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./style.scss"

class Button extends Component {
  constructor(props) {
    super(props)
    state = {
      isOpen: false
    }
  }

  handlerClick() {
    setInterval({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const {
      isOpen
    } = this.state

    const {
      type = 'primary',
      text
    } = this.props

    return (
      <button onclick={handlerClick()} className={`button button--${type}`} data-active={isOpen}>
        <span class="button__text">{text}</span>
        <div class="button__context-menu">
          <ContextMenu />  
        </div>
      </button>
    )
  }
}

export default Button
