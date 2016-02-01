import {combineReducers} from 'redux'
import lambdaReducer from './lambda'
import calculus from './calculus'
import payday from './payday'
import token from './token'

const rootReducer = lambdaReducer(
    combineReducers({
      calculus,
      payday,
      token
    })
)

export default rootReducer
