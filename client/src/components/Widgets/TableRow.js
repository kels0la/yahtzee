import React from 'react';
import { RadioButton, Button2 } from './';

export const TableRow = props => {

  let { rowType, rowTwoId, labelText, bottomFormatting } = props;
  let rowOneClasses, rowTwoClasses, rowThreeClasses, rowThreeDisplay, scoreDisplay, rowThree;
  let bottomBorder = 'border-b-2 border-red pb-1';

  // check to see if it's the bottom row. If so, add the border.
  function formatBottom() {
    if (bottomFormatting){
      rowOneClasses = bottomBorder;
      rowTwoClasses = bottomBorder;
      rowThreeClasses = bottomBorder;
    } else {
      rowOneClasses = '';
      rowTwoClasses = '';
      rowThreeClasses = '';
    };
  };

  // Render depending on the row type prop passed in. Could use Switch Statement, too.
  if (rowType === 'labelRow') {
    labelText = 'Label';
    scoreDisplay = 'Score';
    rowThreeDisplay = 'Select'
    rowOneClasses = 'border-b-2 border-red pb-1 text-base text-red';
    rowTwoClasses = 'border-b-2 border-red pb-1 text-base text-red';
    rowThreeClasses = 'border-b-2 border-red pb-1 text-base text-red';
    rowThree = <div className={`table-cell pl-2 text-center ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  } 
  // The rows that are unselectable and do not include the radio button
  else if (rowType === 'noSelectionRow') {
    formatBottom()
    rowThreeDisplay = ''
    rowThree = <div className={`table-cell pl-2 text-center ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  } 
  // The final row in the grid
  else if (rowType === 'finalRow') {
    rowThreeDisplay = <Button2 type="submit" text='Finalize Turn'/>
    rowOneClasses = 'font-bold';
    rowTwoClasses = 'pt-1 font-bold';
    rowThreeClasses = 'pt-1';
    rowThree = <div className={`table-cell pl-2 text-center ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  } 
  // The standard row without any extra formatting or variation
  else {
    formatBottom()
    rowThreeDisplay = <RadioButton />;
    rowThree = <div className={`table-cell pl-2 text-center ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  }

  return (
    <React.Fragment>
      <div className='table-row'>
        <div className={`table-cell pt-1 ${rowOneClasses}`}>{labelText}</div>
        <div className={`table-cell text-center pl-2 ${rowTwoClasses}`} id={`${rowTwoId}`}>{scoreDisplay}</div>
        {rowThree}
      </div>
    </React.Fragment>
  );
};