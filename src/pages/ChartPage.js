import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'


import PiePiece from '../components/PiePiece'
import {Context} from '../ListContext'

export default function ChartPage() {
	const [pies, setPies] = useState([])
	const [render, setRender] = useState(false)
	const {items, parseAmounts} = useContext(Context)

	// additional input validation
	useEffect(() => {
		parseAmounts()
		setRender(true)
	}, [])

	// prevents svg errors, but causes a little loading glitch
	useEffect(() => {
		if(render) {
			getPieces()
		}
	}, [items, render])


	const getPieces = () => {

		const totalSum = items.reduce((acc, i) => {
			return acc + parseInt(i.amount)
		}, 0)

		let accum = 0

		const pieces = items.map(item => {

			const {title, amount, color} = item

			if(amount === 0 || typeof amount !== "number") {
				return ""
			}

			const [startX, startY] = getCoordinates(accum, totalSum)
			accum += amount
			const [endX, endY] = getCoordinates(accum, totalSum)

			const largeArc = totalSum / amount >= 2 ? 0 : 1

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
			<h1>Pie Chart</h1>

			{pies.length > 0 ?
				<svg viewBox="-2 -2 4 4" style={{transform: "rotate(-90deg)"}}>{pies}</svg> :
				<Link to="/"><div className="empty-message">Please, input some data</div></Link>
			}

		</div>
	)
}