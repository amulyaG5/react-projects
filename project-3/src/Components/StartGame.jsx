import styled from "styled-components"
import diceImage from "../assets/dice.png"
import { Button } from "../Styled/Button"


const Container = styled.div`
max-width:1180px;
display:flex;
margin:0 auto;
height:100vh;
align-items:center;

.content h1 {
	color: #000;
font-family: Poppins;
font-size: 96px;
font-style: normal;
font-weight: 700;
line-height: normal;
white-space:nowrap;
}

`






const StartGame = ({toggle}) => {
	return (

		<Container>
			<div>
			<img src={diceImage}/>


			</div>
			<div className="content">
				<h1>DICE GAME</h1>
				<Button onClick={toggle}>Play Now</Button>
	
			</div>

			

		</Container>

		
	)
}

export default StartGame