import React, { Component } from 'react'
import { ItemList, InputBar } from '.'
import styles from './styles.scss'

class App extends Component {
  render () {
    return <div className={styles.App}>
      One List
      <InputBar />
      <ItemList />
    </div>
  }
}

export default App
