import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './containers/app'
import Auth from './containers/auth'
import Profile from './containers/profile'

export default (
  <Route path="/">
    <IndexRoute component={App} />
    <Route component={Auth} path="login" />
    <Route component={Profile} path="profile" />
  </Route>
  )
