import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import debounce from 'redux-debounced'
import promiseMiddleware from 'redux-promise-middleware'
import immutableMiddleware from 'redux-immutable-state-invariant'
import logger from 'redux-diff-logger'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const middleware = process.env.NODE_ENV !== 'production' ?
  [thunk, debounce, promiseMiddleware(), immutableMiddleware(), logger] :
  [thunk, debounce, promiseMiddleware()]

  const composeStoreWithMiddleware = compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)
  return composeStoreWithMiddleware(rootReducer, initialState)
}
