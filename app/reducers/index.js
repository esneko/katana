import {combineReducers} from 'redux'
import lambda from './lambda'
import token from './token'

const rootReducer = combineReducers({
  lambda,
  token
})

export default rootReducer
