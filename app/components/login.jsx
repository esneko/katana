import React from 'react'
import connectState from '../utils/connectState'

const c = ({setField, login, email, pass}) => {
  const onChange = event => setField(event.target.name, event.target.value)
  const onSubmit = event => {
    event.preventDefault()
    login({email, pass})
  }
  return (
    <form onSubmit={onSubmit}>
      <input
          placeholder='Email'
          name='username'
          value={email}
          onChange={onChange}
      />
      <input
          placeholder='Password'
          name='password'
          value={pass}
          onChange={onChange}
      />
      <button type='submit'>{"Login"}</button>
    </form>
  )
}

export default connectState({
  state: {
    email: ['token', 'username'],
    pass: ['token', 'password']
  },
  actions: {
    fieldChange: ['form', 'setField'],
    login: ['auth', 'login']
  }
})(c)
