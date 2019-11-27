import React from 'react';
// eslint-disable-next-line no-unused-vars
import MainPage from './MainPage';

import { themes } from '../../components/Themes/ThemeContext';

import diceOneImage from '../../assets/images/diceOne.png';
import diceTwoImage from '../../assets/images/diceTwo.png';
import diceThreeImage from '../../assets/images/diceThree.png';
import diceFourImage from '../../assets/images/diceFour.png';
import diceFiveImage from '../../assets/images/diceFive.png';
import diceSixImage from '../../assets/images/diceSix.png';

class MainPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceOneValue: 0,
      diceTwoValue: 0,
      diceThreeValue: 0,
      diceFourValue: 0,
      diceFiveValue: 0,
      diceOneImage: diceOneImage,
      diceTwoImage: diceOneImage,
      diceThreeImage: diceOneImage,
      diceFourImage: diceOneImage,
      diceFiveImage: diceOneImage,
      diceOneChecked: false,
      diceTwoChecked: false,
      diceThreeChecked: false,
      diceFourChecked: false,
      diceFiveChecked: false,
      shakeDiceOne: false,
      shakeDiceTwo: false,
      shakeDiceThree: false,
      shakeDiceFour: false,
      shakeDiceFive: false,
      turnNumber: 0,
      overallTurns: 0,
      disabledDice: [true, true, true, true, true],
      disabledRollDiceBtn: false,
      disabledTakeScoreBtn: true,
      disabledScores: {
        ones: true, onesHidden: false,
        twos: true, twosHidden: false,
        threes: true, threesHidden: false,
        fours: true, foursHidden: false,
        fives: true, fivesHidden: false,
        sixes: true, sixesHidden: false,
        threeKind: true, threeKindHidden: false,
        fourKind: true, fourKindHidden: false,
        fullHouse: true, fullHouseHidden: false,
        smallStraight: true, smallStraightHidden: false,
        largeStraight: true, largeStraightHidden: false,
        yahtzee: true, yahtzeeHidden: false,
        chance: true, chanceHidden: false,
      },
      displayedValues: {
        ones: 0,
        twos: 0,
        threes: 0,
        fours: 0,
        fives: 0,
        sixes: 0,
        threeKind: 0,
        fourKind: 0,
        fullHouse: 0,
        smallStraight: 0,
        largeStraight: 0,
        yahtzee: 0,
        chance: 0,
      },
      scores: {
        ones: 0,
        twos: 0,
        threes: 0,
        fours: 0,
        fives: 0,
        sixes: 0,
        threeKind: 0,
        fourKind: 0,
        fullHouse: 0,
        smallStraight: 0,
        largeStraight: 0,
        yahtzee: 0,
        chance: 0,
        totalScore: 0,
        runningTop: 0,
        bonus: 0,
        totalTop: 0,
        totalBottom: 0,
      },
      selectedOption: '',
      showEndGameModal: false,
      showRestartModal: false,
      showHowToPlayModal: false,
      theme: themes.listoka,
    };
  }

  // Theme is toggled based upon the themeType parameter
  toggleTheme = (event, themeType) => {
    event.preventDefault();
    let updatedTheme;

    if (themeType === 'matador') {
      updatedTheme = themes.matador;
    } else if (themeType === 'listoka') {
      updatedTheme = themes.listoka;
    } else if (themeType === 'light') {
      updatedTheme = themes.light;
    } else updatedTheme = themes.listoka;

    this.setState({ theme: updatedTheme });
  };

  // Based upon the Radio Button selected, this.state.selectedOption is changed
  handleRadioButtonSelection = (event) => {
    const value = event.target.value;
    this.setState({
      selectedOption: value,
    });
  };

  // onClick of Button function capture this.state.selectedOption
  // and passes it into the scoreSelectionLogic() function
  handleSubmitSelection = (event) => {
    event.preventDefault();
    this.scoreSelectionLogic(this.state.selectedOption);
    this.unCheckDice();
  }

  // Depending on the selected Radio Button option this.state.selectedOption changes based upon what is clicked
  // and the proper function is called, where the score is checked and added.
  scoreSelectionLogic = (selectedOption) => {
    switch (selectedOption) {
      case 'onesScore':
        this.determineOnesScore();
        break;
      case 'twosScore':
        this.determineTwosScore();
        break;
      case 'threesScore':
        this.determineThreesScore();
        break;
      case 'foursScore':
        this.determineFoursScore();
        break;
      case 'fivesScore':
        this.determineFivesScore();
        break;
      case 'sixesScore':
        this.determineSixesScore();
        break;
      case 'threeKindScore':
        this.determineThreeKindScore();
        break;
      case 'fourKindScore':
        this.determineFourKindScore();
        break;
      case 'fullHouseScore':
        this.determineFullHouseScore();
        break;
      case 'smallStraightScore':
        this.determineSmallStraightScore();
        break;
      case 'largeStraightScore':
        this.determineLargeStraightScore();
        break;
      case 'yahtzeeScore':
        this.determineYahtzeeScore();
        break;
      case 'chanceScore':
        this.determineChanceScore();
        break;
      default: return null;
    }
  };

  // The following "determineScores" functions pertain to each Yahtzee scoretype
  determineOnesScore = () => {
    const diceArray = [this.state.diceOneValue, this.state.diceTwoValue,
    this.state.diceThreeValue, this.state.diceFourValue,
    this.state.diceFiveValue];
    // This filter function returns a new array with values that only include 1.
    const diceArrayFiltering = diceArray.filter((diceValue) => {
      return diceValue === 1;
    });
    // With this new array, we capture the length and multiply it by the dice number.
    // In this case, the dice number is 1, so it is unnecessary
    const onesScore = diceArrayFiltering.length;
    // This updateScore object takes in the current state with ...this.state.scores
    // And then updates the relevant scores based upon the onesScore variable.
    const updatedScore = {
      ...this.state.scores,
      ones: onesScore,
      totalTop: this.state.scores.totalTop + onesScore,
      runningTop: this.state.scores.runningTop + onesScore,
      totalScore: this.state.scores.totalScore + onesScore,
    };
    // This updateDisabledScores object captures the current state of the disabledScores object in state
    // And disables selection of other radio buttons until the dice is rolled
    // And hides the radio button for ones by turning onesHidden into true.
    const updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true,
      sixes: true, threeKind: true, fourKind: true, fullHouse: true,
      smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      onesHidden: true,
    };
    // We then update relevant state in the setScoreTakingState() function
    // By passing in these objects as arguments
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineTwosScore = () => {
    const diceArray = [this.state.diceOneValue, this.state.diceTwoValue,
    this.state.diceThreeValue, this.state.diceFourValue,
    this.state.diceFiveValue];
    const diceArrayFiltering = diceArray.filter((diceValue) => {
      return diceValue === 2;
    });

    let twosScore = diceArrayFiltering.length;
    twosScore *= 2;

    const updatedScore = {
      ...this.state.scores,
      twos: twosScore,
      totalTop: this.state.scores.totalTop + twosScore,
      runningTop: this.state.scores.runningTop + twosScore,
      totalScore: this.state.scores.totalScore + twosScore,
    };
    const updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true,
      sixes: true, threeKind: true, fourKind: true, fullHouse: true,
      smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      twosHidden: true,
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineThreesScore = () => {
    const diceArray = [this.state.diceOneValue, this.state.diceTwoValue,
    this.state.diceThreeValue, this.state.diceFourValue,
    this.state.diceFiveValue];
    const diceArrayFiltering = diceArray.filter((diceValue) => {
      return diceValue === 3;
    });
    let threesScore = diceArrayFiltering.length;
    threesScore = threesScore * 3;

    const updatedScore = {
      ...this.state.scores,
      threes: threesScore,
      totalTop: this.state.scores.totalTop + threesScore,
      runningTop: this.state.scores.runningTop + threesScore,
      totalScore: this.state.scores.totalScore + threesScore,
    };
    const updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true,
      sixes: true, threeKind: true, fourKind: true, fullHouse: true,
      smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      threesHidden: true,
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineFoursScore = () => {
    const diceArray = [this.state.diceOneValue, this.state.diceTwoValue,
    this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue];
    const diceArrayFiltering = diceArray.filter((diceValue) => {
      return diceValue === 4;
    });
    let foursScore = diceArrayFiltering.length;
    foursScore = foursScore * 4;

    const updatedScore = {
      ...this.state.scores,
      fours: foursScore,
      totalTop: this.state.scores.totalTop + foursScore,
      runningTop: this.state.scores.runningTop + foursScore,
      totalScore: this.state.scores.totalScore + foursScore,
    };
    const updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true,
      sixes: true, threeKind: true, fourKind: true, fullHouse: true,
      smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      foursHidden: true,
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineFivesScore = () => {
    const diceArray = [this.state.diceOneValue, this.state.diceTwoValue,
    this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue];
    const diceArrayFiltering = diceArray.filter((diceValue) => {
      return diceValue === 5;
    });
    let fivesScore = diceArrayFiltering.length;
    fivesScore = fivesScore * 5;

    const updatedScore = {
      ...this.state.scores,
      fives: fivesScore,
      totalTop: this.state.scores.totalTop + fivesScore,
      runningTop: this.state.scores.runningTop + fivesScore,
      totalScore: this.state.scores.totalScore + fivesScore,
    };
    const updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true,
      sixes: true, threeKind: true, fourKind: true, fullHouse: true,
      smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      fivesHidden: true,
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineSixesScore = () => {
    const diceArray = [this.state.diceOneValue, this.state.diceTwoValue,
    this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue];
    const diceArrayFiltering = diceArray.filter((diceValue) => {
      return diceValue === 6;
    });
    let sixesScore = diceArrayFiltering.length;
    sixesScore = sixesScore * 6;

    const updatedScore = {
      ...this.state.scores,
      sixes: sixesScore,
      totalTop: this.state.scores.totalTop + sixesScore,
      runningTop: this.state.scores.runningTop + sixesScore,
      totalScore: this.state.scores.totalScore + sixesScore,
    };
    const updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true,
      sixes: true, threeKind: true, fourKind: true, fullHouse: true,
      smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      sixesHidden: true,
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineThreeKindScore = () => {
    const diceArray = [this.state.diceOneValue, this.state.diceTwoValue,
    this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue];
    let threeKindScore = 0;
    // We sort the array by values
    const arr = diceArray.sort();
    // With these sorted values, we determine if there are any 3 of the same values
    // If there are, we add up the array with a for loop
    if ((arr[0] === arr[1] && arr[0] === arr[2]) || (arr[1] === arr[2] &&
      arr[1] === arr[3]) || (arr[2] === arr[3] && arr[2] === arr[4])) {
      for (let i = 0; i < arr.length; i++) {
        threeKindScore += arr[i];
      }
    } else threeKindScore = 0;

    const updatedScore = {
      ...this.state.scores,
      threeKind: threeKindScore,
      totalBottom: this.state.scores.totalBottom + threeKindScore,
      totalScore: this.state.scores.totalScore + threeKindScore,
    };
    const updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true,
      sixes: true, threeKind: true, fourKind: true, fullHouse: true,
      smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      threeKindHidden: true,
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineFourKindScore = () => {
    const diceArray = [this.state.diceOneValue, this.state.diceTwoValue,
    this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue];
    let fourKindScore;
    const arr = diceArray.sort();
    // The only difference between this and threeKind is we don't use a forloop here.
    if ((arr[0] === arr[1] && arr[0] === arr[2] && arr[0] === arr[3]) ||
      (arr[1] === arr[2] && arr[1] === arr[3] && arr[1] === arr[4])) {
      fourKindScore = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
    } else fourKindScore = 0;

    const updatedScore = {
      ...this.state.scores,
      fourKind: fourKindScore,
      totalBottom: this.state.scores.totalBottom + fourKindScore,
      totalScore: this.state.scores.totalScore + fourKindScore,
    };
    const updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true,
      sixes: true, threeKind: true, fourKind: true, fullHouse: true,
      smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      fourKindHidden: true,
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineFullHouseScore = () => {
    const diceArray = [this.state.diceOneValue, this.state.diceTwoValue,
    this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue];
    let fullHouseScore;
    const arr = diceArray.sort();
    // Much like 3 and 4 of a kind, the array is sorted.
    // With this sorted array, we can determine if there are 3 in a row && 2 in a row. There are only two ways that can be sorted
    if ((arr[0] === arr[1] && arr[0] === arr[2] && arr[3] === arr[4]) ||
      (arr[0] === arr[1] && arr[2] === arr[3] && arr[2] === arr[4])) {
      fullHouseScore = 25;
    } else fullHouseScore = 0;

    const updatedScore = {
      ...this.state.scores,
      fullHouse: fullHouseScore,
      totalBottom: this.state.scores.totalBottom + fullHouseScore,
      totalScore: this.state.scores.totalScore + fullHouseScore,
    };
    const updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true,
      threeKind: true, fourKind: true, fullHouse: true, smallStraight: true,
      largeStraight: true, yahtzee: true, chance: true,
      fullHouseHidden: true,
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  }

  determineSmallStraightScore = () => {
    const diceArray = [this.state.diceOneValue, this.state.diceTwoValue,
    this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue];
    let smallStraightScore;
    const arr = diceArray;
    // Using the array.includes() method, we can determine if there is a small straight. There are 3 different scenarios
    if ((arr.includes(1) && arr.includes(2) && arr.includes(3) && arr.includes(4)) ||
      (arr.includes(2) && arr.includes(3) && arr.includes(4) && arr.includes(5)) ||
      (arr.includes(3) && arr.includes(4) && arr.includes(5) && arr.includes(6))
    ) {
      smallStraightScore = 30;
    } else smallStraightScore = 0;

    const updatedScore = {
      ...this.state.scores,
      smallStraight: smallStraightScore,
      totalBottom: this.state.scores.totalBottom + smallStraightScore,
      totalScore: this.state.scores.totalScore + smallStraightScore,
    };
    const updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true,
      threeKind: true, fourKind: true, fullHouse: true, smallStraight: true,
      largeStraight: true, yahtzee: true, chance: true,
      smallStraightHidden: true,
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineLargeStraightScore = () => {
    const diceArray = [this.state.diceOneValue, this.state.diceTwoValue,
    this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue];
    let largeStraightScore;
    const arr = diceArray;

    if ((arr.includes(1) && arr.includes(2) && arr.includes(3) &&
      arr.includes(4) && arr.includes(5)) || (arr.includes(2) && arr.includes(3) &&
        arr.includes(4) && arr.includes(5) && arr.includes(6))
    ) {
      largeStraightScore = 40;
    } else largeStraightScore = 0;

    const updatedScore = {
      ...this.state.scores,
      largeStraight: largeStraightScore,
      totalBottom: this.state.scores.totalBottom + largeStraightScore,
      totalScore: this.state.scores.totalScore + largeStraightScore,
    };
    const updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true,
      sixes: true, threeKind: true, fourKind: true, fullHouse: true,
      smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      largeStraightHidden: true,
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineYahtzeeScore = () => {
    const diceArray = [this.state.diceOneValue, this.state.diceTwoValue,
    this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue];
    let yahtzeeScore;
    // Using the array.every() function, we can determine if every dice has the same value
    // If they do, the checkingYahtzeeArray variable returns true. If it does, yahtzeeScore is set to 50.
    const checkingYahtzeeArray = diceArray.every((diceValue) => diceValue === diceArray[0]);

    if (checkingYahtzeeArray === true) {
      yahtzeeScore = 50;
    } else yahtzeeScore = 0;

    const updatedScore = {
      ...this.state.scores,
      yahtzee: yahtzeeScore,
      totalBottom: this.state.scores.totalBottom + yahtzeeScore,
      totalScore: this.state.scores.totalScore + yahtzeeScore,
    };
    const updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true,
      threeKind: true, fourKind: true, fullHouse: true, smallStraight: true,
      largeStraight: true, yahtzee: true, chance: true,
      yahtzeeHidden: true,
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineChanceScore = () => {
    // This is simply adding up the five dice values from state.
    const chanceScore = this.state.diceOneValue + this.state.diceTwoValue +
      this.state.diceThreeValue + this.state.diceFourValue + this.state.diceFiveValue;
    const updatedScore = {
      ...this.state.scores,
      chance: chanceScore,
      totalBottom: this.state.scores.totalBottom + chanceScore,
      totalScore: this.state.scores.totalScore + chanceScore,
    };
    const updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true,
      threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true,
      yahtzee: true, chance: true,
      chanceHidden: true,
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  // This function is called after scores are checked. Takes in two parameters based on updating the score and disabling/hiding relevant fields
  setScoreTakingState = (updatedScore, updateDisabledScores) => {
    this.setState({
      scores: updatedScore,
      disabledScores: updateDisabledScores,
      turnNumber: 0,
      disabledDice: [true, true, true, true, true],
      disabledTakeScoreBtn: true,
      selectedOption: '',
      overallTurns: this.state.overallTurns + 1,
      disabledRollDiceBtn: false,
    });
    // setTimeout is needed to make sure bonus score is updated after an initial score is taken.
    setTimeout(() => {
      this.checkBonus();
      this.checkEndGame();
    }, 100);
  };

  // Checks the runningTop score to see if bonus should be added when player takes score
  checkBonus = () => {
    let updatedScoresWithBonus;
    if (this.state.scores.runningTop > 62 && this.state.scores.bonus === 0) {
      updatedScoresWithBonus = {
        ...this.state.scores,
        bonus: 35,
        totalTop: this.state.scores.totalTop + 35,
        totalScore: this.state.scores.totalScore + 35,
      };
      this.setState({
        scores: updatedScoresWithBonus,
      });
    } else return;
  };

  calculateValues = () => {
    const diceArray = [this.state.diceOneValue, this.state.diceTwoValue,
      this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue];

    const onesFiltering = diceArray.filter((onesValue) => {return onesValue === 1;});
    const onesScore = onesFiltering.length;

    const twosFiltering = diceArray.filter((twosValue) => {return twosValue === 2;});
    const twosScore = twosFiltering.length*2;

    const threesFiltering = diceArray.filter((threesValues) => {return threesValues === 3;});
    const threesScore = threesFiltering.length*3;

    const foursFiltering = diceArray.filter((foursValue) => {return foursValue === 4;});
    const foursScore = foursFiltering.length*4;

    const fivesFiltering = diceArray.filter((fivesValue) => {return fivesValue === 5;});
    const fivesScore = fivesFiltering.length*5;

    const sixesFiltering = diceArray.filter((sixesValue) => {return sixesValue === 6;});
    const sixesScore = sixesFiltering.length*6;

    const threeArr = diceArray.sort();
    let threeKindScore;
    if ((threeArr[0] === threeArr[1] && threeArr[0] === threeArr[2]) || (threeArr[1] === threeArr[2] &&
      threeArr[1] === threeArr[3]) || (threeArr[2] === threeArr[3] && threeArr[2] === threeArr[4])) {
      threeKindScore = threeArr[0] + threeArr[1] + threeArr[2] + threeArr[3] + threeArr[4];
    } else threeKindScore = 0;

    let fourKindScore;
    const fourArr = diceArray.sort();
    if ((fourArr[0] === fourArr[1] && fourArr[0] === fourArr[2] && fourArr[0] === fourArr[3]) ||
      (fourArr[1] === fourArr[2] && fourArr[1] === fourArr[3] && fourArr[1] === fourArr[4])) {
      fourKindScore = fourArr[0] + fourArr[1] + fourArr[2] + fourArr[3] + fourArr[4];
    } else fourKindScore = 0;

    let fullHouseScore;
    const houseArr = diceArray.sort();
    if ((houseArr[0] === houseArr[1] && houseArr[0] === houseArr[2] && houseArr[3] === houseArr[4]) ||
      (houseArr[0] === houseArr[1] && houseArr[2] === houseArr[3] && houseArr[2] === houseArr[4])) {
      fullHouseScore = 25;
    } else fullHouseScore = 0;

    let smallStraightScore;
    const smallArr = diceArray;
    // Using the array.includes() method, we can determine if there is a small straight. There are 3 different scenarios
    if ((smallArr.includes(1) && smallArr.includes(2) && smallArr.includes(3) && smallArr.includes(4)) ||
      (smallArr.includes(2) && smallArr.includes(3) && smallArr.includes(4) && smallArr.includes(5)) ||
      (smallArr.includes(3) && smallArr.includes(4) && smallArr.includes(5) && smallArr.includes(6))
    ) {
      smallStraightScore = 30;
    } else smallStraightScore = 0;

    let largeStraightScore;
    const largeArr = diceArray;
    if ((largeArr.includes(1) && largeArr.includes(2) && largeArr.includes(3) &&
      largeArr.includes(4) && largeArr.includes(5)) || (largeArr.includes(2) && largeArr.includes(3) &&
      largeArr.includes(4) && largeArr.includes(5) && largeArr.includes(6))
    ) {
      largeStraightScore = 40;
    } else largeStraightScore = 0;

    let yahtzeeScore;
    const checkingYahtzeeArray = diceArray.every((diceValue) => diceValue === diceArray[0]);
    if (checkingYahtzeeArray === true) {
      yahtzeeScore = 50;
    } else yahtzeeScore = 0;

    const chanceScore = this.state.diceOneValue + this.state.diceTwoValue +
      this.state.diceThreeValue + this.state.diceFourValue + this.state.diceFiveValue;

    this.setState({
      displayedValues: {
        ones: onesScore, twos: twosScore, threes: threesScore, fours: foursScore,
        fives: fivesScore, sixes: sixesScore, threeKind: threeKindScore,
        fourKind: fourKindScore, fullHouse: fullHouseScore, smallStraight: smallStraightScore,
        largeStraight: largeStraightScore, yahtzee: yahtzeeScore, chance: chanceScore,
      }
    })

  }

  // Checks to see if the game is over based upon the overallTurns state. If it is, game is "disabled"
  // and the showEndGameModal() function is called
  checkEndGame = () => {
    if (this.state.overallTurns > 12) {
      this.setState({
        selectedOption: '',
        disabledTakeScoreBtn: true,
        disabledDice: [true, true, true, true, true],
        disabledRollDiceBtn: true,
      });
      setTimeout(() => {
        this.showEndGameModal();
      }, 100);
    } else return;
  };

  // To mark dice as checked or unchecked in order to capture values and change shadow color
  handleDiceChecked = (event) => {
    const diceName = event.target.name;
    switch (diceName) {
      case 'checkBoxOne':
        return this.setState((prevState) => ({ diceOneChecked: !prevState.diceOneChecked }));
      case 'checkBoxTwo':
        return this.setState((prevState) => ({ diceTwoChecked: !prevState.diceTwoChecked }));
      case 'checkBoxThree':
        return this.setState((prevState) => ({ diceThreeChecked: !prevState.diceThreeChecked }));
      case 'checkBoxFour':
        return this.setState((prevState) => ({ diceFourChecked: !prevState.diceFourChecked }));
      case 'checkBoxFive':
        return this.setState((prevState) => ({ diceFiveChecked: !prevState.diceFiveChecked }));
      default:
        return null;
    }
  };

  // To determine which turn number user is on and to enable/disable buttons based upon where they are in their turn
  rollDice = (event) => {
    event.preventDefault();
    let enableDisabled;
    switch (this.state.turnNumber) {
      case 0:
        this.obtainNumbers();
        enableDisabled = {
          ...this.state.disabledScores, ones: false,
          twos: false, threes: false, fours: false, fives: false, sixes: false,
          threeKind: false, fourKind: false, fullHouse: false, smallStraight: false,
          largeStraight: false, yahtzee: false, doubleYahtzee: true, chance: false
        };
        this.setState({
          turnNumber: 1,
          disabledDice: [false, false, false, false, false],
          disabledScores: enableDisabled,
          disabledTakeScoreBtn: false,
          disabledRollDiceBtn: true,
        });
        // Added to disable roll dice button from being rolled 4 times quickly (bug squash)
        setTimeout(() => {
          this.setState({ disabledRollDiceBtn: false });
          this.calculateValues();
        }, 1200);
        break;
      case 1:
        this.obtainNumbers();
        setTimeout(() => {
          this.calculateValues();
          this.setState({ disabledRollDiceBtn: false });
        }, 1200);
        this.setState({ turnNumber: 2 });
        break;
      case 2:
        this.obtainNumbers();
        setTimeout(() => {
          setTimeout(() => {this.calculateValues();}, 1200);
          setTimeout(() => {
            this.setState({ disabledRollDiceBtn: true });
          }, 100);
        }, 100);
        this.setState({ turnNumber: 3 });
        break;
      case 3:
        setTimeout(() => {
          this.obtainNumbers();
          setTimeout(() => {this.calculateValues();}, 1200);
        }, 10);
        this.unCheckDice();
        this.setState({ turnNumber: 1 });
        break;
      default: return null;
    }
  };

  // To generate random number 1-6
  rolledNumber = () => {
    return Math.floor((Math.random() * (7 - 1)) + 1);
  };

  // To capture dice values, images, and proper ordering
  obtainNumbers = () => {
    let diceOne;
    let diceTwo;
    let diceThree;
    let diceFour;
    let diceFive;
    this.setState({ disabledRollDiceBtn: true });
    // if statement checks to see if the dice is checked. If not, then dice is rolled.
    // 2nd parameter passed in to diceRollDetermination is dice position number.
    if (this.state.diceOneChecked === false) {
      diceOne = this.rolledNumber();
      this.determineWhichDice(diceOne, 1);
    }

    if (this.state.diceTwoChecked === false) {
      diceTwo = this.rolledNumber();
      this.determineWhichDice(diceTwo, 2);
    }
    if (this.state.diceThreeChecked === false) {
      diceThree = this.rolledNumber();
      this.determineWhichDice(diceThree, 3);
    }

    if (this.state.diceFourChecked === false) {
      diceFour = this.rolledNumber();
      this.determineWhichDice(diceFour, 4);
    }

    if (this.state.diceFiveChecked === false) {
      diceFive = this.rolledNumber();
      this.determineWhichDice(diceFive, 5);
    }

  };

  // Depending on the dice roll, call a function with the dicePosition
  // First parameter determines value of the dice. Second determines the dice position
  determineWhichDice = (diceRollNumber, dicePosition) => {
    let diceNumber;

    // Setting the image for the particular dice number
    switch (diceRollNumber) {
      case 1: diceNumber = diceOneImage;
        break;
      case 2: diceNumber = diceTwoImage;
        break;
      case 3: diceNumber = diceThreeImage;
        break;
      case 4: diceNumber = diceFourImage;
        break;
      case 5: diceNumber = diceFiveImage;
        break;
      case 6: diceNumber = diceSixImage;
        break;
      default: return null;
    }
    // Updating image state based upon the dice position
    switch (dicePosition) {
      case 1:
        this.setState({ shakeDiceOne: true });
        setTimeout(() => {
          this.setState({ diceOneImage: diceNumber, diceOneValue: diceRollNumber });
        }, 1100);
        break;
      case 2:
        this.setState({ shakeDiceTwo: true });
        setTimeout(() => {
          this.setState({ diceTwoImage: diceNumber, diceTwoValue: diceRollNumber });
        }, 1100);
        break;
      case 3:
        this.setState({ shakeDiceThree: true });
        setTimeout(() => {
          this.setState({ diceThreeImage: diceNumber, diceThreeValue: diceRollNumber });
        }, 1100);
        break;
      case 4:
        this.setState({ shakeDiceFour: true });
        setTimeout(() => {
          this.setState({ diceFourImage: diceNumber, diceFourValue: diceRollNumber });
        }, 1100);
        break;
      case 5:
        this.setState({ shakeDiceFive: true });
        setTimeout(() => {
          this.setState({ diceFiveImage: diceNumber, diceFiveValue: diceRollNumber });
        }, 1100);
        break;
      default:
        return null;
    }
  };

  // Unchecks the dice at the end of each turn
  unCheckDice = () => {
    this.setState({
      diceOneChecked: false,
      diceTwoChecked: false,
      diceThreeChecked: false,
      diceFourChecked: false,
      diceFiveChecked: false,
    });
  };

  // Resets back to initial state
  resetGame = (event) => {
    event.preventDefault();
    this.setState({
      diceOneValue: 0,
      diceTwoValue: 0,
      diceThreeValue: 0,
      diceFourValue: 0,
      diceFiveValue: 0,
      diceOneImage: diceOneImage,
      diceTwoImage: diceOneImage,
      diceThreeImage: diceOneImage,
      diceFourImage: diceOneImage,
      diceFiveImage: diceOneImage,
      diceOneChecked: false,
      diceTwoChecked: false,
      diceThreeChecked: false,
      diceFourChecked: false,
      diceFiveChecked: false,
      turnNumber: 0,
      overallTurns: 0,
      disabledDice: [true, true, true, true, true],
      disabledRollDiceBtn: false,
      disabledTakeScoreBtn: true,
      disabledScores: {
        ones: true, onesHidden: false,
        twos: true, twosHidden: false,
        threes: true, threesHidden: false,
        fours: true, foursHidden: false,
        fives: true, fivesHidden: false,
        sixes: true, sixesHidden: false,
        threeKind: true, threeKindHidden: false,
        fourKind: true, fourKindHidden: false,
        fullHouse: true, fullHouseHidden: false,
        smallStraight: true, smallStraightHidden: false,
        largeStraight: true, largeStraightHidden: false,
        yahtzee: true, yahtzeeHidden: false,
        chance: true, chanceHidden: false,
      },
      displayedValues: {
        ones: 0,
        twos: 0,
        threes: 0,
        fours: 0,
        fives: 0,
        sixes: 0,
        threeKind: 0,
        fourKind: 0,
        fullHouse: 0,
        smallStraight: 0,
        largeStraight: 0,
        yahtzee: 0,
        chance: 0,
      },
      scores: {
        ones: 0,
        twos: 0,
        threes: 0,
        fours: 0,
        fives: 0,
        sixes: 0,
        threeKind: 0,
        fourKind: 0,
        fullHouse: 0,
        smallStraight: 0,
        largeStraight: 0,
        yahtzee: 0,
        chance: 0,
        totalScore: 0,
        runningTop: 0,
        bonus: 0,
        totalTop: 0,
        totalBottom: 0,
      },
      selectedOption: '',
      showEndGameModal: false,
      showRestartModal: false,
      showHowToPlayModal: false,
    });
  };

  endAnimation = (event) => {
    event.preventDefault();
    // I don't think this will work as I'm not clicking on the target name. I'll likely need to pass in an argument
    // This also may need to be paired with the update, because I want it to do the animation, then change the value.
    switch (event.target.name) {
      case 'checkBoxOne':
        return this.setState({ shakeDiceOne: false });
      case 'checkBoxTwo':
        return this.setState({ shakeDiceTwo: false });
      case 'checkBoxThree':
        return this.setState({ shakeDiceThree: false });
      case 'checkBoxFour':
        return this.setState({ shakeDiceFour: false });
      case 'checkBoxFive':
        return this.setState({ shakeDiceTive: false });
      default:
        return this.setState({
          shakeDiceOne: false,
          shakeDiceTwo: false,
          shakeDiceThree: false,
          shakeDiceFour: false,
          shakeDiceFive: false,
        });
    }
  };

  // Displays the EndGameModal
  showEndGameModal = () => {
    this.setState({ showEndGameModal: true });
  };

  // Function for users who want to look at score longer, without starting a new game
  dontReset = (event) => {
    event.preventDefault();
    this.setState({ showEndGameModal: false });
  };

  // Showing the Restart Modal
  displayRestartModal = (event) => {
    event.preventDefault();
    this.setState({ showRestartModal: true });
  };

  // Closing the Restart Modal
  closeRestartModal = (event) => {
    event.preventDefault();
    this.setState({ showRestartModal: false });
  };

  // Showing the How To Play Modal
  displayHowToPlayModal = (event) => {
    event.preventDefault();
    this.setState({ showHowToPlayModal: true });
  };

  // Closing the How To Play Modal
  closeHowToPlayModal = (event) => {
    event.preventDefault();
    this.setState({ showHowToPlayModal: false });
  };

  render() {
    return (
      <React.Fragment>
        <MainPage
          {...this.state}
          rollDice={this.rollDice}
          handleDiceChecked={this.handleDiceChecked}
          handleRadioButtonSelection={this.handleRadioButtonSelection}
          handleSubmitSelection={this.handleSubmitSelection}
          resetGame={this.resetGame}
          dontReset={this.dontReset}
          displayRestartModal={this.displayRestartModal}
          closeRestartModal={this.closeRestartModal}
          endAnimation={this.endAnimation}
          closeHowToPlayModal={this.closeHowToPlayModal}
          displayHowToPlayModal={this.displayHowToPlayModal}
          toggleTheme={this.toggleTheme}
        />
      </React.Fragment>
    );
  }
}

export default MainPageContainer;
