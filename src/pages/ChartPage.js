import React, {useState, useContext, useEffect} from 'react'

import {Context} from '../ListContext'

export default function ChartPage() {
	const [pies, setPies] = useState([])
	const {items, parseAmounts} = useContext(Context)

	//util
	const list = items.map((item, i) => <p key={i}>{item.title}: {item.amount}</p>).reverse()

	useEffect(() => {
		parseAmounts()
	}, [])

	useEffect(() => {
		// get 100% value
		const totalSum = items.reduce((acc, i) => {
			return acc + parseInt(i.amount)
		}, 0)

		// get every pie piece
		let acc = 0
		const pieces = items.map(item => {
			const {title, amount, color} = item
			// console.log(typeof amount)
			const [startX, startY] = getCoordinates(acc, totalSum)
			acc += amount
			console.log(acc)
			const [endX, endY] = getCoordinates(acc, totalSum)

			const largeArc = totalSum / amount > 2 ? 0 : 1

			return <path d={`M ${startX} ${startY} A 1 1 0 ${largeArc} 1 ${endX} ${endY} L 0 0`} key={startX} fill={color}><title>{title.charAt(0).toUpperCase() + title.slice(1)}</title></path>
		})
		console.log(pieces)
		setPies(pieces)

	}, [items])


	const getCoordinates = (value, total) => {
		const percent = value / total
		const x = Math.cos(2 * Math.PI * percent)
		const y = Math.sin(2 * Math.PI * percent)
		return [x,y]
	}

	return (
		<div className="chart-page page">		
			<h1>ChartPage</h1>
			{list}

			<svg viewBox="-1 -1 2 2" style={{transform: "rotate(-90deg)"}}>
				{pies}
			</svg>
		</div>
	)
}
