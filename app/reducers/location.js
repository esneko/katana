import {NAVIGATE} from '../constants/actionTypes'
import si from 'seamless-immutable'

const initialState = si({})

export default (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE:
      return state.merge(action.location)
    default:
      return state
  }
}
