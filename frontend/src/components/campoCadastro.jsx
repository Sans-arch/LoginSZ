import React from 'react'
import ReactDOM from 'react-dom'
import App from '../main/App'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Importando estilo
import '../styles/campoCadastro.css'


const jesus =  props =>   
    (
    <div className="login-form">
        <h1 id="headerLogin">Cadastro</h1>
        <form>
            <label htmlFor="inputName" id="labelNome">Nome </label>
            <input 
                type="text"
                id="inputName"
                name="name"
                required
                placeholder="Cadastre o seu nome..."
            />
            <br></br>
            <label htmlFor="inputPassword" id="labelSenha"> Senha </label>
            <input
                type="password"
                id="inputPassword"
                name="password"
                required
                placeholder="Cadastre sua senha..."
            />
            <br></br>
            <label htmlFor="inputConfirmPassword" id="labelSenha"> Confirmar  </label>
            <input
                type="password"
                id="inputConfirmPassword"
                name="password"
                required
                placeholder="Confirme sua senha..."
            />
            <br></br>
            <label htmlFor="inputEmail" id="labelEmail"> Email </label>
            <input
                type="text"
                id="inputEmail"
                name="email"
                required
                placeholder="Cadastre o seu email..."
            />
            <br></br>
            <label htmlFor="inputTelefone" id="labelTelefone"> Telefone </label>
            <input
                type="text"
                id="inputTelefone"
                name="telefone"
                required
                placeholder="Cadastre o seu telefone..."
            />
            <br></br>
            <button type="submit" id="enviar">Registrar</button>
        </form>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators ({
    jesus
}, dispatch)

const mapStateToProps = state => ({
    neymar: state.cadastro.list
})

export default connect(mapStateToProps, mapDispatchToProps)(jesus)