import React, {useContext} from 'react'

import InputItem from '../components/InputItem'
import {Context} from '../ListContext'

export default function FormPage() {
	const {items, updateList} = useContext(Context)

	const handleClick = e => {
		e.preventDefault()
		updateList()
	}

	const list = items.map((item, i) => <InputItem key={i} t={item.title} a={item.value} />)

	return (
		<div className="form-page page">
			<h1>FormPage</h1>
			<button onClick={handleClick}>Add Position</button>
			<InputItem />
			<div>
				{list}
			</div>
		</div>
	)
}

//

// title
// button
// input row w/ 2 fields
// list
// list item - editable, deletable
// context update

// import React, {useContext} from "react"

// import {Context} from "../Context"
// import Form from "./Form"

// function InputTodo() {
// 	const {addItem} = useContext(Context)