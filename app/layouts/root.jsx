import React from 'react'
import Menu from './menu'
//import '../../public/styles/app.scss'

export default ({children}) => {
  return (
    <div className={"container"}>
      <Menu/>
      {children}
    </div>
  )
}
