import React from 'react';

export const Button = props => {
  return (
    <button className='btn btn-primary:hover btn-primary' {...props}>
      <span className={`${props.styles}`}>{props.text}</span>
    </button>
  );
};