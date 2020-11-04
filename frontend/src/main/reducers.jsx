import { combineReducers} from 'redux'
import lucas from '../components/cadastroRedux'

const rootReducer = combineReducers({
    cadastro: lucas
})

export default rootReducer