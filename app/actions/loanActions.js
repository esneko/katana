import * as types from '../constants/actionTypes'

export function setAmount(val) {
  return { type: types.SET_AMOUNT, val }
}
export function setTerm(val) {
  return { type: types.SET_TERM, val }
}
export function setRate(val) {
  return { type: types.SET_RATE, val }
}
export function addLoan(val) {
  return { type: types.ADD_LOAN, val }
}
export function editLoan(val) {
  return { type: types.EDIT_LOAN, val }
}
export function deleteLoan(val) {
  return { type: types.DELETE_LOAN, val }
}
