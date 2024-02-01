import { useState } from "react"
import StartGame from "./Components/StartGame"
import GamePlay from "./Components/GamePlay"



function App() {

	const [isGameStarted, setGameStarted] = useState(false)    
	// default value to be false as toggle button will be off in the beginning and in order to make it on or off its up to us

	const toggleButton = () => {

		setGameStarted((gameOn)=> !gameOn)
		// here gameOn means on and !gameon means off


	}
  return <>

	{isGameStarted ? <GamePlay/> : <StartGame  toggle={toggleButton}/> }
	
	</>



   

}

export default App








