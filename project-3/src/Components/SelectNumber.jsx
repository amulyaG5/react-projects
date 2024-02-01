import styled from "styled-components"
const SelectNumber = ({selectedNumber, setSelectedNumber, error}) => {


  // step 1 :- the below one is just to create box with number using array and map so that the boxes arent written manually and we use loop 
	const listOfDiceNumberTotalIsSix = [1,2,3,4,5,6]


	// step2:= we will be using state now, we are using state now so that when the particular box is clicked we understand that the box as been pressed and we will be giving the background as black to know the particular box as been selected
	// console.log(selectedNumber)
	// 1 in usestate because the starting number is 1 here. even useState() empty can be written
	return (

		<NumberSelector>
                <p>{error}</p>
			<div className="main-container">
			
			{listOfDiceNumberTotalIsSix.map((value,index)=> (<Box 
			isSelected = {value === selectedNumber}
			
			
			onClick={() => setSelectedNumber(value)} key={index}>{value}</Box>))}

			
			{/* <Box>
				1

			</Box>
			<Box>
				2

			</Box>
			<Box>
				3

			</Box>
			<Box>
				4

			</Box>
			<Box>
				5

			</Box>
			<Box>
				6

			</Box> */}  

			{/* the above method is written manually instead of it write arrya method for the above short cut way */}


		</div>

		<p>Select Number</p>
		</NumberSelector>
		
	)
}

export default SelectNumber


const Box = styled.div`
height:72px;
width:72px;
border: 1px solid #000;
display:grid;
place-items: center;
font-size:24px;
fontweight:700;
background-color : ${(props) => props.isSelected ? "black" : "white"};
color : ${(props) => props.isSelected ? "white" : "black"}





`


const NumberSelector = styled.div

`
display:flex;
flex-direction : column;
align-items: end;	
  
  .main-container{
		display: flex;
		gap:24px;
	}
p{
	color: #000;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}


`