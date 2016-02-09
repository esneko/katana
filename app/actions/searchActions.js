import {SET_FIELD} from '../constants/actionTypes'

export function setField(root, path, value) {
  return {
    type: SET_FIELD,
    payload: {root, path, value},
    meta: {
      debounce: {
        time: 3000
      }
    }
  }
}
