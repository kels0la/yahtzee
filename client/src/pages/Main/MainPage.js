import React from 'react';
import { Button, Dice, TableRow } from '../../components/Widgets';
import { GameEndingModal, RestartGame } from '../../components/Modal'
import rowData from '../../rowData.json';
// Importing images
import YahtzeeImg from '../../assets/images/yahtzeeimg.png';

const MainPage = props => {

  return (
    <React.Fragment>
      {/* GameEndingModal returns an empty div until overallTurns > 12, where the modal then pops up */}
      <GameEndingModal showEndGameModal={props.showEndGameModal} dontReset={props.dontReset} resetGame={props.resetGame} totalScore={props.scores.totalScore}/>
      <div className='w-full h-screen bg-darkest-gray'>
        <div className='flex w-full'>
          <div className='w-1/3'>
            <div className='flex'><img src={YahtzeeImg} alt='yahtzee' /></div>
            {/* Opens modal to confirm a person would like to start a new game */}
            <RestartGame overallTurns={props.overallTurns} resetGame={props.resetGame} closeRestartModal={props.closeRestartModal} displayRestartModal={props.displayRestartModal} showRestartModal={props.showRestartModal} />
          </div>
          <div className='w-1/3'>
            <div className='flex justify-center mb-3 mt-6'>
              <Dice diceId={'diceOneId'} disabled={props.disabledDice[0]} checkboxName={'checkBoxOne'} diceImage={props.diceOneImage} diceChecked={props.diceOneChecked} onChange={props.handleDiceChecked} endAnimation={props.endAnimation} shouldShake={props.shakeDiceOne} />
              <Dice diceId={'diceTwoId'} disabled={props.disabledDice[1]} checkboxName={'checkBoxTwo'} diceImage={props.diceTwoImage} diceChecked={props.diceTwoChecked} onChange={props.handleDiceChecked} endAnimation={props.endAnimation} shouldShake={props.shakeDiceTwo} />
              <Dice diceId={'diceThreeId'} disabled={props.disabledDice[2]} checkboxName={'checkBoxThree'} diceImage={props.diceThreeImage} diceChecked={props.diceThreeChecked} onChange={props.handleDiceChecked} endAnimation={props.endAnimation} shouldShake={props.shakeDiceThree} />
              <Dice diceId={'diceFourId'} disabled={props.disabledDice[3]} checkboxName={'checkBoxFour'} diceImage={props.diceFourImage} diceChecked={props.diceFourChecked} onChange={props.handleDiceChecked} endAnimation={props.endAnimation} shouldShake={props.shakeDiceFour} />
              <Dice diceId={'diceFiveId'} disabled={props.disabledDice[4]} checkboxName={'checkBoxFive'} diceImage={props.diceFiveImage} diceChecked={props.diceFiveChecked} onChange={props.handleDiceChecked} endAnimation={props.endAnimation} shouldShake={props.shakeDiceFive} />
            </div>
            <div className='p-3 mx-8'>
              <div className='table rounded border-light-gray border px-2 pt-2 pb-2 shadowEffect mr-5 w-full'>
                <div className='flex w-full justify-between'>
                  <div id="gameTurnNumberStatus" className='text-sm text-light-gray font-bold'>
                    {props.turnNumber === 0 ? <div className='pt-1 h-8 mt-1px'>Roll the dice!</div> : <div className='pt-1 h-8 mt-1px'>Roll Number: {props.turnNumber}</div>}
                  </div>
                  {/* This button rolls the dice */}
                  <Button classprops='main-button outline-button p-0 inline-block px-1 border-black border rounded text-sm bg-light-gray hvr-wobble-skew h-6' disabledrolldicebtn={props.disabledRollDiceBtn ? 1 : 0} text='Roll Dice' styles='text-darkest-gray font-bold' onClick={(event) => props.rollDice(event)}></Button>
                </div>
                <form onSubmit={props.handleSubmitSelection}>
                  <div className='w-full'>
                    {rowData.map(row => (
                      <TableRow
                        id={row.id}
                        key={row.id}
                        rowType={row.rowType}
                        radioBtnValue={row.radioBtnValue}
                        labelText={row.labelText}
                        bottomFormatting={row.bottomFormatting}
                        disabledRadio={row.disabledRadio}
                        disabledTakeScoreBtn={props.disabledTakeScoreBtn}
                        disabledScores={props.disabledScores}
                        scores={props.scores}
                        handleRadioButtonSelection={props.handleRadioButtonSelection}
                        selectedOption={props.selectedOption}
                        toggleHidden={props.toggleHidden}
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
  )
};

export default MainPage;  