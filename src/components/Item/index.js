import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../../store'
import styles from './styles.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

@observer
class Item extends Component {
  _click = () => {
    store.markComplete(this.props.index)
  }

  _delete = e => {
    store.delete(this.props.index)
  }

  render () {
    return <li className={cx(store.listItems[this.props.index].completed ? 'completed' : '')}>
      <div onClick={this._click} className={styles.entry}>
        {this.props.label}
        <button className={styles.delete}
          onClick={this._delete}
          value='x' name='delete'>
          x
        </button>
      </div>
    </li>
  }
}

export default Item
