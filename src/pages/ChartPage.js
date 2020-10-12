import React, {useState, useContext, useEffect} from 'react'

import PiePiece from '../components/PiePiece'
import {Context} from '../ListContext'

export default function ChartPage() {
	const [pies, setPies] = useState([])
	const {items, parseAmounts} = useContext(Context)

	// additional input validation
	useEffect(() => {
		parseAmounts()
	}, [])

	useEffect(() => {
		getPieces()
	}, [items])

	const getPieces = () => {
		const totalSum = items.reduce((acc, i) => {
			return acc + parseInt(i.amount)
		}, 0)

		let acc = 0
		const pieces = items.map(item => {
			const {title, amount, color} = item

			if(amount == 0) {
				return ""
			}

			const [startX, startY] = getCoordinates(acc, totalSum)
			acc += amount
			const [endX, endY] = getCoordinates(acc, totalSum)

			const largeArc = totalSum / amount > 2 ? 0 : 1

			return <PiePiece key={color} data={{startX, startY, endX, endY, largeArc, color, title, amount}} />
		})
		setPies(pieces)
	}

	const getCoordinates = (value, total) => {
		const percent = value / total
		const x = Math.cos(2 * Math.PI * percent)
		const y = Math.sin(2 * Math.PI * percent)
		return [x,y]
	}

	return (
		<div className="chart-page page">		
			<h1>ChartPage</h1>

			<svg viewBox="-2 -2 4 4" style={{transform: "rotate(-90deg)"}}>
				{pies}
			</svg>

		</div>
	)
}