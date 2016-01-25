import {REQUEST_LOGIN} from '../constants/actionTypes'

function authenticate(headers) {
  return new Promise(resolve => setTimeout(resolve, 3000))
    .then(() => ({token: 'ok'}))
}

async function requestLogin({email, pass, dispatch}) {
  const headers = {
    username: email,
    password: pass
  }
  const {token} = await authenticate(headers)
  console.log(token)

  dispatch({
    type: FIELD_CHANGE,
    payload: {name: 'loggedIn', value: true}
  })
}

export function login({email, pass}) {
  return dispatch => dispatch({
    type: REQUEST_LOGIN,
    payload: {
      promise: requestLogin({email, pass, dispatch})
    }
  })
}
