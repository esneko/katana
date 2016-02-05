import React from 'react'
import connectState from '../utils/connectState'
import Login from '../components/login'

const app = ({...props}) => <Login {...props}/>
export default connectState({
  state: {
    email: ['token', 'username'],
    pass: ['token', 'password']
  },
  actions: {
    setField: ['form', 'setField'],
    requestLogin: ['auth', 'requestLogin']
  }
})(app)
