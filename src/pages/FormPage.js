import React, {useContext} from 'react'

import InputItem from '../components/InputItem'
import {Context} from '../ListContext'

export default function FormPage() {
	const {items, addItem} = useContext(Context)

	const list = items.map((item, i) => <InputItem key={item.id} id={item.id} title={item.title} amount={item.amount} />).reverse()

	return (
		<div className="form-page page">
			<h1>Positions List</h1>
			<button onClick={e => addItem()}>Add Position</button>
			<div>
				{list.length > 0 ? list : <p>The list is empty</p>}
			</div>
		</div>
	)
}