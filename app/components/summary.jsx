import React from 'react'
import R from 'ramda'
import pure from 'recompose/pure'
import Table from './table'

export default pure(({actions, loans}) => {
  const due = (date, days) => new Date(date + days * 864e5)
    .toISOString()
    .slice(0, 10)

  const list = R.map(
    loan => ({
      amount: loan.amount,
      interest: loan.interest,
      total: loan.amount + loan.interest,
      due: due(loan.date, loan.term)
    }),
    loans
  )

  const total = R.reduce(
    (sum, loan) => ({
      balanceTotal: sum.balanceTotal + loan.amount,
      interestTotal: sum.interestTotal + loan.interest,
      loanTotal: sum.loanTotal + loan.amount + loan.interest
    }),
    {
      balanceTotal: 0,
      interestTotal: 0,
      loanTotal: 0
    },
    loans
  )

  return (
    <div className={"profile"}>
      <h2>{"Payments summary"}</h2>
      <Table
          className='summary'
          head={['Balance', 'Interest', 'Total', 'Due']}
          list={list}
          total={total}
          actions={actions}
      />
    </div>
  )
})
