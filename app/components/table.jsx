import React from 'react'
import pure from 'recompose/pure'

export default pure(({actions, head, list, total, className}) => {
  const extend = id => event => {
    event.preventDefault()
    actions.editLoan(id)
  }
  return (
		<table className={className}>
			<thead>
				<tr>
					{head.map((v,i) => <th key={i}>{v}</th>)}
					<th></th>
				</tr>
			</thead>
			<tbody>
				{list.map((item,idx) =>
					<tr key={idx}>
						{Object.keys(item).map((i) => <td key={i}>{item[i]}</td>)}
						<td><a href="#" onClick={extend(idx)}>{"Extend"}</a></td>
					</tr>
				)}
			</tbody>
			<tfoot>
				<tr>
					{Object.keys(total).map((i) => <td key={i}>{total[i]}</td>)}
					<td></td>
					<td></td>
				</tr>
			</tfoot>
		</table>
	)
})
