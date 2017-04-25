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

  _dblClick = () => {
    store.delete(this.props.index)
  }

  render () {
    return <li onClick={this._click} onDoubleClick={this._dblClick} className={cx(store.listItems[this.props.index].completed ? 'completed' : '')}>
      {this.props.label}
    </li>
  }
}

export default Item
