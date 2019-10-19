import React from 'react';

export const ResetButton = props => {
  return (
    <React.Fragment>
      <button className={props.classprops} {...props} >
        <span className={`${props.styles}`}>{props.text}</span>
      </button>
    </React.Fragment>
  );
};