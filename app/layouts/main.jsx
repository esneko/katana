import React from 'react'
import Menu from './menu'
import styles from '../styles/layouts/main.css'

export default ({children}) => {
  return (
    <div className={styles.container}>
      <Menu/>
      {children}
    </div>
  )
}
