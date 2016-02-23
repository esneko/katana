import React from 'react'
import {Link} from 'react-router'
import styles from '../styles/layouts/menu.css'

export default () =>
  <header className={styles.menu}>
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
