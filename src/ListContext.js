import React, {useState} from "react"


const Context = React.createContext()

function ContextProvider(props) {
	const [items, setItems] = useState([{title: "apples", value: 24}, {title: "oranges", value: 8}])

	const updateList = (c) => {
		console.log("update", c)
	}

	return (
		<Context.Provider value={{items, updateList}}>
			{props.children}
		</Context.Provider>
	)
}

export {ContextProvider, Context}