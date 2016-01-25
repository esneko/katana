import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const composeStoreWithMiddleware = applyMiddleware(
    thunk,
    promiseMiddleware()
  )(createStore)
  return composeStoreWithMiddleware(rootReducer, initialState)
}
