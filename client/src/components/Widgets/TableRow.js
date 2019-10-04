import React from 'react';
import { RadioButton, Button2 } from './';

export const TableRow = props => {

  let { rowType, rowTwoId, labelText, bottomFormatting } = props;
  let rowOneClasses, rowTwoClasses, rowThreeClasses, rowThreeDisplay, scoreDisplay, rowThree;
  let bottomBorder = 'border-b-2 border-brand-green pb-1';

  switch (rowType) {
    case 'labelRow':
      labelRowFormatting();
      break;
    case 'noSelectionRow':
      formatBottom()
      noSelectionRowFormatting()
      break;
    case 'finalRow':
      finalRowFormatting()
      break;
    default:
      formatBottom()
      standardRowFormatting()
  };

  // check to see if it's the bottom row. If so, add the border.
  function formatBottom() {
    if (bottomFormatting) {
      rowOneClasses = bottomBorder;
      rowTwoClasses = bottomBorder;
      rowThreeClasses = bottomBorder;
    } else {
      rowOneClasses = '';
      rowTwoClasses = '';
      rowThreeClasses = '';
    };
  };
  // Four functions to format each type of row properly and keep the Switch statement clean.
  function labelRowFormatting() {
    labelText = 'Label';
    scoreDisplay = 'Score';
    rowThreeDisplay = 'Select'
    rowOneClasses = 'border-b-2 border-brand-green pb-1 text-base text-red';
    rowTwoClasses = 'border-b-2 border-brand-green pb-1 text-base text-red';
    rowThreeClasses = 'border-b-2 border-brand-green pb-1 text-base text-red';
    rowThree = <div className={`table-cell pl-2 text-center ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  };
  function noSelectionRowFormatting() {
    rowThreeDisplay = ''
    rowThree = <div className={`table-cell pl-2 text-center ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  };
  function finalRowFormatting() {
    rowThreeDisplay = <Button2 type="submit" text='Finalize Turn' disabledFinalized={props.disabledFinalized} />
    rowOneClasses = 'font-bold';
    rowTwoClasses = 'pt-1 font-bold';
    rowThreeClasses = 'pt-1';
    rowThree = <div className={`table-cell pl-2 text-center ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  };
  function standardRowFormatting() {
    rowThreeDisplay = <RadioButton disabledRadio={props.disabledRadio} />;
    rowThree = <div className={`table-cell pl-2 text-center ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  };

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