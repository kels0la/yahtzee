import React from 'react';

export const Button2 = (props) => {
  return (
    <React.Fragment>
      <button disabled={props.disabledtakescorebtn} className={props.classprops} {...props} {...props.other}>
        <span className={`${props.styles}`}>{props.text}</span>
      </button>
    </React.Fragment>
  );
};
