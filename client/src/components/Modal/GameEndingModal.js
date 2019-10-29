import React from 'react';
import { ResetButton, Button2 } from '../Widgets';
import { ThemeContext } from '../Themes/ThemeContext';

export const GameEndingModal = props => {
  
  let modalDisplay;
  let { totalScore } = props

  if (props.showEndGameModal) { modalDisplay =
    <ThemeContext.Consumer>
      {(theme) => (
      <div className='overlay'>
        <div className='w-1/3'></div>
        <div className={`w-1/3 modalTop ${theme.navBackground} ml-auto mr-auto p-3 border ${theme.standardBorder} ${theme.shadowEffect} pin-x absolute rounded-lg mt-32 z-10 mb-3`}>
          <h2 className='mb-3 text-center'>Your final score was: <span className={`${theme.specialText}`}>{totalScore}</span></h2>
          <hr className={`${theme.hrBorderOne} border outsetBorder mb-3`}></hr>
          <h4 className='mb-3 text-center'>Thank you for playing!</h4>
          <p className='mb-1 text-center'>Click <span className={`${theme.specialText}`}>"Start New Game"</span> to start a new game. Or...</p>
          <p className='mb-3 text-center'>Click <span className={`${theme.specialText}`}>"Bask in Glory"</span> to stare at your score a little while longer.</p>
          <hr className={`${theme.hrBorderOne} border outsetBorder mb-3`}></hr>
          <div className='justify-between flex'>
            <ResetButton
              classprops={`main-button outline-button p-0 inline-block px-1 border-black border rounded text-sm ${theme.buttonBackgroundOne}`} text='Start New Game' styles='text-darkest-gray font-bold'
              onClick={(event) => props.resetGame(event)} />
            <Button2
              classprops={`outline-button-two p-0 px-1 border-black border rounded text-sm ${theme.buttonBackgroundTwo} h-6`} text="Bask in Glory" styles='font-bold text-darkest-gray'
              onClick={(event) => props.dontReset(event)} />
          </div>
        </div>
        <div className='w-1/3'></div>
      </div>
      )}</ThemeContext.Consumer>
  } else modalDisplay = null

  return (
    <React.Fragment>
      {modalDisplay}
    </React.Fragment>
  );
};