import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const composeStoreWithMiddleware = compose(
    applyMiddleware(
      thunk,
      promiseMiddleware(),
      createLogger()
    ),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)
  return composeStoreWithMiddleware(rootReducer, initialState)
}
