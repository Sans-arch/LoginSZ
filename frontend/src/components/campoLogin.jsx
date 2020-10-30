import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Importando estilo
import '../styles/campoLogin.css'

export default class CampoLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.verDigito = this.verDigito.bind(this)
        this.entrar = this.entrar.bind(this)
    }

    verDigito(evento, nome) {
        if(nome === 'name'){
            this.setState({
                email: evento.target.value
            }) 
        } else if(nome === 'password') {
            this.setState({
                password: evento.target.value
            })
        }
    }

    entrar() {
        if(this.state.email === 'neymar' && this.state.password === '1234' ){
            alert('Parabéns, você foi logado com sucesso!')
        } else {
            alert('Usuário ou senha incorretos!')
        }
    }

    render() {

        console.log(this.state.email)
        console.log(this.state.password)

        return (
            <div className="login-form">
                <h1 id="headerLogin">Login</h1>
                <form>
                    <label htmlFor="inputName" id="labelNome">Nome </label>
                    <input 
                        type="text"
                        id="inputName"
                        name="name"
                        value={this.state.email}
                        onChange={(evento) => this.verDigito(evento, 'name')}
                        placeholder="Digite seu nome..."
                    />
                    <br></br>
                    <label htmlFor="inputPassword" id="labelSenha"> Senha </label>
                    <input
                        type="password"
                        id="inputPassword"
                        name="password"
                        value={this.state.password}
                        onChange={(evento) => this.verDigito(evento, 'password')}
                        placeholder="Digite sua senha..."
                    />
                    <br></br>


                    <button
                     type="submit"
                     onClick={this.entrar} 
                     id="enviar">
                         Logar
                     </button>
                </form>
            </div>
        )
    }
} 