import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import CampoLogin from '../components/campoLogin'
import CampoCadastro from '../components/campoCadastro'

export default props => (
    <Router history={hashHistory}>
        <Route path='/login' component={CampoLogin} />
        <Route path="/cadastro" component={CampoCadastro} />
        <Redirect from='*' to="/login" />
    </Router>
)