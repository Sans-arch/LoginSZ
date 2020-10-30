import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import Menu from '../template/menu'

//Importando estilo
import '../styles/App.css'

export default props => (
    <div>
        <Menu />
        <Routes />
    </div>
)