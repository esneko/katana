import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Main from './containers/main'
import Auth from './containers/auth'
import Profile from './containers/profile'
import Root from './layouts/root'

export default (
  <Route component={Root} path="/">
    <IndexRoute component={Main}/>
    <Route component={Auth} path="login"/>
    <Route component={Profile} path="profile"/>
  </Route>
  )
