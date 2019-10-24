import React from 'react';
import { ResetButton, Button2 } from '../Widgets';

export const GameEndingModal = props => {
  
  let modalDisplay;
  let { totalScore } = props

  if (props.showEndGameModal) { modalDisplay =
      <div className='overlay'>
        <div className='w-1/3'></div>
        <div className='w-1/3 modalTop bg-body-background ml-auto mr-auto p-3 border border-light-gray shadowEffect pin-x absolute rounded-lg mt-32 z-10 mb-3'>
          <h2 className='mb-3 text-center'>Your final score was: <span className='text-brand-green'>{totalScore}</span></h2>
          <hr className="border-brand-green border hrModals mb-3"></hr>
          <h4 className='mb-3 text-center'>Thank you for playing!</h4>
          <p className='mb-1 text-center'>Click <b className='text-brand-green'>"Start New Game"</b> to start a new game. Or...</p>
          <p className='mb-3 text-center'>Click <b className='text-brand-green'>"Bask in Glory"</b> to stare at your score a little while longer.</p>
          <hr className="border-brand-green border hrModals mb-3"></hr>
          <div className='justify-between flex'>
            <ResetButton
              classprops='main-button outline-button p-0 inline-block px-1 border-black border rounded text-sm bg-light-gray' text='Start New Game' styles='text-darkest-gray font-bold'
              onClick={(event) => props.resetGame(event)} />
            <Button2
              classprops='outline-button-two p-0 px-1 border-black border rounded text-sm bg-brand-green h-6' text="Bask in Glory" styles='font-bold text-darkest-gray'
              onClick={(event) => props.dontReset(event)} />
          </div>
        </div>
        <div className='w-1/3'></div>
      </div>
  } else modalDisplay = null

  return (
    <React.Fragment>
      {modalDisplay}
    </React.Fragment>
  );
};