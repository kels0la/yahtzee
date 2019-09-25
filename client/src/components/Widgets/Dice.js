import React from 'react';

export const Dice = props => {

  // change from prop to variables for clean-look
  let { diceId, diceNumber } = props;

  return (
    <React.Fragment>
      <div className='pl-1 '>
        <input type="checkbox" className='hidden' id={`${diceId}`} />
        <label for={`${diceId}`}>
          <img className='border border-light-gray rounded-lg shadowEffectSmall h-16 w-16 cursor-pointer' src={diceNumber} alt='dice' />
        </label>
      </div>
    </React.Fragment>
  );
};