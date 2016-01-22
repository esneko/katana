import React from 'react'
import Login from '../components/login'

export default ({token, dispatch}) => {
  return (
    <Login {...token} />
  )
}
