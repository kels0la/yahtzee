import React from 'react';

export const Dice = props => {

  // change from prop to variables for clean-look
  let { diceId, diceImage, checkboxName, diceChecked, onChange, disabled} = props;

  return (
    <React.Fragment>
      <div className='inline-flex text-center mx-1'>
        <input 
          type='checkbox' 
          disabled={disabled} 
          checked={diceChecked} 
          name={checkboxName} 
          className='hidden' 
          id={`${diceId}`} 
          onChange={onChange} 
        />
        <label htmlFor={`${diceId}`}>
          <img className='border border-light-gray rounded-lg shadowEffectSmall h-16 w-16 cursor-pointer' src={diceImage} alt='dice' />
        </label>
      </div>
    </React.Fragment>
  );
};