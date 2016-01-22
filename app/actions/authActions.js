import {FIELD_CHANGE, LOGGED_IN} from '../constants/actionTypes'

export function onFieldChange(name, value) {
  console.log(name, value)
  return {
    type: FIELD_CHANGE,
    payload: {name, value}
  }
}

function sendAuthentication(authHeaders) {
  console.log(authHeaders)
  setTimeout(() => {
    return {
      type: LOGGED_IN,
      payload: true
    }
  }, 5000)
}

async function processLogin({email, pass, dispatch}) {
  const authHeaders = {
    username: email,
    password: pass
  }
  await dispatch(sendAuthentication(authHeaders))
}

export function login({email, pass}) {
  return ({dispatch}) => ({
    type: 'AUTH_LOGIN',
    payload: {
      promise: processLogin({email, pass, dispatch})
    }
  })
}
