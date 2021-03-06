import React from 'react'

export default function PiePiece(props) {
	const {startX, startY, endX, endY, largeArc, color, title, amount} = props.data
	
	// get the middle point of polyline
	const getCen = (startx, starty, endx, endy, largearc, length) => {
		const [abx, aby] = largearc ? [-(startx + endx), -(starty + endy)] : [(startx + endx), (starty + endy)]
		const abLen = Math.sqrt(abx*abx + aby*aby)
		const ratio = length / abLen
		const [acx, acy] = [abx*ratio, aby*ratio]
		return [acx, acy]
	}
	
	const [cenX, cenY] = getCen(startX, startY, endX, endY, largeArc, 1.3)

	// get full polyline attributes
	const polyValue = cenY > 0 ? `0,0 ${cenX},${cenY} ${cenX},${cenY+0.7}` : `0,0 ${cenX},${cenY} ${cenX},${cenY-0.7}`

	const pieceName = title ? title.charAt(0).toUpperCase() + title.slice(1) : amount

	return (
		<>
			<path 
				d={`M ${startX} ${startY} A 1 1 0 ${largeArc} 1 ${endX} ${endY} L 0 0`} 
				key={startX} 
				fill={color}
			>
					<title>{pieceName}</title>
			</path>
			<polyline points={polyValue} stroke={color} fill="none" strokeWidth="0.015" />
			<text x={cenX} y={cenY > 0 ? cenY : cenY - 0.7} transform={`rotate(90 ${cenX} ${cenY > 0 ? cenY : cenY - 0.7}) translate(0 -0.05)`} style={{color: "white", fontSize: 0.15}}>{pieceName}</text>
		</>
	)
}

