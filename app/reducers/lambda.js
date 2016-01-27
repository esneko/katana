import {SET_FIELD} from '../constants/actionTypes'

const initialState = {
  amount: 400,
  term: 30,
  rate: 10
}

const lambda = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD: {
      const {name, value} = action.payload
      return {
        ...state,
        [name]: value
      }
    }
    default:
      return state;
  }
}

export default lambda
