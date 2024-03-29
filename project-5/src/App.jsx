 import React from 'react'
import NavBar from './Components/NavBar'
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs} from 'firebase/firestore'

import { FiSearch } from "react-icons/fi";
import { useState } from 'react';
import { useEffect } from 'react';
import {db} from './Config/firebase'


const App = () => {

	const [contact, setContact] = useState([])

	useEffect(()=>{
		const getContacts = async () => {
			try {

				const contactsCollection = collection(db,"contacts")
				const contatcsSnapshot = await getDocs(contactsCollection)
				 const contactLists = contatcsSnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
				})
				setContact(contactLists)
				
			} catch (error) {
				
			}

		}
		getContacts()
			},[])
	
	return (
		<div className="mx-auto max-w-[370px]">
			<NavBar/>

			<div className='flex gap-3'>
			<div className="flex relative items-center flex-grow" >
			<FiSearch  className='text-white text-3xl absolute ml-2 '/>
				<input type="text" className="bg-transparent border border-white  rounded-md h-10 flex-grow text-white px-9" placeholder='Search Contact' />
			</div>
			<div className='text-5xl text-white cursor-pointer '>
			<AiFillPlusCircle />

			</div>
		

			</div>
		</div>
	)
}

export default App