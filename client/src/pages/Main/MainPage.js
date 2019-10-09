import React from 'react';
import { Button, TableRow, Dice } from '../../components/Widgets';
import rowData from '../../rowData.json';
// Importing images
import YahtzeeImg from '../../assets/images/yahtzeeimg.png';

const MainPage = props => (
  <React.Fragment>
    {/* {console.log(props)} */}
    <div className='w-full h-screen bg-darkest-gray '>
      <div className='flex w-full'>
        <div className='w-1/3'>
          <div className='flex'><img src={YahtzeeImg} alt='yahtzee' /></div>
        </div>
        <div className='w-1/3'>
          <div className='flex justify-center mb-3 mt-6'>
            <Dice diceId={'diceOneId'} disabled={props.disabledDice[0]} checkboxName={'checkBoxOne'} diceImage={props.diceOneImage} diceChecked={props.diceOneChecked} onChange={props.onChange} />
            <Dice diceId={'diceTwoId'} disabled={props.disabledDice[1]} checkboxName={'checkBoxTwo'} diceImage={props.diceTwoImage} diceChecked={props.diceTwoChecked} onChange={props.onChange} />
            <Dice diceId={'diceThreeId'} disabled={props.disabledDice[2]} checkboxName={'checkBoxThree'} diceImage={props.diceThreeImage} diceChecked={props.diceThreeChecked} onChange={props.onChange} />
            <Dice diceId={'diceFourId'} disabled={props.disabledDice[3]} checkboxName={'checkBoxFour'} diceImage={props.diceFourImage} diceChecked={props.diceFourChecked} onChange={props.onChange} />
            <Dice diceId={'diceFiveId'} disabled={props.disabledDice[4]} checkboxName={'checkBoxFive'} diceImage={props.diceFiveImage} diceChecked={props.diceFiveChecked} onChange={props.onChange} />
          </div>
          <div className='p-3 mx-8'>
            <div className='table rounded border-light-gray border px-2 pt-2 pb-2 shadowEffect mr-5 w-full'>
              <div className='flex w-full justify-between'>
                <div id="gameTurnNumberStatus" className='text-sm text-light-gray font-bold'>
                  {props.turnNumber === 0 ? <div className='pt-1 h-8 mt-1px'>Roll the dice to start!</div> : <div className='pt-1 h-8 mt-1px'>Roll Number: {props.turnNumber}</div>}
                </div>
                <Button classprops='main-button outline-button p-0 inline-block px-1 border-black border rounded text-sm bg-light-gray hvr-wobble-skew h-6' disabledbutton={props.disabledButton} text='Roll Dice' styles='text-darkest-gray font-bold' onClick={() => props.rollDice()}></Button>
              </div>
              <form>
                <div className='w-full'>
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
                </div>
              </form>
            </div>
          </div>

        </div>
        <div className='w-1/3'>
        </div>

      </div>
    </div>
  </React.Fragment>
);

export default MainPage;