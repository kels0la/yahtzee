import React from 'react';

export const Dice = props => {

  // change from prop to variables for clean-look
  let { diceId, diceImage, checkboxName, checked } = props;

  return (
    <React.Fragment>
      <div className='pl-1 '>
        <input type="checkbox" name={checkboxName} className='hidden' id={`${diceId}`} checked={checked} />
        <label for={`${diceId}`}>
          <img className='border border-light-gray rounded-lg shadowEffectSmall h-16 w-16 cursor-pointer' src={diceImage} alt='dice' />
        </label>
      </div>
    </React.Fragment>
  );
};