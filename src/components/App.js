import React, { Component } from 'react'
import { ItemList, InputBar } from '.'
import styles from './styles.scss'

class App extends Component {
  render () {
    return <div className={styles.App}>
      <div className={styles.header}>
        One List
      </div>
      <ItemList />
      <InputBar />
    </div>
  }
}

export default App
