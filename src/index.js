import React from 'react'
import { render } from 'react-dom'

import App from './App'
import './style.css'
import store from './CardStore'

if (module.hot) module.hot.accept()

render(<App store={store} />, document.getElementById('app'))
