import React from 'react';

export const Dice = (props) => {
  // change from prop to variables for clean-look
  const { diceId, diceImage, checkboxName, diceChecked, onChange, disabled,
    endAnimation, shouldShake, shakeNumber} = props;

  return (
    <React.Fragment>
      <div className='inline-flex text-center mx-1'>
        <input
          type='checkbox'
          disabled={disabled}
          checked={diceChecked}
          name={checkboxName}
          className={'hidden'}
          id={`${diceId}`}
          onChange={onChange}
        />
        <label htmlFor={`${diceId}`}>
          <img onAnimationEnd={endAnimation} className={shouldShake ?
             `${shakeNumber} border-sm bg-light-gray border-light-gray rounded-lg shadowEffectSmall 
             h-12 w-12 cursor-pointer`:
             `border-sm bg-light-gray border-light-gray rounded-lg shadowEffectSmall h-12 w-12 cursor-pointer`}
          src={diceImage} alt='dice' />
        </label>
      </div>
    </React.Fragment>
  );
};
