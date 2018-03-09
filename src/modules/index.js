import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import login from '../reducers/login'

export default combineReducers({
    routing: routerReducer,
    login
})