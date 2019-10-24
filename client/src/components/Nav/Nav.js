import React from 'react';
import YahtzeeImg from '../../assets/images/yahtzeeimg.png';
import { HowToPlayModal, RestartGame } from '../Modal';

export const Nav = props => {

  return (
    <React.Fragment>
      <nav className='bg-body-background p-2 h-screen w-32 shadowRight font-header'>
        <div className='text-center pt-1'><img src={YahtzeeImg} className='h-16 w-28' alt='yahtzee' /></div>
        <hr className="border-brand-green border hrModals"></hr>
          <div className='pt-1'>
            <RestartGame
              overallTurns={props.overallTurns}
              resetGame={props.resetGame}
              closeRestartModal={props.closeRestartModal}
              displayRestartModal={props.displayRestartModal}
              showRestartModal={props.showRestartModal}
            /></div>
          <div className='pt-2'>
            <HowToPlayModal showHowToPlayModal={props.showHowToPlayModal} displayHowToPlayModal={props.displayHowToPlayModal} closeHowToPlayModal={props.closeHowToPlayModal}/>
          </div>
          <div className='pt-2'><span className='cursor-pointer'>Account/MB</span></div>
          <div className='pt-2'><span className='cursor-pointer'>Themes</span></div>
      </nav>
    </React.Fragment>
  );
};