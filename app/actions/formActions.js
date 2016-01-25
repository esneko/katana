import {FIELD_CHANGE} from '../constants/actionTypes'

export function fieldChange(name, value) {
  return {
    type: FIELD_CHANGE,
    payload: {name, value}
  }
}
