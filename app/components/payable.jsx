import React from 'react'
import pure from 'recompose/pure'
import styles from '../styles/components/payable.css'

export default pure(({addLoan, amount, term, rate}) => {
  const interest = (n) => Math.round(n * rate / 100)
  const total = (n, f) => n + f(n)
  const loan = {
    amount: amount,
    term: term,
    interest: interest(amount),
    date: Date.now()
  }
  const onClick = event => {
    event.preventDefault()
    addLoan(loan)
  }
  return (
    <section className={styles.payable}>
      <div>
        <label>{"Balance"}</label>
        <span>{amount}</span>
      </div>
      <div>
        <label>{"Interest"}</label>
        <span>{interest(amount)}</span>
      </div>
      <div>
        <label>{"Total"}</label>
        <span className={styles.total}>{total(amount, interest)}</span>
      </div>
      <div>
        <a href="#" onClick={onClick}>{"Apply"}</a>
      </div>
    </section>
  )
})
