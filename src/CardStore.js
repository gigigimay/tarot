import { observable } from 'mobx'

class CardStore {
    @observable cards = {}
    setCards(data) {
        this.cards[data.name_short] = data
    }
}

const store = window.store = new CardStore()

export default store