import React from 'react'
import pure from 'recompose/pure'

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
    <section className={"payable"}>
      <div className={"one-half"}>
        <label>{"Balance"}</label>
        <span>{amount}</span>
      </div>
      <div className={"one-half"}>
        <label>{"Interest"}</label>
        <span>{interest(amount)}</span>
      </div>
      <div className={"one-half"}>
        <label>{"Total"}</label>
        <span className={"total"}>{total(amount, interest)}</span>
      </div>
      <div className={"one-half"}>
        <a href="#" onClick={onClick}>{"Apply"}</a>
      </div>
    </section>
  )
})
