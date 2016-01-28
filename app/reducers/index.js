import {combineReducers} from 'redux'
import lambda from './lambda'
import payday from './payday'
import token from './token'

const rootReducer = combineReducers({
  lambda,
  payday,
  token
})

export default rootReducer
