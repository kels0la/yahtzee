import React from 'react';
import YahtzeeImg from '../../assets/images/yahtzeeimg.png';
import { HowToPlayModal, RestartGame } from '../Modal';
import { ThemeContext } from '../Themes/ThemeContext';

export const Nav = props => {

  return (
    <ThemeContext.Consumer>
      {( theme ) => (
      <React.Fragment>
        <nav className={`${theme.navBackground} p-2 h-screen w-32 shadowRight font-header`}>
          <div className='text-center pt-1'><img src={YahtzeeImg} className='h-16 w-28' alt='yahtzee' /></div>
          <hr className={`${theme.hrBorderOne} border outsetBorder`}></hr>
          <div className='pt-1'>
            <RestartGame
              overallTurns={props.overallTurns}
              resetGame={props.resetGame}
              closeRestartModal={props.closeRestartModal}
              displayRestartModal={props.displayRestartModal}
              showRestartModal={props.showRestartModal}
            /></div>
          <div className='pt-2'>
            <HowToPlayModal showHowToPlayModal={props.showHowToPlayModal} displayHowToPlayModal={props.displayHowToPlayModal} closeHowToPlayModal={props.closeHowToPlayModal} />
          </div>
          <div className='pt-2'><span className={`${theme.standardText} cursor-pointer`}>Account/MB</span></div>
          <div className='pt-2'><span className={`${theme.standardText} cursor-pointer`} onClick={(event) => props.toggleTheme(event, 'listoka')}>Listoka Theme</span></div>
          <div className='pt-2'><span className={`${theme.standardText} cursor-pointer`} onClick={(event) => props.toggleTheme(event, 'matador')}>Matador Theme</span></div>
        </nav>
      </React.Fragment>
      )}
    </ThemeContext.Consumer>
  );
};