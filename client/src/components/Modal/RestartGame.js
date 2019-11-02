import React from 'react';
import { ModalRestart } from './ModalRestart';

export const RestartGame = props => {

  let showModal;
  let { theme } = props

  if (props.showRestartModal && props.overallTurns < 13) {
    showModal = <ModalRestart
      firstLineText='Are you sure you want to do that?'
      secondLineText={<p className={`border-medium-gray text-center ${theme.standardText}`}>Click <span className={`${theme.specialText}`}>"New Game"</span> to swallow your pride. Or...</p>}
      thirdLineText={<p className={`border-medium-gray text-center ${theme.standardText}`}>Click <span className={`${theme.specialText}`}>"Keep Trying"</span> to suck it up and continue on.</p>}
      secondButtonText='Keep Trying'
      resetGame={props.resetGame}
      closeRestartModal={props.closeRestartModal}
      theme={theme}
    />
  } else if (props.showRestartModal && props.overallTurns === 13) {
    showModal = <ModalRestart
      firstLineText='Would you like to start a new game?'
      secondLineText={<p className={`border-medium-gray ${theme.standardText}`}>Click <span className={`${theme.specialText}`}>"New Game"</span> to start Yahtzeeing!</p>}
      thirdLineText={<p className={`border-medium-gray ${theme.standardText}`}>Click <span className={`${theme.specialText}`}>"Chicken Out"</span> to continue basking at your score.</p>}
      secondButtonText='Chicken Out'
      resetGame={props.resetGame}
      closeRestartModal={props.closeRestartModal}
      theme={theme}
    />
  } else showModal = null;

  return (
    <React.Fragment>
      {/* This needs to be switched from a Button into just a div with clickable text <a> */}
      <div className='cursor-pointer' onClick={(event) => props.displayRestartModal(event)}>
        New Game
        </div>
      {showModal}
    </React.Fragment>
  );
};