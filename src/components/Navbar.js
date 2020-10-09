import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
	return (
		<div className="navbar">
			<Link to="/">Add</Link>
			<Link to="/view">View</Link>
		</div>
	)
}