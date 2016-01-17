import React from 'react'

export default ({actions, head, list, total, className}) => {
	return (
		<table className={className}>
			<thead>
				<tr>
					{head.map((v,i) => <th key={i}>{v}</th>)}
					<th></th>
				</tr>
			</thead>
			<tbody>
				{list.map((item,id) =>
					<tr key={id}>
						{Object.keys(item).map((i) => <td key={i}>{item[i]}</td>)}
						<td><a href="#" onClick={(e) => actions.editLoan(id)}>{"Extend"}</a></td>
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
}
