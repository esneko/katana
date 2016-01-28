import React from 'react'
import {Link} from 'react-router'

export default () =>
  <header className="main-header">
    <nav>
      <ul>
        <li>
          <Link to={{pathname: '/'}}>{"Home"}</Link>
        </li>
        <li>
          <Link to={{pathname: '/profile'}}>{"Profile"}</Link>
        </li>
        <li>
          <Link to={{pathname: '/login'}}>{"Login"}</Link>
        </li>
      </ul>
    </nav>
  </header>
