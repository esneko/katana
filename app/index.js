import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import si from 'seamless-immutable'
import configureStore from './store'
import routes from './routes'
import styles from './styles/base.css'

const initialState = si(window.__INITIAL_STATE__)
const store = configureStore(initialState)

//https://github.com/rackt/react-router-redux/issues/257
browserHistory.listen(location => store.dispatch({
  type: 'NAVIGATE',
  location
}))

render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
)
