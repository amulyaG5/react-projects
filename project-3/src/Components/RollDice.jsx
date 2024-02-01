import styled from "styled-components";

const RollDice = ({currentDice, setCurrentDice, generateRandomNumber}) => {

 

  return (
    <DiceMainContainer>	
      <div className="dice" onClick={() => generateRandomNumber(1, 6)}>
        <img src={`/src/assets/dice_${currentDice}.png`} alt= "dice-1" />
      </div>
      <p>Click on the Dice to roll</p>
    </DiceMainContainer>
  );
};

export default RollDice;

const DiceMainContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
