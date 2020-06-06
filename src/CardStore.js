import { observable } from 'mobx'

class CardStore {
  @observable cards = {}

  setCards(data) {
    this.cards[data.name_short] = data
  }
}

const store = new CardStore()
window.store = store

export default store
