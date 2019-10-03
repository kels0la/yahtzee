import React from 'react';

export const Button = props => {
  return (
    <button disabled={props.disabledButton} className='btn btn-primary:hover btn-primary' {...props}>
      <span className={`${props.styles}`}>{props.text}</span>
    </button>
  );
};