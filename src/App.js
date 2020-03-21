import React from 'react'
import { observer } from 'mobx-react'

import Card from './Card'
import api from './service'

const arrayToObject = (array, keyField) =>
    array.reduce((obj, item) => {
        const reverse = Math.floor(Math.random() * 2)
        obj[item[keyField]] = { ...item, reverse }
        return obj
    }, {})

const shuffle = array => array.sort(() => Math.random() - 0.5)

@observer
class App extends React.Component {
    componentDidMount() {
        this.getCards()
    }

    getCards = async () => {
        const { store } = this.props
        const { data } = await api.get()
        const { cards } = data
        const cardsObj = arrayToObject(cards, 'name_short')
        store.cardOrders = shuffle(cards).map(c => c.name_short)
        store.cards = cardsObj
        console.log('getCards', cardsObj)
    }

    onClick = c => () => {
        const { store } = this.props
        const newCard = store.cards[c.name_short]
        newCard.open = !newCard.open
        // store.setCards(newCard)
        console.log('newCard', newCard)
    }

    render() {
        const { store } = this.props
        const { cards, cardOrders } = store
        console.log('APP')
        return (
            <>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {cards && cards['ar00'] && (
                        <Card
                            key={cards['ar00'].name_short}
                            name={cards['ar00'].name}
                            front={cards['ar00'].open}
                            onClick={this.onClick(cards['ar00'])}
                            reverse={cards['ar00'].reverse}
                        />
                    )}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {cards && cardOrders && cardOrders.map(key => {
                        const c = cards[key]
                        return (
                            <Card
                                key={c.name_short}
                                name={c.name}
                                front={c.open}
                                onClick={this.onClick(c)}
                                reverse={c.reverse}
                            />
                        )
                    })}
                </div>
            </>
        )
    }
}

export default App
