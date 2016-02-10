import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import {browserHistory} from 'react-router'
import {runSaga, storeIO} from 'redux-saga'
import configureStore from './store'
import rootSaga from './sagas'
import routes from './routes'

const store = configureStore()

runSaga(
  rootSaga(store.getState),
  storeIO(store),
  action => Promise.resolve(1).then(() => store.dispatch(action))
)

//https://github.com/rackt/react-router-redux/issues/257
browserHistory.listen(location => store.dispatch({type: 'NAVIGATE', location}))

render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
)
