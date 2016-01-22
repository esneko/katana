import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const composeStoreWithMiddleware = applyMiddleware(
    promiseMiddleware()
  )(createStore)
  return composeStoreWithMiddleware(rootReducer, initialState)
}
