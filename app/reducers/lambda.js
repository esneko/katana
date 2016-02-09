import {SET_FIELD} from '../constants/actionTypes'
import si from 'seamless-immutable'

const update = (state, {root, path, value}) => si({
  ...state,
  [root]: state[root].merge({[path]: value})
})

const handlers = {
  SET_FIELD: update
}

export default (scopedReducer) => (...args) => {
  const state = args[0]
  const action = args[1]
  return handlers[action.type] ?
    handlers[action.type](state, action.payload) :
    scopedReducer.apply(null, args)
}
