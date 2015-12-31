import React from 'react'
import Table from './table'

export default ({actions, loans}) => {
  const due = (date, days) => new Date(date + days * 864e5)
    .toISOString()
    .slice(0, 10)

  const list = loans.map(loan => {
    return {
      amount: loan.amount,
      interest: loan.interest,
      total: loan.amount + loan.interest,
      due: due(loan.date, loan.term)
    }
  })

  const total = loans.reduce((sum, loan) => {
    return {
      balanceTotal: sum.balanceTotal + loan.amount,
      interestTotal: sum.interestTotal + loan.interest,
      loanTotal: sum.loanTotal + loan.amount + loan.interest
    }
  }, {
    balanceTotal: 0,
    interestTotal: 0,
    loanTotal: 0
  })

  return (
    <div className={"profile"}>
      <h2>{"Payments summary"}</h2>
      <Table
          className='loans'
          head={['Balance', 'Interest', 'Total', 'Due']}
          list={list}
          total={total}
          actions={actions}
      />
    </div>
  )
}
