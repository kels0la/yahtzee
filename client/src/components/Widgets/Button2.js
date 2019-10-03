import React from 'react';

export const Button2 = props => {
  return (
    <button disabled={props.disabledFinalized} className='bg-red p-1 text-base border rounded border-light-gray text-darkest-gray hover:text-brand-green hover:bg-darkest-gray font-bold hover:' {...props}>
      <span className={`${props.styles}`}>{props.text}</span>
    </button>
  );
};