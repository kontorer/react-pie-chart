import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider(props) {
	const [items, setItems] = useState([])

	const addItem = () => {
		const id = new Date().valueOf()
		const color = `rgb(${Math.random() * 250}, ${Math.random() * 250}, ${Math.random() * 250})`
		setItems(prev => [...prev, {title: "", amount: 0, id, color}])
	}

	const editItem = (e, id) => {
		const {name, value} = e.target
		const upd = items.map(el => {
			if(el.id === id){
				el[name] = value
			}
			return el
		})
		setItems(upd)
	}

	const removeItem = (id) => {
		const upd = items.filter(item => item.id !== id)
		setItems(upd)
	}

	const parseAmounts = () => {
		const parsed = items.map(item => {
			return isNaN(parseInt(item.amount)) ? {...item, amount: 0} : {...item, amount: Math.abs(parseInt(item.amount))}
		})
		setItems(parsed)
	}

	return (
		<Context.Provider value={{items, editItem, addItem, parseAmounts, removeItem}}>
			{props.children}
		</Context.Provider>
	)
}

export {ContextProvider, Context}