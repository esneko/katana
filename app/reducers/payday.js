import {ADD_LOAN, EDIT_LOAN, DELETE_LOAN} from '../constants/actionTypes'
import si from 'seamless-immutable'

const initialState = si({
  loans: []
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOAN:
      return {
        ...state,
        loans: [...state.loans, action.val]
      }
    case EDIT_LOAN:
      return {
        ...state,
        loans: state.loans.map((loan, id) =>
          id === action.idx ? {
            ...loan,
            interest: Math.round(loan.interest * 1.5),
            term: loan.term + 7
          } :
          loan
        )
      }
    case DELETE_LOAN:
      return state.loans.filter(loan =>
        loan.id !== action.idx
      )
    default:
      return state
  }
}
