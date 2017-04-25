import React, { Component } from 'react'
import store from '../../store'
import styles from './styles.scss'

class InputBar extends Component {
  _submit = (e) => {
    e.preventDefault()
    store.addItem(this.refs.toDoList.value)
    this.refs.toDoList.value = ''
  }

  render () {
    return <div className={styles.InputBar}>
      <form onSubmit={this._submit}>
        <input type='text' ref='toDoList' />
      </form>
    </div>
  }
}

export default InputBar
