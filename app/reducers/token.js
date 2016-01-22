import {FIELD_CHANGE, LOGGED_IN} from '../constants/actionTypes'
import {Record} from 'immutable';

const InitialState = Record({
  username: '',
  password: '',
  loggedIn: false
})

const initialState = new InitialState;

const token = (state = initialState, action) => {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {
    case FIELD_CHANGE: {
      const {name, value} = action.payload
      return state.set(name, value)
    }
    case LOGGED_IN: {
      return state.set('isLoggedIn', action.isLoggedIn)
    }
    default:
      return state;
  }
}

export default token
