import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import styled from "styled-components";
import SearchResults from "./Components/SearchResults/SearchResults";

export const BASE_URL = "http://localhost:9000"



const App = () => {
	const [data, setData] = useState()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [filteredData, setFilteredData] = useState()
	const [filterType, setFilterType] = useState("All"); // Default filter type


	
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setLoading(false);
				setFilteredData(json)
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);
	console.log(data)




if (error) return<div>{error}</div>
if (loading) return<div>Loading ...</div>


const searchFood = (e) =>{
	const searchValue = e.target.value
	console.log(searchValue)
	if (searchValue === ""){
		setFilteredData(null)
	}

	const filter = data?.filter((food)=>
	food.name.toLowerCase().includes(searchValue.toLowerCase()))
	setFilteredData(filter)

}

const filterByType = (type) => {
	setFilterType(type);
	if (type === "All") {
		setFilteredData(data); // Show all data
		setFilterType("all")
	} else {
		const filter = data?.filter((food)=>
	food.type.toLowerCase().includes(type.toLowerCase()))
	setFilteredData(filter)

		
		
	}
};


 
  return (
		<>
			<Container>
    <TopSection>
			<div className="logo">
				<img src="/logo.svg" alt="food-zone image"/>
				</div>
				<div className="search">

					<input
					onChange={searchFood}
					placeholder="Search Food"
					/>

				</div>


      
    </TopSection>
		<FilterContainer>
			<Button onClick={() => filterByType("All")}>
				All

			</Button>
			<Button onClick={() => filterByType("Breakfast")}>
       Breakfast
			</Button>
			<Button onClick={() => filterByType("Lunch")}>
         Lunch
			</Button>

			<Button onClick={() => filterByType("Dinner")}>
				Dinner

			</Button>

		</FilterContainer>


		
		</Container>
				<SearchResults data={filteredData} />
		</>

	

  );
};

export default App;

export const Container  = styled.div`
max-width:1200px;
margin: 0 auto;

`

const TopSection = styled.section`
display:flex;
align-items:center;
justify-content:space-between;
height:140px;
padding:16px;

.search{
	input {
		background-color:transparent;
		border-radius: 5px;
	border: 1px solid #FF0909;
	padding: 0px 10px ;
	color: white;
	width:100%;
	height:40px;
	font-size:16px;
	&:: placeholder{
		color: white;
	}
	}



}

@media (0 < width <600px) {
	flex-direction:column;
	height:120px;
}



`


const FilterContainer = styled.section`
display:flex;
gap:14px;
justify-content:center;
margin-bottom:31px;


`

export const Button =  styled.button`
border-radius: 5px;
background: #FF4343;
padding: 6px 12px;
border: none;
color: #FFF;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor:pointer;
&: hover{
	background:#FFFACD;
	color:black;
}

`


