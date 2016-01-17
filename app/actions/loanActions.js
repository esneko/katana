import * as types from '../constants/actionTypes'

export function setAmount(event) {
  return { type: types.SET_AMOUNT, val: +event.target.value }
}
export function setTerm(event) {
  return { type: types.SET_TERM, val: +event.target.value }
}
export function setRate(event) {
  return { type: types.SET_RATE, val: +event.target.value }
}
export function addLoan(val) {
  return { type: types.ADD_LOAN, val }
}
export function editLoan(idx) {
  return { type: types.EDIT_LOAN, idx }
}
export function deleteLoan(idx) {
  return { type: types.DELETE_LOAN, idx }
}
