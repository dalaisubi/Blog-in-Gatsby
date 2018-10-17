import React from 'react'
import { Link } from 'gatsby'

const Menu = () => {
	return <div	>
		<ul 
			style={{
				listStyle: 'none',
				display: 'flex',

			}}
		>
			<li>
				<Link to='/' className="link padding-right">
		          Home
		        </Link>
			</li>
			<li>
				<Link to='/about' className="link padding-right">About</Link>
			</li>
			<li>
				<Link to='/contact' className="link padding-right">Contact</Link>
			</li>
			<li>
				<Link to='/blog' className="link">Blog</Link>
			</li>
			
		</ul>	

	</div>
}

export default Menu