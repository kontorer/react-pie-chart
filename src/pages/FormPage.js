import React, {useContext, useEffect} from 'react'

import InputItem from '../components/InputItem'
import {Context} from '../ListContext'

export default function FormPage() {
	const {items, updateList, addItem, parseAmounts} = useContext(Context)

	const handleClick = e => {
		e.preventDefault()
		updateList()
	}

	const list = items.map((item, i) => <InputItem key={item.id} id={item.id} title={item.title} amount={item.amount} />).reverse()

	return (
		<div className="form-page page">
			<h1>FormPage</h1>
			<button onClick={e => addItem()}>Add Position</button>
			<div>
				{list}
			</div>
		</div>
	)
}