import {combineReducers} from 'redux'
import lambdaReducer from './lambda'
import location from './location'
import calculus from './calculus'
import payday from './payday'
import token from './token'

const rootReducer = lambdaReducer(
    combineReducers({
      location,
      calculus,
      payday,
      token
    })
)

export default rootReducer
