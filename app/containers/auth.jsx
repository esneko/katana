import React from 'react'
import Login from '../components/login'

export default ({token}) => {
  return (
    <Login {...token} />
  )
}
