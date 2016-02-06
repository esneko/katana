import React, {PropTypes as T} from 'react'
import pure from 'recompose/pure'
import TextInput from './form/fields/textInput'

const LoginForm = ({setField, requestLogin, email, pass}) => {
  const onSubmit = event => {
    event.preventDefault()
    requestLogin({email, pass})
  }
  return (
    <form onSubmit={onSubmit}>
      <TextInput
          placeholder='Email'
          store="token"
          name='username'
          value={email}
          setField={setField}
      />
      <TextInput
          placeholder='Password'
          store="token"
          name='password'
          value={pass}
          setField={setField}
      />
      <button type='submit'>{"Login"}</button>
    </form>
  )
}

LoginForm.propTypes = {
  setField: T.func.isRequired,
  requestLogin: T.func.isRequired,
  email: T.string.isRequired,
  pass: T.string.isRequired
}

export default pure(LoginForm)
