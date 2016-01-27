import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import {browserHistory} from 'react-router'
import routes from './routes'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
)
