import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from '../main/App'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Importando estilo
import '../styles/campoCadastro.css'


export default class CampoCadastro extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            password: '',
            conferir: '',
            email: '',
            telefone: ''
        }
        this.verDigito = this.verDigito.bind(this)
    }

    verDigito(evento, name) {
        if(name === 'name'){
            this.setState({
                name: evento.target.value
            }) 
        } else if(name === 'password') {
            this.setState({
                password: evento.target.value
            })
        } else if(name === 'conferir'){
            this.setState({
                conferir: evento.target.value
            })
        } else if(name === 'email'){
            this.setState({
                email: evento.target.value
            })
        } else if(name === 'telefone'){
            this.setState({
                telefone: evento.target.value
            })
        }
    }


    render() {

        console.log(this.state.name)
        console.log(this.state.password)
        console.log(this.state.conferir)
        console.log(this.state.email)
        console.log(this.state.telefone)


        return (
            <div className="login-form">
                <h1 id="headerLogin">Cadastro</h1>
                <form>
                    <label htmlFor="inputName" id="labelNome">Nome </label>
                    <input 
                        type="text"
                        id="inputName"
                        name="name"
                        value={this.state.name}
                        onChange={(evento) => this.verDigito(evento, 'name')}
                        required
                        placeholder="Cadastre o seu nome..."
                    />
                    <br></br>
                    <label htmlFor="inputPassword" id="labelSenha"> Senha </label>
                    <input
                        type="password"
                        id="inputPassword"
                        name="password"
                        value={this.state.password}
                        onChange={(evento) => this.verDigito(evento, 'password')}
                        required
                        placeholder="Cadastre sua senha..."
                    />
                    <br></br>
                    <label htmlFor="inputConfirmPassword" id="labelSenha"> Confirmar  </label>
                    <input
                        type="password"
                        id="inputConfirmPassword"
                        name="conferir"
                        value={this.state.conferir}
                        onChange={(evento) => this.verDigito(evento, 'conferir')}
                        required
                        placeholder="Confirme sua senha..."
                    />
                    <br></br>
                    <label htmlFor="inputEmail" id="labelEmail"> Email </label>
                    <input
                        type="text"
                        id="inputEmail"
                        name="email"
                        value={this.state.email}
                        onChange={(evento) => this.verDigito(evento, 'email')}
                        required
                        placeholder="Cadastre o seu email..."
                    />
                    <br></br>
                    <label htmlFor="inputTelefone" id="labelTelefone"> Telefone </label>
                    <input
                        type="text"
                        id="inputTelefone"
                        name="telefone"
                        value={this.state.telefone}
                        onChange={(evento) => this.verDigito(evento, 'telefone')}
                        required
                        placeholder="Cadastre o seu telefone..."
                    />
                    <br></br>
                    <button type="submit" id="enviar">Registrar</button>
                </form>
            </div>
        )
    }
}  