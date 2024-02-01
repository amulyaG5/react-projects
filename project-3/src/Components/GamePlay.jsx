import styled from 'styled-components';
import SelectNumber from './SelectNumber';
import TotalScore from "./TotalScore";
import RollDice from './RollDice';
import { useState } from 'react';
import { Button } from "../Styled/Button"
import { OutlineButton } from '../Styled/Button';
import Rules from './Rules';


const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setscore] = useState(0);
	const [error, setError] = useState("Please select a number before rolling the dice");
	const [showRules, setShowRules] = useState(false)


  //  roll dice component
	
	const generateRandomNumber = (min, max) => {
    // Check if a number is selected	
    if (typeof selectedNumber === 'undefined') {
      setError("Please select a number before rolling the dice.");
      return; // Exit the function if no number is selected
    }

    // Clear any previous errors
    setError(null);

    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    setCurrentDice(randomNumber);
    console.log(randomNumber);

    // Check if the selected number is equal to the dice roll
    if (selectedNumber === randomNumber) {
      setscore(selectedNumber);
    } else {
      // If not equal, deduct 2 from the total score
      setscore(score - 2);
    }

    setSelectedNumber(undefined);
		// undefined because if the number once selected should not be  shown as selected until its selected
  };

	const resetScore = () => {

		setscore(0)
		setCurrentDice(1)
	}

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore  score={score}/>
        <SelectNumber
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
					error={error}
					setError={setError}
        />
      </div>
      <RollDice
        currentDice={currentDice}
        setCurrentDice={setCurrentDice}
        generateRandomNumber={generateRandomNumber}
      />



			<div className='buttons'>

				<OutlineButton onClick={resetScore}>Reset Score	</OutlineButton>
				{showRules ? (<OutlineButton onClick={() => setShowRules(false)}>Hide Rules</OutlineButton>) : (<OutlineButton onClick={() => setShowRules(true)}>Show Rules</OutlineButton>
) }
        



			</div>

			{showRules && <Rules/>}






    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 50px;

  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
	.buttons{
		display:flex;
		flex-direction: column;
		justify-content-center;
		gap:10px;
		align-items:center;
		margin-top:40px;	
	}
`;
