import React from 'react';
import { RadioButton, Button2 } from './';

export const TableRow = (props) => {
  let { rowType, radioBtnValue, labelText, bottomFormatting, disabledScores, scores,
    disabledTakeScoreBtn, selectedOption, theme, id, displayedValues } = props;
  let rowOneClasses;
  let rowTwoClasses;
  let rowThreeClasses;
  let rowThreeDisplay;
  let scoreDisplay;
  let rowThree;
  const bottomBorder = `border-b-2 ${theme.specialBorder} pb-1`;
  const cantSubmit = (selectedOption === `` || disabledTakeScoreBtn === true);

  switch (rowType) {
    case `labelRow`:
      labelRowFormatting();
      break;
    case `firstRow`:
      firstRowFormatting();
      break;
    default:
      formatBottom();
      standardRowFormatting();
  }

  // check to see if it`s the bottom row. If so, add the border.
  function formatBottom() {
    if (bottomFormatting) {
      rowOneClasses = bottomBorder;
      rowTwoClasses = bottomBorder;
      rowThreeClasses = bottomBorder;
    } else {
      rowOneClasses = ``;
      rowTwoClasses = ``;
      rowThreeClasses = ``;
    }
  }
  // Four functions to format each type of row properly and keep the Switch statement clean.
  function labelRowFormatting() {
    labelText = `Category`;
    scoreDisplay = `Score`;
    rowThreeDisplay = `Select`;
    rowOneClasses = `border-t-2 border-b-2 ${theme.specialBorder} pb-1 text-sm `;
    rowTwoClasses = `border-t-2 border-b-2 pt-1 ${theme.specialBorder} pb-1 text-sm `;
    rowThreeClasses = `border-t-2 border-b-2 pt-1 ${theme.specialBorder} pb-1 text-sm `;
    rowThree = <div className={`w-1/3 table-cell pl-2 text-center 
    ${rowThreeClasses}`}>{rowThreeDisplay}</div>;
  }
  function firstRowFormatting() {
    scoreDisplay = 'Scorecard';
    labelText = ``;
    rowThreeDisplay =
      <Button2
        classprops={`outline-button-two p-0 px-1 ${theme.darkestBorder} 
        border rounded text-sm ${theme.specialBackground} h-6`}
        type="submit"
        styles={`font-bold ${theme.darkText}`}
        text='Take Score'
        // disabledtakescorebtn={disabledTakeScoreBtn ? 1 : 0} // An error in the console wanted this to return a 1 or 0 for true or false rather than the boolean value.
        disabled={cantSubmit}
      />;
    rowTwoClasses = `pb-3 font-bold text-xl font-header`;
    rowThreeClasses = `pt-1 pb-3 text-sm`;
    rowThree = <div className={`w-1/3 table-cell pl-2 text-right mr-1 
    ${rowThreeClasses}`}>{rowThreeDisplay}</div>;
  }
  function standardRowFormatting() {
    switch (props.disabledRadio) {
      case `onesDisabled`:
        scoreDisplay = scores.ones;
        rowThreeDisplay = <RadioButton id={id} disabledScore={disabledScores.ones}
          toggleHidden={disabledScores.onesHidden} radioBtnValue={radioBtnValue} displayedValue={displayedValues.ones}
          disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} theme={theme}
          />;
        break;
      case `twosDisabled`:
        scoreDisplay = scores.twos;
        rowThreeDisplay = <RadioButton id={id} disabledScore={disabledScores.twos}
          toggleHidden={disabledScores.twosHidden} radioBtnValue={radioBtnValue} displayedValue={displayedValues.twos}
          disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} theme={theme}
          />;
        break;
      case `threesDisabled`:
        scoreDisplay = scores.threes;
        rowThreeDisplay = <RadioButton id={id} disabledScore={disabledScores.threes}
          toggleHidden={disabledScores.threesHidden} radioBtnValue={radioBtnValue} displayedValue={displayedValues.threes}
          disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} theme={theme}/>;
        break;
      case `foursDisabled`:
        scoreDisplay = scores.fours;
        rowThreeDisplay = <RadioButton id={id} disabledScore={disabledScores.fours}
          toggleHidden={disabledScores.foursHidden} radioBtnValue={radioBtnValue} displayedValue={displayedValues.fours}
          disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} theme={theme}/>;
        break;
      case `fivesDisabled`:
        scoreDisplay = scores.fives;
        rowThreeDisplay = <RadioButton id={id} disabledScore={disabledScores.fives}
          toggleHidden={disabledScores.fivesHidden} radioBtnValue={radioBtnValue} displayedValue={displayedValues.fives}
          disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} theme={theme}/>;
        break;
      case `sixesDisabled`:
        scoreDisplay = scores.sixes;
        rowThreeDisplay = <RadioButton id={id} disabledScore={disabledScores.sixes}
          toggleHidden={disabledScores.sixesHidden} radioBtnValue={radioBtnValue} displayedValue={displayedValues.sixes}
          disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} theme={theme}/>;
        break;
      case `threeKindDisabled`:
        scoreDisplay = scores.threeKind;
        rowThreeDisplay = <RadioButton id={id} disabledScore={disabledScores.threeKind}
          toggleHidden={disabledScores.threeKindHidden} radioBtnValue={radioBtnValue} displayedValue={displayedValues.threeKind}
          disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} theme={theme}/>;
        break;
      case `fourKindDisabled`:
        scoreDisplay = scores.fourKind;
        rowThreeDisplay = <RadioButton id={id} disabledScore={disabledScores.fourKind}
          toggleHidden={disabledScores.fourKindHidden} radioBtnValue={radioBtnValue} displayedValue={displayedValues.fourKind}
          disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} theme={theme}/>;
        break;
      case `fullHouseDisabled`:
        scoreDisplay = scores.fullHouse;
        rowThreeDisplay = <RadioButton id={id} disabledScore={disabledScores.fullHouse}
          toggleHidden={disabledScores.fullHouseHidden} radioBtnValue={radioBtnValue} displayedValue={displayedValues.fullHouse}
          disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} theme={theme}/>;
        break;
      case `smallStraightDisabled`:
        scoreDisplay = scores.smallStraight;
        rowThreeDisplay = <RadioButton id={id} disabledScore={disabledScores.smallStraight}
          toggleHidden={disabledScores.smallStraightHidden} radioBtnValue={radioBtnValue} displayedValue={displayedValues.smallStraight}
          disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} theme={theme}/>;
        break;
      case `largeStraightDisabled`:
        scoreDisplay = scores.largeStraight;
        rowThreeDisplay = <RadioButton id={id} disabledScore={disabledScores.largeStraight}
          toggleHidden={disabledScores.largeStraightHidden} radioBtnValue={radioBtnValue} displayedValue={displayedValues.largeStraight}
          disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} theme={theme}/>;
        break;
      case `yahtzeeDisabled`:
        scoreDisplay = scores.yahtzee;
        rowThreeDisplay = <RadioButton id={id} disabledScore={disabledScores.yahtzee}
          toggleHidden={disabledScores.yahtzeeHidden} radioBtnValue={radioBtnValue} displayedValue={displayedValues.yahtzee}
          disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} theme={theme}/>;
        break;
      // case `doubleYahtzeeDisabled`:
      //   scoreDisplay = scores.doubleYahtzee;
      //   rowThreeDisplay = <RadioButton id={id} disabledScore={disabledScores.doubleYahtzee}
      //     toggleHidden={disabledScores.doubleYahtzeeHidden} radioBtnValue={radioBtnValue}
      //     disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} theme={theme} />;
      //   break;
      case `chanceDisabled`:
        scoreDisplay = scores.chance;
        rowThreeDisplay = <RadioButton id={id} disabledScore={disabledScores.chance}
          toggleHidden={disabledScores.chanceHidden} radioBtnValue={radioBtnValue} displayedValue={displayedValues.chance}
          disabledRadio={props.disabledRadio} handleChange={props.handleRadioButtonSelection} theme={theme}/>;
        break;
      default: return null;
    }
    rowThree = <div className={`w-1/3 table-cell pl-2 pt-1 text-center 
    ${rowThreeClasses}`}>{rowThreeDisplay}</div>;
  }

  return (
    <React.Fragment>
      <div className={`${theme.standardText} table-row w-full flex text-xs`}>
        <div className={`w-1/3 ${theme.standardText} table-cell pt-1 ${rowOneClasses}`}>
          {labelText}</div>
        <div className={`w-1/3 ${theme.standardText} table-cell pt-1 text-center 
          ${rowTwoClasses}`}>{scoreDisplay}</div>
        {rowThree}
      </div>
    </React.Fragment>
  );
};
