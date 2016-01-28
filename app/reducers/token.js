import {SET_TOKEN} from '../constants/actionTypes'
import {Record} from 'immutable'

const InitialState = Record({
  username: '',
  password: '',
  token: '',
  loggedIn: false
})

const initialState = new InitialState

const token = (state = initialState, action) => {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  switch (action.type) {
    case SET_TOKEN: {
      const {name, value} = action.payload
      return state.set(name, value)
    }
    default:
      return state
  }
}

export default token
