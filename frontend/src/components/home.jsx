import React, { Component, StyleSheet } from 'react'
import App from '../main/App'
import ReactDOM from 'react-dom'
import '../styles/sair.css'


class Home extends Component {

    render() {

        return (    
            <div>
                <center><h1>Bem-vindo Neymar!</h1></center>
                <a href="/#login"><button id="sair">SAIR</button></a>
            </div>
        )
    }
}



export default Home