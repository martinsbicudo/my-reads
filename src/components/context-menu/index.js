import React, { Component } from "react"
import ReactDOM from "react-dom"
import { connect } from 'react-redux'
import { addBook, removeBook } from "@/src/actions"
import "./style.scss"

class ContextMenu extends Component {
  constructor(props) {
    super(props)

    // BINDS
    this.handlerClick = this.handlerClick.bind(this)
  }

  handlerClick(book) {
    return () => {
      console.log('oi')
      this.props.dispatch(addBook(book))
    }
  }

  render() {
    const { dispatch } = this.props

    return (
      <ul>
        <li onClick={this.handlerClick({
          oi: 'oi',
          lala: 'lala'
        })}>ACTIONNNNN</li>
      </ul>
    )
  }
}

export default connect()(ContextMenu)
