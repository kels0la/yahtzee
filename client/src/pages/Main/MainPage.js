import React from 'react';
import { Button, TableRow, Dice } from '../../components/Widgets';
import rowData from '../../rowData.json';
// Importing images
import YahtzeeImg from '../../assets/images/yahtzeeimg.png';

const MainPage = props => (
  <React.Fragment>
    {/* {console.log(props)} */}
    <div className='w-full h-screen bg-darkest-gray '>
      <div className='text-center'><img src={YahtzeeImg} alt='yahtzee' /></div>
      <div className='px-3 -mt-5'><hr className="border-medium-gray border-3 hrModals"></hr></div>
      <div className='p-3 flex'>
        <div className='table rounded border-light-gray border p-2 shadowEffect mr-5'>
          <form>
            <div id="gameTurnNumberStatus" className='border-b-2 border-brand-green text-sm text-light-gray font-bold'>
              {props.turnNumber === 0 ? <div className='pt-1 h-8 mt-1px'>Roll the dice to start!</div> : <div className='pt-1 h-8 mt-1px'>Roll Number: {props.turnNumber}</div>}
            </div>
            {rowData.map(row => (
              <TableRow
                id={row.id}
                key={row.id}
                rowType={row.rowType}
                rowTwoId={row.rowTwoId}
                labelText={row.labelText}
                bottomFormatting={row.bottomFormatting}
                disabledRadio={props.disabledRadio}
                disabledFinalized={props.disabledFinalize}
              />
            ))}
          </form>
        </div>
        {/* Dice and Submit Button */}
        <div className='inline-flex pl-3'>
          {/* I would like do a mapping, but I don't know how to do it with the diceImage changing */}
          <Dice diceId={'diceOneId'} disabled={props.disabledDice[0]} checkboxName={'checkBoxOne'} diceImage={props.diceOneImage} diceChecked={props.diceOneChecked} onChange={props.onChange} />
          <Dice diceId={'diceTwoId'} disabled={props.disabledDice[1]} checkboxName={'checkBoxTwo'} diceImage={props.diceTwoImage} diceChecked={props.diceTwoChecked} onChange={props.onChange} />
          <Dice diceId={'diceThreeId'} disabled={props.disabledDice[2]} checkboxName={'checkBoxThree'} diceImage={props.diceThreeImage} diceChecked={props.diceThreeChecked} onChange={props.onChange} />
          <Dice diceId={'diceFourId'} disabled={props.disabledDice[3]} checkboxName={'checkBoxFour'} diceImage={props.diceFourImage} diceChecked={props.diceFourChecked} onChange={props.onChange} />
          <Dice diceId={'diceFiveId'} disabled={props.disabledDice[4]} checkboxName={'checkBoxFive'} diceImage={props.diceFiveImage} diceChecked={props.diceFiveChecked} onChange={props.onChange} />
          {/* {console.log(diceData)} */}
          {/* {diceData.map(dice => (
            // I'm thinking I could do a forloop to add the props.diceFourImage. But I'll wait.
            <Dice 
              key={dice.id}
              diceId={dice.diceId}
              checkBoxName={dice.checkBoxName}
              diceImage={dice.diceImage}
              diceChecked={dice.diceChecked}
            />
            ))} */}
        </div>
        <div>
          <Button disabledButton={props.disabledButton} text='Roll Dice' styles='text-light-gray border-red' onClick={() => props.rollDice()}></Button>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default MainPage;