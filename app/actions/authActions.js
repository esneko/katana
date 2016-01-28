import {REQUEST_LOGIN, SET_TOKEN} from '../constants/actionTypes'

export function setToken(name, value) {
  return {
    type: SET_TOKEN,
    payload: {name, value}
  }
}

function authenticate(headers) {
  return new Promise(resolve => setTimeout(resolve, 3000))
    .then(() => ({
      type: SET_TOKEN,
      payload: {
        name: 'loggedIn',
        value: true
      }
    }))
}

async function processLogin({email, pass}) {
  const headers = {
    username: email,
    password: pass
  }
  return await authenticate(headers)
}

export function requestLogin({email, pass}) {
  return dispatch => dispatch({
    type: REQUEST_LOGIN,
    payload: {
      promise: processLogin({email, pass})
    }
  })
}
