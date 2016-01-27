import {SET_FIELD} from '../constants/actionTypes'

export function setField(name, value) {
  return {
    type: SET_FIELD,
    payload: {name, value}
  }
}
