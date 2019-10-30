import React from 'react';
import YahtzeeImg from '../../assets/images/yahtzeeimg.png';
import { HowToPlayModal, RestartGame } from '../Modal';

export const Nav = props => {

  let { theme } = props;

  return (
      <React.Fragment>
        <nav className={`bg-body-background p-2 h-screen w-32 shadowRight font-header`}>
          <div className='text-center pt-1'><img src={YahtzeeImg} className='h-16 w-28' alt='yahtzee' /></div>
          <hr className={`${theme.specialBorder} border outsetBorder`}></hr>
          <div className='pt-1'>
            <RestartGame
              overallTurns={props.overallTurns}
              resetGame={props.resetGame}
              closeRestartModal={props.closeRestartModal}
              displayRestartModal={props.displayRestartModal}
              showRestartModal={props.showRestartModal}
              theme={theme}
            /></div>
          <div className='pt-2'>
            <HowToPlayModal showHowToPlayModal={props.showHowToPlayModal} displayHowToPlayModal={props.displayHowToPlayModal} closeHowToPlayModal={props.closeHowToPlayModal} theme={theme}/>
          </div>
          <div className='pt-2'><span className={`text-light-gray cursor-pointer`}>Account/MB</span></div>
          <div className='pt-2'><span className={`cursor-pointer text-brand-green`} onClick={(event) => props.toggleTheme(event, 'listoka')}>Listoka Theme</span></div>
          <div className='pt-2'><span className={`text-yahtzee-red cursor-pointer`} onClick={(event) => props.toggleTheme(event, 'matador')}>Matador <span className='text-gold'>Theme</span></span></div>
          <div className='pt-2'><span className={`text-white cursor-pointer`} onClick={(event) => props.toggleTheme(event, 'light')}>Light Theme</span></div>
        </nav>
      </React.Fragment>
  );
};