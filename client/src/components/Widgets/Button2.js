import React from 'react';

export const Button2 = props => {
  return (
    <React.Fragment>
      <button disabled={props.disabledFinalized} className={props.classprops} {...props}>
        <span className={`${props.styles}`}>{props.text}</span>
      </button>
    </React.Fragment>
  );
};