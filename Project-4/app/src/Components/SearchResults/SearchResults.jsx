import styled from "styled-components"
import { BASE_URL, Container } from "../../App"
import { Button } from "../../App"
const SearchResults = (props) => {
	const {data} = props
  console.log(data);
	return (
<FoodContainer>
	<Container>

	<FoodCards>
  {data?.map(({name,image,text, price})=>(
	<FoodCard key={name}>
		<div className="food-image"> 
		<img src={BASE_URL + image}/>

		</div>
		<div  className="food-info">
			<div className="info">
				<h3>{name}</h3>
				<p>{text}</p>

			</div>
			<Button> ${price.toFixed(2)}</Button>
		</div>

	</FoodCard>

	))}
</FoodCards>

	</Container>


		

		</FoodContainer>	)
}

export default SearchResults


const FoodContainer = styled.section`

background-image:url("/bg.png");
background-size:cover;
min-height 	:calc(100vh - 210px) ;

`



const FoodCards = styled.section`
display:flex;
flex-wrap:wrap;
row-gap:32px;
column-gap:20px;
justify-content:center;
align-items:center;
padding-top: 80px;`

const FoodCard = styled.div`
width: 340px;
height: 167px;
border: 0.66px solid;
display:flex;
padding:9px;


border-image-source: radial-gradient(
		80.69% 208.78% at 108.28% 112.58%,
		#eabfff 0%,
		rgba(135, 38, 183, 0) 100%
	),
	radial-gradient(
		80.38% 222.5% at -13.75% -12.36%,
		#98f9ff 0%,
		rgba(255, 255, 255, 0) 100%
	);

background: url(.png),
	radial-gradient(
		90.16% 143.01% at 15.32% 21.04%,
		rgba(165, 239, 255, 0.2) 0%,
		rgba(110, 191, 244, 0.0447917) 77.08%,
		rgba(70, 144, 213, 0) 100%
	);
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.1842px);

border-radius: 20px;

.food-info{
	display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end

}

h3{
	color: #FFF;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;

}

p{
	color: #FFF;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top:8px;

}

Button{
	font-size:12px;
}
`