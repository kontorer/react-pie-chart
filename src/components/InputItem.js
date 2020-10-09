import React, {useState, useEffect, useContext} from 'react'

import {Context} from '../ListContext'


export default function InputItem(props) {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')

	const {updateList} = useContext(Context)


	useEffect(() => {
		if(props) {
			setTitle(props.t)
			setAmount(props.a)
		}
	}, [props])

	const handleChange = e => {
		e.target.name === "title" ?
			setTitle(e.target.value) :
			setAmount(e.target.value)
	}

	const handleUpdate = e => {
		updateList(e.target.value)
	}

	return (
		<form>
			<input 
				type="text" 
				name="title" 
				value={title || ''} 
				onChange={handleChange} 
				placeholder="Title"
				onBlur={handleUpdate}
			/>
			<input 
				type="text" 
				name="amount" 
				value={amount || ''} 
				onChange={handleChange} 
				placeholder="Amount"
				onBlur={handleUpdate}
			/>
		</form>
	)
}