import styled from "styled-components"

const Rules = () => {
	return (
		<RulesContainer>
		<h2>How to play dice game</h2>


			<div className='text'>


				<p>Select any number</p>
				<p>Click on dice image</p>
				<p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
				<p>if you get wrong guess then 2 point will be dedcuted</p>

			</div>

			</RulesContainer>
	)
}

export default Rules


const RulesContainer = styled.div`
background: #FBF1F1;
padding:20px;
max-width:800px;
margin: 0 auto;
margin-top:40px;
border-radius:10px;


h2{
	color: #000;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;	
}


.text{
	color: #000;
	font-family: Poppins;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
}


`