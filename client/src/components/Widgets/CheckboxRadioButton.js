import React from 'react';

export const CheckboxRadioButton = (props) => {
  return (
    <React.Fragment>
      <label>
        <input type='checkbox' checked={props.isChecked} name="myCheckbox" id={props.id} hidden={props.toggleHidden} className='mb-0'
          disabled={props.disabledScore} value={props.radioBtnValue} onClick={props.handleChange}/>
      </label>
    </React.Fragment>
  );
};
