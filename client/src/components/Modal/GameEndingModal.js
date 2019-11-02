import React from 'react';
import { ResetButton, Button2 } from '../Widgets';

export const GameEndingModal = (props) => {
  let modalDisplay;
  const { totalScore, theme } = props;

  if (props.showEndGameModal) {
    modalDisplay =
      <div className='overlay'>
        <div className='w-1/3'></div>
        <div className={`w-1/3 modalTop ${theme.darkestBackground} 
        ml-auto mr-auto p-3 border ${theme.standardBorder} ${theme.shadowEffect} pin-x absolute rounded-lg mt-32 z-10 mb-3`}>
          <h2 className={`mb-3 text-center ${theme.standardText}`}>
            Your final score was: <span className={`${theme.specialText}`}>{totalScore}</span></h2>
          <hr className={`${theme.specialBorder} border outsetBorder mb-3`}></hr>
          <h4 className={`mb-3 text-center ${theme.standardText}`}>Thank you for playing!</h4>
          <p className={`mb-1 text-center ${theme.standardText}`}>
            Click <span className={`${theme.specialText}`}>"Start New Game"</span> to start a new game. Or...</p>
          <p className={`mb-3 text-center ${theme.standardText}`}>
            Click <span className={`${theme.specialText}`}>
            "Bask in Glory"</span> to stare at your score a little while longer.</p>
          <hr className={`${theme.specialBorder} border outsetBorder mb-3`}></hr>
          <div className='justify-between flex'>
            <ResetButton
              classprops={`main-button outline-button p-0 inline-block px-1 ${theme.darkestBorder} border rounded text-sm ${theme.specialBackground}`} text='Start New Game' styles={`${theme.darkText} font-bold`}
              onClick={(event) => props.resetGame(event)} />
            <Button2
              classprops={`outline-button-two p-0 px-1 ${theme.darkestBorder} border rounded text-sm ${theme.lightBackground} h-6`} text="Bask in Glory" styles={`${theme.darkText} font-bold`}
              onClick={(event) => props.dontReset(event)} />
          </div>
        </div>
        <div className='w-1/3'></div>
      </div>;
  } else modalDisplay = null;

  return (
    <React.Fragment>
      {modalDisplay}
    </React.Fragment>
  );
};
