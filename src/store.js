import { observable } from 'mobx'

class Store {
  @observable
  listItems = [{label: 'test entry', completed: false}]

  addItem (label) {
    this.listItems = [...this.listItems, {label, completed: false}]
  }

  markComplete = i => {
    this.listItems[i].completed = !this.listItems[i].completed
  }

  delete = i => {
    this.listItems.splice(i, 1)
  }
}

const store = new Store()

window.store = store

export default store
