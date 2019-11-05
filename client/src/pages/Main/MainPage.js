import React from 'react';
import { Button, Dice, TableRow, RunningScoreDisplay } from '../../components/Widgets';
import { GameEndingModal } from '../../components/Modal';
import { Nav } from '../../components/Nav';
import rowData from '../../rowData.json';

const MainPage = (props) => {
  // props.themes.background. Works. No need for higher order component.
  const { theme } = props;

  return (
    <React.Fragment>
      {/* GameEndingModal returns an empty div until overallTurns > 12,
      where the modal then pops up */}
      <GameEndingModal
        showEndGameModal={props.showEndGameModal}
        dontReset={props.dontReset} resetGame={props.resetGame}
        totalScore={props.scores.totalScore}
        theme={theme}
      />
      <div className={`w-full flex ${theme.background}`}>
        <div className='w-1/6 h-full'>
          <Nav
            overallTurns={props.overallTurns}
            resetGame={props.resetGame}
            closeRestartModal={props.closeRestartModal}
            displayRestartModal={props.displayRestartModal}
            showRestartModal={props.showRestartModal}
            closeHowToPlayModal={props.closeHowToPlayModal}
            displayHowToPlayModal={props.displayHowToPlayModal}
            showHowToPlayModal={props.showHowToPlayModal}
            toggleTheme={props.toggleTheme}
            theme={theme}
          />
        </div>
        <div className='w-1/3'>
          <div className='flex justify-center mb-3 mt-10'>
            <div className={`p-2 w-full ${theme.shadowEffect} rounded-lg`}>
              <div className={`pt-2 w-full pb-1 px-1 text-center rounded ${theme.cardBackground} 
              ${theme.shadowEffect} ${theme.standardBorder} border`}>
                <h3 className={`${theme.standardText} font-header`}>Dice Den</h3>
                <hr className={`${theme.specialBorder} border outsetBorder mb-3`}></hr>
                <div className='mb-3'>
                  <Dice
                    diceId={'diceOneId'}
                    shakeNumber={'shakeOne'}
                    disabled={props.disabledDice[0]}
                    checkboxName={'checkBoxOne'}
                    diceImage={props.diceOneImage}
                    diceChecked={props.diceOneChecked}
                    onChange={props.handleDiceChecked}
                    endAnimation={props.endAnimation}
                    shouldShake={props.shakeDiceOne} />
                  <Dice
                    diceId={'diceTwoId'}
                    shakeNumber={'shakeTwo'}
                    disabled={props.disabledDice[1]}
                    checkboxName={'checkBoxTwo'}
                    diceImage={props.diceTwoImage}
                    diceChecked={props.diceTwoChecked}
                    onChange={props.handleDiceChecked}
                    endAnimation={props.endAnimation}
                    shouldShake={props.shakeDiceTwo}
                  />
                  <Dice diceId={'diceThreeId'}
                    shakeNumber={'shakeThree'}
                    disabled={props.disabledDice[2]}
                    checkboxName={'checkBoxThree'}
                    diceImage={props.diceThreeImage}
                    diceChecked={props.diceThreeChecked}
                    onChange={props.handleDiceChecked}
                    endAnimation={props.endAnimation}
                    shouldShake={props.shakeDiceThree}
                  />
                  <Dice
                    diceId={'diceFourId'}
                    shakeNumber={'shakeFour'}
                    disabled={props.disabledDice[3]}
                    checkboxName={'checkBoxFour'}
                    diceImage={props.diceFourImage}
                    diceChecked={props.diceFourChecked}
                    onChange={props.handleDiceChecked}
                    endAnimation={props.endAnimation}
                    shouldShake={props.shakeDiceFour}
                  />
                  <Dice
                    diceId={'diceFiveId'}
                    shakeNumber={'shakeFive'}
                    disabled={props.disabledDice[4]}
                    checkboxName={'checkBoxFive'}
                    diceImage={props.diceFiveImage}
                    diceChecked={props.diceFiveChecked}
                    onChange={props.handleDiceChecked}
                    endAnimation={props.endAnimation}
                    shouldShake={props.shakeDiceFive}
                  />
                </div>
                <div className='flex w-full justify-between'>
                  <div id="gameTurnNumberStatus" className={`text-sm ${theme.standardText}`}>
                    {props.turnNumber === 0 ? <div className='pt-1 h-8 ml-1'>Roll the dice!</div> :
                      <div className='pt-1 h-8 mt-1px ml-2'>Roll Number: {props.turnNumber}</div>}
                  </div>
                  {/* This button rolls the dice */}
                  <Button 
                    classprops={`main-button outline-button p-0 inline-block px-1 
                    ${theme.darkestBorder} border rounded text-sm ${theme.lightBackground} 
                    hvr-wobble-skew h-6 mr-2`}
                    disabledrolldicebtn={props.disabledRollDiceBtn ? 1 : 0}
                    text='Roll Dice'
                    styles={`${theme.darkText} font-bold`}
                    onClick={(event) => props.rollDice(event)}>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={`p-2 ${theme.shadowEffect} rounded-lg`}>
            <div className={`table rounded ${theme.standardBorder} ${theme.cardBackground}
             border px-2 pt-2 pb-2 ${theme.shadowEffect} mr-5 w-full`}>
              <form onSubmit={props.handleSubmitSelection}>
                <div className='w-full -mb-1px'>
                  {rowData.map((row) => (
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
                      theme={theme}
                      displayedValues={props.displayedValues}
                    />
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='w-1/3'>
          <RunningScoreDisplay
            scores={props.scores}
            theme={theme}
          />
        </div>
        <div className='w-1/6'></div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
