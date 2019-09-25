import React from 'react';
import { Button, TableRow, Dice } from '../../components/Widgets';
// Importing images
import YahtzeeImg from '../../assets/images/yahtzeeimg.png';
import diceOne from '../../assets/images/diceOne.png';
import diceTwo from '../../assets/images/diceTwo.png';
import diceThree from '../../assets/images/diceThree.png';
import diceFour from '../../assets/images/diceFour.png';
import diceFive from '../../assets/images/diceFive.png';
import diceSix from '../../assets/images/diceSix.png';

const MainPage = props => (
  <React.Fragment>
    <div className='w-full h-screen bg-darkest-gray '>
      <div className='text-center'><img src={YahtzeeImg} alt='yahtzee' /></div>
        <div className='px-3 -mt-5'><hr className="border-medium-gray border-3 hrModals"></hr></div>
      <div className='p-3 flex'>
        <div className='table text-sm border-light-gray border p-1 shadowEffect'>
          <form>
            <TableRow rowType={'labelRow'} rowTwoId={null} />
            <TableRow rowType={''} rowTwoId={'onesScore'} labelText={'Ones'}/>
            <TableRow rowType={''} rowTwoId={'twosScore'} labelText={'Twos'}/>
            <TableRow rowType={''} rowTwoId={'threesScore'} labelText={'Threes'}/>
            <TableRow rowType={''} rowTwoId={'foursScore'} labelText={'Fours'}/>
            <TableRow rowType={''} rowTwoId={'fivesScore'} labelText={'Fives'}/>
            <TableRow rowType={''} rowTwoId={'sixesScore'} labelText={'Sixes'} bottomFormatting={true}/>

            <TableRow rowType={'noSelectionRow'} rowTwoId={'runningTopScore'} labelText={'Running Top'}/>
            <TableRow rowType={'noSelectionRow'} rowTwoId={'bonusScore'} labelText={'Bonus'}/>
            <TableRow rowType={'noSelectionRow'} rowTwoId={'totalTopScore'} labelText={'Total Top'} bottomFormatting={true}/>

            <TableRow rowType={''} rowTwoId={'threeKindScore'} labelText={'3 of a Kind'}/>
            <TableRow rowType={''} rowTwoId={'fourKindScore'} labelText={'4 of a Kind'}/>
            <TableRow rowType={''} rowTwoId={'fullHouseScore'} labelText={'Full House'}/>
            <TableRow rowType={''} rowTwoId={'smallStraightScore'} labelText={'Small Straight'}/>
            <TableRow rowType={''} rowTwoId={'largeStraightScore'} labelText={'Large Straight'}/>
            <TableRow rowType={''} rowTwoId={'yahtzeeScore'} labelText={'Yahtzee'}/>
            <TableRow rowType={''} rowTwoId={'doubleYahtzeeScore'} labelText={'2x Yahtzee'}/>
            <TableRow rowType={''} rowTwoId={'chanceScore'} labelText={'Chance'} bottomFormatting={true}/>

            <TableRow rowType={'noSelectionRow'} rowTwoId={'totalBottomScore'} labelText={'Total Bottom'}/>
            <TableRow rowType={'noSelectionRow'} rowTwoId={'totalTopOnBottom'} labelText={'Total Top'} bottomFormatting={true}/>
            <TableRow rowType={'finalRow'} rowTwoId={'totalScore'} labelText={'Total Score'}/>
          </form>
        </div>
        {/* Dice and Submit Button */}
        <span>
          <Button text='Roll Dice' styles='text-light-gray border-red' onClick={() => props.rollDice()}></Button>
        </span>
        <div className='inline-flex pl-3'>
          {/* diceNumber is currently hardcoded. Requires logic to switch dice based upon roll */}
          <Dice diceID={'checkboxOne'} diceNumber={diceOne}/>
          <Dice diceID={'checkboxTwo'} diceNumber={diceTwo}/>
          <Dice diceID={'checkboxThree'} diceNumber={diceThree}/>
          <Dice diceID={'checkboxFour'} diceNumber={diceFour}/>
          <Dice diceID={'checkboxFive'} diceNumber={diceFive}/>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default MainPage;