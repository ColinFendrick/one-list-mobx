import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Item } from '..'
import store from '../../store'
import styles from './styles.scss'

@observer
class ItemList extends Component {
  render () {
    const items = store.listItems.map((item, i) => {
      return <Item key={i} label={item.label} index={i} />
    })
    return <ul className={styles.List}>
      {items}
    </ul>
  }
}

export default ItemList
