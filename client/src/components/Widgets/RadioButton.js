import React from 'react';

export const RadioButton = props => {
  return (
    <React.Fragment>
      <label>
        <input type="radio" name='selectingScore' className='mb-0'/>
      </label>
    </React.Fragment>
  );
};