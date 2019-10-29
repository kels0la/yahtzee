import React from 'react';
import { ResetButton, Button2 } from '../Widgets';
import { ThemeContext } from '../Themes/ThemeContext';

export const ModalRestart = props => {

  // currentTarget refers to the div where the listener is located and target refers to what is clicked
  // If they match (overlay is clicked), the modal is closed. This function is passed into the overlay div.
  const handleBackgroundClick = event => {
    if (event.target === event.currentTarget) props.closeRestartModal(event);
  };

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <React.Fragment>
          <div onClick={(event) => handleBackgroundClick(event)} className='overlay'>
            <div className='w-1/3'></div>
            <div className={`w-1/3 modalTop ${theme.background} ml-auto mr-auto p-3 border ${theme.standardBorder} ${theme.shadowEffect} pin-x absolute rounded-lg mt-32 z-10 mb-3`}>
              <h2 className='mb-3 text-center'>{props.firstLineText}</h2>
              <hr className={`${theme.hrBorderOne} border outsetBorder mb-3`}></hr>
              {props.secondLineText}
              {props.thirdLineText}
              <hr className={`${theme.hrBorderOne} border outsetBorder mb-3`}></hr>
              <div className='justify-between flex'>
                <ResetButton
                  classprops={`main-button outline-button p-0 inline-block px-1 border-black border rounded text-sm ${theme.buttonBackgroundOne}`} text='New Game' styles='text-darkest-gray font-bold'
                  onClick={(event) => props.resetGame(event)} />
                <Button2
                  classprops={`outline-button-two p-0 px-1 border-black border rounded text-sm ${theme.buttonBackgroundTwo} h-6`}
                  text={props.secondButtonText} styles='font-bold text-darkest-gray'
                  onClick={(event) => props.closeRestartModal(event)} />
              </div>
            </div>
            <div className='w-1/3'></div>
          </div>
        </React.Fragment>
      )}
    </ThemeContext.Consumer>
  );
};