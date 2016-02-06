import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Home from './containers/home'
import Auth from './containers/auth'
import Profile from './containers/profile'
import Root from './layouts/root'

export default (
  <Route component={Root} path="/">
    <IndexRoute component={Home}/>
    <Route component={Auth} path="login"/>
    <Route component={Profile} path="profile"/>
  </Route>
  )
