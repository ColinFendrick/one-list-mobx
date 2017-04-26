import React, { Component } from 'react'
import store from '../../store'
import styles from './styles.scss'

class InputBar extends Component {
  _submit = e => {
    e.preventDefault()
    store.addItem(this.refs.toDoList.value)
    this.refs.toDoList.value = ''
  }

  _focus = e => {
    e.target.setSelectionRange(0, e.target.value.length)
  }

  render () {
    return <div className={styles.InputBar}>
      <form onFocus={this._focus} onSubmit={this._submit}>
        <input type='text' ref='toDoList' />
      </form>
    </div>
  }
}

export default InputBar
