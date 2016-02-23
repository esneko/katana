import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Root from '../layouts/main'
import {
  Home,
  Auth,
  Profile
} from '../containers'

export default (
  <Route component={Root} path="/">
    <IndexRoute component={Home}/>
    <Route component={Auth} path="login"/>
    <Route component={Profile} path="profile"/>
  </Route>
  )
