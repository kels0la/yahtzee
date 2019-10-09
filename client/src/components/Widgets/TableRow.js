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
    rowOneClasses = 'border-t-2 border-b-2 border-brand-green pb-1 text-sm text-yahtzee-red';
    rowTwoClasses = 'border-t-2 border-b-2 pt-1 border-brand-green pb-1 text-sm text-yahtzee-red';
    rowThreeClasses = 'border-t-2 border-b-2 pt-1 border-brand-green pb-1 text-sm text-yahtzee-red';
    rowThree = <div className={`w-1/3 table-cell pl-2 text-center ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  };
  function noSelectionRowFormatting() {
    rowThreeDisplay = ''
    rowThree = <div className={`w-1/3 table-cell pl-2 pt-1 text-center ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  };
  function finalRowFormatting() {
    rowThreeDisplay = <Button2 classprops='outline-button-two p-0 px-1 border-black border rounded text-sm bg-brand-green h-6' type="submit" styles='font-bold text-darkest-gray' text='Take Score' disabledFinalized={props.disabledFinalized} />
    rowOneClasses = 'pt-3 -mt-1px text-sm font-bold';
    rowTwoClasses = 'pt-2 -mt-1px text-sm font-bold';
    rowThreeClasses = 'pt-2 text-sm';
    rowThree = <div className={`w-1/3 table-cell pl-2 text-right ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  };
  function standardRowFormatting() {
    rowThreeDisplay = <RadioButton disabledRadio={props.disabledRadio} />;
    rowThree = <div className={`w-1/3 table-cell pl-2 pt-1 text-center ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  };

  return (
    <React.Fragment>
      <div className='table-row w-full flex text-xs'>
        <div className={`w-1/3 table-cell pt-1 ${rowOneClasses}`}>{labelText}</div>
        <div className={`w-1/3 table-cell text-center pl-2 ${rowTwoClasses}`} id={`${rowTwoId}`}>{scoreDisplay}</div>
        {rowThree}
      </div>
    </React.Fragment>
  );
};