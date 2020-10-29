import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/App'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import reducers from './main/reducers'
import {Provider} from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('app')
)