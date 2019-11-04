import React from 'react';

export const RadioButton = (props) => {
  // Now I pass in the values to display as the amount they would take. With this, the game is complete.
  return (
    <React.Fragment>
      {props.toggleHidden === true
        ?
        <div className={`h-3`}></div>
        :
        <React.Fragment>
          <div className='text-center'>
            <input type="radio" id={props.id} name='selectingScore' className={`mb-0 hidden text-center`}
              disabled={props.disabledScore} value={props.radioBtnValue} onChange={props.handleChange} />
            <label className='text-center cursor-pointer' htmlFor={props.id} hidden={props.toggleHidden}>
              {/* <img src={props.diceFiveImage} className='h-4 w-4 cursor-pointer' alt='diceImage'></img> */}
              {props.displayedValue === 0
                ?
                <span className={`rounded h-3 text-center px-1`}>{props.displayedValue}</span>
                :
                <span className={`rounded h-3 text-center px-1 ${props.theme.specialText}`}>{props.displayedValue}</span>
              }
            </label>
          </div>
        </React.Fragment>
      }

    </React.Fragment>
  );
};
