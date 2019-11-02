import React from 'react';

export const RadioButton = (props) => {
  return (
    <React.Fragment>
      <label>
        <input type="radio" hidden={props.toggleHidden} name='selectingScore' className='mb-0'
          disabled={props.disabledScore} value={props.radioBtnValue} onChange={props.handleChange}/>
      </label>
    </React.Fragment>
  );
};
