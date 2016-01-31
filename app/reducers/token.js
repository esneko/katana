import {SET_TOKEN} from '../constants/actionTypes'
import si from 'seamless-immutable'

const initialState = si({
  username: '',
  password: '',
  token: '',
  loggedIn: false
})

const token = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      const {name, value} = action.payload
      return state.merge({
        [name]: value
      })
    }
    default:
      return state
  }
}

export default token
