import { observable, toJS } from 'mobx'

class Store {
  @observable
  listItems = []

  addItem (label) {
    this.listItems = [...this.listItems, {label, completed: false}]
    console.log(toJS(this.listItems))
  }

  markComplete (i) {
    this.listItems[i].completed = !this.listItems[i].completed
  }

  delete (i) {
    this.listItems.splice(i, 1)
  }
}

const store = new Store()

window.store = store

export default store
