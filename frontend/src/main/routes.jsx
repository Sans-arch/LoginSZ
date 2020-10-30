import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import CampoLogin from '../components/campoLogin'
import CampoCadastro from '../components/campoCadastro'
import Home from '../components/home'

export default props => (
    <Router history={hashHistory}>
        <Route path='/login' component={CampoLogin} />
        <Route path="/cadastro" component={CampoCadastro} />
        <Route path="/home" component={Home} />
        <Redirect from='*' to="/login" />
    </Router>
)