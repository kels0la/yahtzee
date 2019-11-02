import React from 'react';
import { ResetButton, Button2 } from '../Widgets';

export const ModalRestart = props => {

  let { theme } = props
  // currentTarget refers to the div where the listener is located and target refers to what is clicked
  // If they match (overlay is clicked), the modal is closed. This function is passed into the overlay div.
  const handleBackgroundClick = event => {
    if (event.target === event.currentTarget) props.closeRestartModal(event);
  };
  
  return (
    <React.Fragment>
      <div onClick={(event) => handleBackgroundClick(event)} className='overlay'>
        <div className='w-1/3'></div>
        <div className={`w-1/3 modalTop ${theme.background} ml-auto mr-auto p-3 border ${theme.standardBorder} ${theme.shadowEffect} pin-x absolute rounded-lg mt-32 z-10 mb-3`}>
          <h2 className={`mb-3 text-center ${theme.standardText}`}>{props.firstLineText}</h2>
          <hr className={`${theme.specialBorder} border outsetBorder mb-3`}></hr>
          {props.secondLineText}
          {props.thirdLineText}
          <hr className={`${theme.specialBorder} border outsetBorder mb-3`}></hr>
          <div className='justify-between flex'>
            <ResetButton
              classprops={`main-button outline-button p-0 inline-block px-1 ${theme.darkestBorder} border rounded text-sm ${theme.specialBackground}`} text='New Game' styles={`${theme.darkText} font-bold`}
              onClick={(event) => props.resetGame(event)} />
            <Button2
              classprops={`outline-button-two p-0 px-1 ${theme.darkestBorder} border rounded text-sm ${theme.lightBackground} h-6`}
              text={props.secondButtonText} styles={`${theme.darkText} font-bold`}
              onClick={(event) => props.closeRestartModal(event)} />
          </div>
        </div>
        <div className='w-1/3'></div>
      </div>
    </React.Fragment>
  );
};