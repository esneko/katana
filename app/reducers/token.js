import {SET_FIELD} from '../constants/actionTypes'
import {Record} from 'immutable'

const InitialState = Record({
  username: '',
  password: '',
  loggedIn: false
})

const initialState = new InitialState

const token = (state = initialState, action) => {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {
    case SET_FIELD: {
      const {name, value} = action.payload
      return state.set(name, value)
    }
    default:
      return state
  }
}

export default token
