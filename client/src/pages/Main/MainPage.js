import React from 'react';
import { Button, TableRow, Dice, diceData } from '../../components/Widgets';
import rowData from '../../rowData.json';
// Importing images
import YahtzeeImg from '../../assets/images/yahtzeeimg.png';

const MainPage = props => (
  <React.Fragment>
    {console.log(props)}
    <div className='w-full h-screen bg-darkest-gray '>
      <div className='text-center'><img src={YahtzeeImg} alt='yahtzee' /></div>
        <div className='px-3 -mt-5'><hr className="border-medium-gray border-3 hrModals"></hr></div>
      <div className='p-3 flex'>
        <div className='table text-sm border-light-gray border p-1 shadowEffect'>
          <form>
            {rowData.map(row => (
              <TableRow 
                id={row.id}
                key={row.id}
                rowType={row.rowType}
                rowTwoId={row.rowTwoId}
                labelText={row.labelText}
                bottomFormatting={row.bottomFormatting}
              />
            ))}
          </form>
        </div>
        {/* Dice and Submit Button */}
        <span>
          <Button text='Roll Dice' styles='text-light-gray border-red' onClick={() => props.rollDice()}></Button>
        </span>
        <div className='inline-flex pl-3'>
          {/* I would like do a mapping, but I don't know how to do it with the diceImage changing */}
          <Dice diceId={'diceOneId'} checkboxName={'checkBoxOne'} diceImage={props.diceOneImage}/>
          <Dice diceId={'diceTwoId'} checkboxName={'checkBoxTwo'} diceImage={props.diceTwoImage}/>
          <Dice diceId={'diceThreeId'} checkboxName={'checkBoxThree'} diceImage={props.diceThreeImage}/>
          <Dice diceId={'diceFourId'} checkboxName={'checkBoxFour'} diceImage={props.diceFourImage}/>
          <Dice diceId={'diceFiveId'} checkboxName={'checkBoxFive'} diceImage={props.diceFiveImage}/>
      {/* {console.log(diceData)} */}
          {/* {diceData.map(dice => (
            <Dice 
              key={dice.id}
              diceId={dice.diceId}
              checkBoxName={dice.checkBoxName}
              diceImage={dice.diceImage}
              checked={dice.checked}
            />
            ))} */}
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default MainPage;