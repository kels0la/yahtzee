import React from 'react';
import { RadioButton, Button2 } from './';

export const TableRow = props => {

  let { rowType, radioBtnValue, labelText, bottomFormatting, disabledScores, scores, disabledTakeScoreBtn, selectedOption } = props;
  let rowOneClasses, rowTwoClasses, rowThreeClasses, rowThreeDisplay, scoreDisplay, rowThree;
  let bottomBorder = 'border-b-2 border-brand-green pb-1';
  const cantSubmit = (selectedOption === '' || disabledTakeScoreBtn === true);
  

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
    switch (props.radioBtnValue) {
      case 'runningTopScore':
        scoreDisplay = scores.runningTop;
        break;
      case 'bonusScore':
        scoreDisplay = scores.bonus;
        break;
      case 'totalTopScore':
        scoreDisplay = scores.totalTop;
        break;
      case 'totalBottomScore':
        scoreDisplay = scores.totalBottom;
        break;
      case 'totalTopOnBottom':
        scoreDisplay = scores.totalTop;
        break;
      default: console.log("Error rendering props.radioBtnValue")
    }
    rowThreeDisplay = ''
    rowThree = <div className={`w-1/3 table-cell pl-2 pt-1 text-center ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  };
  function finalRowFormatting() {
    scoreDisplay = scores.totalScore
    rowThreeDisplay =
      <Button2
        classprops='outline-button-two p-0 px-1 border-black border rounded text-sm bg-brand-green h-6'
        type="submit"
        styles='font-bold text-darkest-gray'
        text='Take Score'
        // disabledtakescorebtn={disabledTakeScoreBtn ? 1 : 0} // An error in the console wanted this to return a 1 or 0 for true or false rather than the boolean value.
        disabled={cantSubmit}
      />;
    rowOneClasses = 'pt-3 -mt-1px text-sm font-bold';
    rowTwoClasses = 'pt-2 -mt-1px text-sm font-bold';
    rowThreeClasses = 'pt-2 text-sm';
    rowThree = <div className={`w-1/3 table-cell pl-2 text-right ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  };
  function standardRowFormatting() {
    switch (props.disabledRadio) {
      case 'onesDisabled':
        scoreDisplay = scores.ones
        rowThreeDisplay = <RadioButton disabledScore={disabledScores.ones} toggleHidden={disabledScores.onesHidden} radioBtnValue={radioBtnValue} disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} handleCheckboxChange={props.handleCheckboxChange} />;
        break;
      case 'twosDisabled':
        scoreDisplay = scores.twos
        rowThreeDisplay = <RadioButton disabledScore={disabledScores.twos} toggleHidden={disabledScores.twosHidden} radioBtnValue={radioBtnValue} disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} />;
        break;
      case 'threesDisabled':
        scoreDisplay = scores.threes
        rowThreeDisplay = <RadioButton disabledScore={disabledScores.threes} toggleHidden={disabledScores.threesHidden} radioBtnValue={radioBtnValue} disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} />;
        break;
      case 'foursDisabled':
        scoreDisplay = scores.fours
        rowThreeDisplay = <RadioButton disabledScore={disabledScores.fours} toggleHidden={disabledScores.foursHidden} radioBtnValue={radioBtnValue} disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} />;
        break;
      case 'fivesDisabled':
        scoreDisplay = scores.fives
        rowThreeDisplay = <RadioButton disabledScore={disabledScores.fives} toggleHidden={disabledScores.fivesHidden} radioBtnValue={radioBtnValue} disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} />;
        break;
      case 'sixesDisabled':
        scoreDisplay = scores.sixes
        rowThreeDisplay = <RadioButton disabledScore={disabledScores.sixes} toggleHidden={disabledScores.sixesHidden} radioBtnValue={radioBtnValue} disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} />;
        break;
      case 'threeKindDisabled':
        scoreDisplay = scores.threeKind
        rowThreeDisplay = <RadioButton disabledScore={disabledScores.threeKind} toggleHidden={disabledScores.threeKindHidden} radioBtnValue={radioBtnValue} disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} />;
        break;
      case 'fourKindDisabled':
        scoreDisplay = scores.fourKind
        rowThreeDisplay = <RadioButton disabledScore={disabledScores.fourKind} toggleHidden={disabledScores.fourKindHidden} radioBtnValue={radioBtnValue} disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} />;
        break;
      case 'fullHouseDisabled':
        scoreDisplay = scores.fullHouse
        rowThreeDisplay = <RadioButton disabledScore={disabledScores.fullHouse} toggleHidden={disabledScores.fullHouseHidden} radioBtnValue={radioBtnValue} disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} />;
        break;
      case 'smallStraightDisabled':
        scoreDisplay = scores.smallStraight
        rowThreeDisplay = <RadioButton disabledScore={disabledScores.smallStraight} toggleHidden={disabledScores.smallStraightHidden} radioBtnValue={radioBtnValue} disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} />;
        break;
      case 'largeStraightDisabled':
        scoreDisplay = scores.largeStraight
        rowThreeDisplay = <RadioButton disabledScore={disabledScores.largeStraight} toggleHidden={disabledScores.largeStraightHidden} radioBtnValue={radioBtnValue} disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} />;
        break;
      case 'yahtzeeDisabled':
        scoreDisplay = scores.yahtzee
        rowThreeDisplay = <RadioButton disabledScore={disabledScores.yahtzee} toggleHidden={disabledScores.yahtzeeHidden} radioBtnValue={radioBtnValue} disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} />;
        break;
      case 'doubleYahtzeeDisabled':
        scoreDisplay = scores.doubleYahtzee
        rowThreeDisplay = <RadioButton disabledScore={disabledScores.doubleYahtzee} toggleHidden={disabledScores.doubleYahtzeeHidden} radioBtnValue={radioBtnValue} disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} />;
        break;
      case 'chanceDisabled':
        scoreDisplay = scores.chance
        rowThreeDisplay = <RadioButton disabledScore={disabledScores.chance} toggleHidden={disabledScores.chanceHidden} radioBtnValue={radioBtnValue} disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} />;
        break;
      default:
        console.log("Error pulling in props.disabledRadio")
    };
    rowThree = <div className={`w-1/3 table-cell pl-2 pt-1 text-center ${rowThreeClasses}`}>{rowThreeDisplay}</div>
  };

  return (
    <React.Fragment>
      <div className='table-row w-full flex text-xs'>
        <div className={`w-1/3 table-cell pt-1 ${rowOneClasses}`}>{labelText}</div>
        <div className={`w-1/3 table-cell pt-1 text-center pl-2 ${rowTwoClasses}`}>{scoreDisplay}</div>
        {rowThree}
      </div>
    </React.Fragment>
  );
};