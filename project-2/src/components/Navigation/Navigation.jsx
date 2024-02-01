import React from 'react'
import logo from "/images/do-some-coding-logo.png"
import styles from "./Navigation.module.css"

function Navigation() {
	return (
		<div>
			<nav className={`${styles.navigation} container`}>
				<div>
					<img src={logo} alt='logo'/>
				</div>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</div>
)
}

export default Navigation