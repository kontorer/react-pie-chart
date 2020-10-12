import React, {useContext} from 'react'

import {Context} from '../ListContext'


export default function InputItem(props) {
	const {title, amount, id} = props

	const {editItem, removeItem} = useContext(Context)

	const validateField = e => {
		const {name, value} = e.target
		if(value === "") {
			e.target.classList.add("warning") 
		}
		if(name === "amount" && isNaN(parseInt(value, 10))) {
			e.target.value = 0
		}
	}

	const handleRemove = (e, id) => {
		e.preventDefault()
		removeItem(id)
	}

	return (
		<form>
			<input 
				type="text" 
				maxLength="20"
				name="title" 
				value={title} 
				onChange={e => editItem(e, id)} 
				placeholder="Title"
				onFocus={e => e.target.classList.remove("warning")}
				onBlur={e => validateField(e)}
			/>
			<input 
				type="number" 
				min="0"
				name="amount" 
				value={amount} 
				onChange={e => editItem(e, id)} 
				placeholder="Amount"
				onFocus={e => e.target.classList.remove("warning")}
				onBlur={e => validateField(e)}
			/>
			<input 
				className="remove-button"
				type="submit" 
				value="remove"
				onClick={e => handleRemove(e, id)}
			/>
		</form>
	)
}