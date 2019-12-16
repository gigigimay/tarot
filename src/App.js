import React from 'react'

import Card from './Card'
import api from './service'

class App extends React.Component {

    componentDidMount() {
        this.getCards()
    }

    getCards = async () => {
        const { data } = await api.get()
        const { cards } = data
        console.log('cards', cards)
    }

    render() {
        return (
            <>
                <Card />
            </>
        )
    }
}

export default App
