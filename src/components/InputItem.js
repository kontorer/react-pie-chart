import React, {useState, useEffect, useContext} from 'react'

import {Context} from '../ListContext'


export default function InputItem(props) {
	const {title, amount, id} = props

	const {updateList, editItem} = useContext(Context)

	const validateField = e => {
		const {name, value} = e.target
		if(value === "") {
			e.target.classList.add("warning") 
		}
		else if(name === "amount" && isNaN(parseInt(value, 10))) {
			console.log(5)
			e.target.focus()	
		}
	}

	const handleUpdate = e => {
		updateList(e.target.value)
	}

	return (
		<form>
			<input 
				type="text" 
				name="title" 
				value={title} 
				onChange={e => editItem(e, id)} 
				placeholder="Title"
				onFocus={e => e.target.classList.remove("warning")}
				onBlur={e => validateField(e)}
			/>
			<input 
				type="text" 
				name="amount" 
				value={amount} 
				onChange={e => editItem(e, id)} 
				placeholder="Amount"
				onFocus={e => e.target.classList.remove("warning")}
				onBlur={e => validateField(e)}
			/>
		</form>
	)
}