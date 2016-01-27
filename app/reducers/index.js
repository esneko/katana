import {combineReducers} from 'redux'
import lambda from './lambda'
import payday from './payday'

const rootReducer = combineReducers({
  lambda,
  payday
})

export default rootReducer
