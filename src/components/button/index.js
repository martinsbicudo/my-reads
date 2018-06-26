import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./style.scss"

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    // BINDS
    this.handlerClick = this.handlerClick.bind(this)
  }

  handlerClick() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const {
      type = 'primary',
      text
    } = this.props

    return (
      <button onClick={this.handlerClick} className={`button button--${type}`} data-active={this.state.isOpen}>
        <span className="button__text">{text}</span>
        <div className="button__context-menu">
          <ContextMenu />  
        </div>
      </button>
    )
  }
}

export default Button
