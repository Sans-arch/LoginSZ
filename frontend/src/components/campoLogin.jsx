import React from 'react'
import ReactDOM from 'react-dom'

// Importando estilo
import '../styles/campoLogin.css'

export default props => (
    <div className="login-form">
        <h1 id="headerLogin">Login</h1>
        <form>
            <label htmlFor="inputName" id="labelNome">Nome </label>
            <input 
                type="text"
                id="inputName"
                name="name"
                placeholder="Digite seu nome..."
            />
            <br></br>
            <label htmlFor="inputPassword" id="labelSenha"> Senha </label>
            <input
                type="password"
                id="inputPassword"
                name="password"
                placeholder="Digite sua senha..."
            />
            <br></br>
            <button type="submit" id="enviar">Logar</button>
        </form>
    </div>
)

