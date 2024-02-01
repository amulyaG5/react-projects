import React from 'react'
import ContactHeader from "./components/ContactHeader/ContactHeader"
import ContactForm from "./components/ContactForm/ContactForm"
import Navigation from "./components/Navigation/Navigation"
import "./App.css";

const App = () => {
	return (
		<div>
			<Navigation />
			<main className='main-container'>
				<ContactHeader />
				<ContactForm />

			</main>

		</div>
	)
}

export default App