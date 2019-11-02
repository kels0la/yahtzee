import React from 'react';
import YahtzeeImg from '../../assets/images/yahtzeeimg.png';
import { HowToPlayModal, RestartGame } from '../Modal';

export const Nav = (props) => {
  const { theme } = props;

  return (
    <React.Fragment>
      <nav className={`bg-body-background p-2 h-screen w-32 shadowRight font-header block`}>
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
          <HowToPlayModal showHowToPlayModal={props.showHowToPlayModal}
            displayHowToPlayModal={props.displayHowToPlayModal} closeHowToPlayModal={props.closeHowToPlayModal}
            theme={theme} />
        </div>
        <div className='pt-2'><span className={`text-light-gray cursor-pointer`}>Account/MB</span></div>
        <div className='dropdown overflow-hidden'>
          <div className='cursor-pointer pt-2'>Themes
            <i className={`ml-2 ${theme.specialText} fa fa-caret-down`}></i></div>
          <div className='dropdown-content'>
            <div className='pt-1 pl-1'><span className={`cursor-pointer text-brand-green text-sm hover:bg-soft-black`}
              onClick={(event) => props.toggleTheme(event, 'listoka')}>Listoka </span></div>
            <div className='pt-1 pl-1'><span className={`text-gold cursor-pointer text-sm hover:bg-soft-black`}
              onClick={(event) => props.toggleTheme(event, 'matador')}>
              M<span className='text-yahtzee-red'>a</span>t<span className='text-yahtzee-red'>a</span>d<span
                className='text-yahtzee-red'>o</span>r</span></div>
            <div className='pt-1 pl-1'><span className={`text-white cursor-pointer text-sm hover:bg-soft-black`}
              onClick={(event) => props.toggleTheme(event, 'light')}>Light</span></div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
