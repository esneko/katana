import {SET_AMOUNT, SET_TERM, SET_RATE, ADD_LOAN, EDIT_LOAN, DELETE_LOAN} from '../constants/actionTypes'

const initialState = {
  amount: 400,
  term: 30,
  rate: 10,
  loans: []
}

const lambda = (state = initialState, action) => {
  switch (action.type) {
    case SET_AMOUNT:
      return {
        ...state,
        amount: action.val
      }
    case SET_TERM:
      return {
        ...state,
        term: action.val
      }
    case SET_RATE:
      return {
        ...state,
        rate: action.val
      }
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
        loan.id !== action.val.id
      )
    default:
      return state;
  }
}

export default lambda
