import {ADD_LOAN, EDIT_LOAN, DELETE_LOAN} from '../constants/actionTypes'

export function addLoan(val) {
  return {
    type: ADD_LOAN,
    val
  }
}
export function editLoan(idx) {
  return {
    type: EDIT_LOAN,
    idx
  }
}
export function deleteLoan(idx) {
  return {
    type: DELETE_LOAN,
    idx
  }
}
