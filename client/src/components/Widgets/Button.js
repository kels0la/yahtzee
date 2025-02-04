import React from 'react';

export const Button = (props) => {
  return (
    <React.Fragment>
      <button disabled={props.disabledrolldicebtn} className={props.classprops} {...props} >
        <span className={`${props.styles}`}>{props.text}</span>
      </button>
    </React.Fragment>
  );
};
