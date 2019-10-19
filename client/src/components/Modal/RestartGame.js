import React from 'react';
import { ResetButton, Button2 } from '../Widgets';

export const RestartGame = props => {

  const showModal = props.showRestartModal 
    ?
      <div className='overlay'>
        <div className='w-1/3'></div>
        <div className='w-1/3 modalTop bg-body-background ml-auto mr-auto p-3 border border-light-gray shadowEffect pin-x absolute rounded-lg mt-32 z-10 mb-3'>
          <p className='mb-3 text-center'>Click <span className='text-brand-green'>"New Game"</span> to swallow your pride. Or...</p>
          <p className='mb-3 text-center'>Click <span className='text-brand-green'>"Keep Trying"</span> to suck it up and continue on.</p>
          <hr className="border-brand-green border hrModals mb-3"></hr>
          <div className='justify-between flex'>
            <ResetButton
              classprops='main-button outline-button p-0 inline-block px-1 border-black border rounded text-sm bg-light-gray'
              text='New Game'
              styles='text-darkest-gray font-bold'
              onClick={(event) => props.resetGame(event)} />
            <Button2
              classprops='outline-button-two p-0 px-1 border-black border rounded text-sm bg-brand-green h-6'
              text="Keep Trying"
              styles='font-bold text-darkest-gray'
              onClick={(event) => props.closeRestartModal(event)} />
          </div>
        </div>
        <div className='w-1/3'></div>
      </div> 
    : null
  return (
    <React.Fragment>
      <ResetButton 
        classprops='main-button outline-button p-0 inline-block px-1 border-black border rounded text-sm bg-yahtzee-red'
        text='Restart Game'
        onClick={(event) => props.displayRestartModal(event)}
      />
      {showModal}
    </React.Fragment>
  );
};