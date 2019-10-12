import React from 'react';
import MainPage from './MainPage';

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
      diceTwoImage: diceTwoImage,
      diceThreeImage: diceThreeImage,
      diceFourImage: diceFourImage,
      diceFiveImage: diceFiveImage,
      diceOneChecked: false,
      diceTwoChecked: false,
      diceThreeChecked: false,
      diceFourChecked: false,
      diceFiveChecked: false,
      turnNumber: 0,
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
      scores: {
        ones: 0, twos: 0, threes: 0, fours: 0, fives: 0, sixes: 0, threeKind: 0, fourKind: 0, fullHouse: 0, smallStraight: 0, largeStraight: 0, yahtzee: 0, chance: 0, totalScore: 0, runningTop: 0, bonus: 0, totalTop: 0, totalBottom: 0
      },
      selectedOption: ''
    };
  }

  handleRadioButtonSelection = (event) => {
    const value = event.target.value;
    this.setState({
      selectedOption: value
    });
  };

  handleSubmitSelection = (event) => {
    event.preventDefault();
    this.scoreSelectionLogic(this.state.selectedOption)
    this.unCheckDice();
  }

  scoreSelectionLogic = (selectedOption) => {
    switch (selectedOption) {
      case 'onesScore':
        this.determineOnesScore();
        break
      case 'twosScore':
        this.determineTwosScore();
        break
      case 'threesScore':
        this.determineThreesScore();
        break
      case 'foursScore':
        this.determineFoursScore();
        break
      case 'fivesScore':
        this.determineFivesScore();
        break
      case 'sixesScore':
        this.determineSixesScore();
        break
      case 'threeKindScore':
        this.determineThreeKindScore();
        break
      case 'fourKindScore':
        this.determineFourKindScore();
        break
      case 'fullHouseScore':
        this.determineFullHouseScore();
        break
      case 'smallStraightScore':
        this.determineSmallStraightScore();
        break
      case 'largeStraightScore':
        this.determineLargeStraightScore();
        break
      case 'yahtzeeScore':
        this.determineYahtzeeScore();
        break
      case 'chanceScore':
        this.determineChanceScore();
        break;
      default: console.log("Error: Scores closed")
    };
  };

  determineOnesScore = () => {
    let diceArray = [this.state.diceOneValue, this.state.diceTwoValue, this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue]
    // This creates a new array with only ones, which I can then do a .length to determine how many and add to score.
    let diceArrayFiltering = diceArray.filter((diceValue) => {
      return diceValue === 1
    });
    // Need RunningTop, TotalTop, Total Score totalScore: 0, runningTop: 0, bonus: 0, totalTop: 0, totalBottom: 0
    let onesScore = diceArrayFiltering.length;
    let updatedScore = {
      ...this.state.scores,
      ones: onesScore,
      totalTop: this.state.scores.totalTop + onesScore,
      runningTop: this.state.scores.runningTop + onesScore,
      totalScore: this.state.scores.totalScore + onesScore
    }
    let updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true, threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      onesHidden: true
    }
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineTwosScore = () => {
    let diceArray = [this.state.diceOneValue, this.state.diceTwoValue, this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue]
    // This creates a new array with only ones, which I can then do a .length to determine how many and add to score.
    let diceArrayFiltering = diceArray.filter((diceValue) => {
      return diceValue === 2
    });
    // Need RunningTop, TotalTop, Total Score totalScore: 0, runningTop: 0, bonus: 0, totalTop: 0, totalBottom: 0
    let twosScore = diceArrayFiltering.length;
    twosScore = twosScore * 2;
    let updatedScore = {
      ...this.state.scores,
      twos: twosScore,
      totalTop: this.state.scores.totalTop + twosScore,
      runningTop: this.state.scores.runningTop + twosScore,
      totalScore: this.state.scores.totalScore + twosScore
    }
    let updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true, threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      twosHidden: true
    }
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };
  determineThreesScore = () => {
    let diceArray = [this.state.diceOneValue, this.state.diceTwoValue, this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue]
    // This creates a new array with only ones, which I can then do a .length to determine how many and add to score.
    let diceArrayFiltering = diceArray.filter((diceValue) => {
      return diceValue === 3
    });
    let threesScore = diceArrayFiltering.length;
    threesScore = threesScore * 3;

    let updatedScore = {
      ...this.state.scores,
      threes: threesScore,
      totalTop: this.state.scores.totalTop + threesScore,
      runningTop: this.state.scores.runningTop + threesScore,
      totalScore: this.state.scores.totalScore + threesScore
    }
    let updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true, threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      threesHidden: true
    }
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };
  determineFoursScore = () => {
    let diceArray = [this.state.diceOneValue, this.state.diceTwoValue, this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue]
    // This creates a new array with only ones, which I can then do a .length to determine how many and add to score.
    let diceArrayFiltering = diceArray.filter((diceValue) => {
      return diceValue === 4
    });
    let foursScore = diceArrayFiltering.length;
    foursScore = foursScore * 4;

    let updatedScore = {
      ...this.state.scores,
      fours: foursScore,
      totalTop: this.state.scores.totalTop + foursScore,
      runningTop: this.state.scores.runningTop + foursScore,
      totalScore: this.state.scores.totalScore + foursScore
    }
    let updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true, threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      foursHidden: true
    }
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };
  determineFivesScore = () => {
    let diceArray = [this.state.diceOneValue, this.state.diceTwoValue, this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue]
    // This creates a new array with only ones, which I can then do a .length to determine how many and add to score.
    let diceArrayFiltering = diceArray.filter((diceValue) => {
      return diceValue === 5
    });
    let fivesScore = diceArrayFiltering.length;
    fivesScore = fivesScore * 5;

    let updatedScore = {
      ...this.state.scores,
      fives: fivesScore,
      totalTop: this.state.scores.totalTop + fivesScore,
      runningTop: this.state.scores.runningTop + fivesScore,
      totalScore: this.state.scores.totalScore + fivesScore
    }
    let updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true, threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      fivesHidden: true
    }
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };
  determineSixesScore = () => {
    let diceArray = [this.state.diceOneValue, this.state.diceTwoValue, this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue]
    // This creates a new array with only ones, which I can then do a .length to determine how many and add to score.
    let diceArrayFiltering = diceArray.filter((diceValue) => {
      return diceValue === 6
    });
    let sixesScore = diceArrayFiltering.length;
    sixesScore = sixesScore * 6;

    let updatedScore = {
      ...this.state.scores,
      sixes: sixesScore,
      totalTop: this.state.scores.totalTop + sixesScore,
      runningTop: this.state.scores.runningTop + sixesScore,
      totalScore: this.state.scores.totalScore + sixesScore
    }
    let updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true, threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      sixesHidden: true
    }
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineThreeKindScore = () => {
    let diceArray = [this.state.diceOneValue, this.state.diceTwoValue, this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue]
    let threeKindScore = 0;
    let arr = diceArray.sort();

    if ((arr[0] === arr[1] && arr[0] === arr[2]) || (arr[1] === arr[2] && arr[1] === arr[3]) || (arr[2] === arr[3] && arr[2] === arr[4])) {
      threeKindScore = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
    } else threeKindScore = 0

    let updatedScore = {
      ...this.state.scores,
      threeKind: threeKindScore,
      totalBottom: this.state.scores.totalBottom + threeKindScore,
      totalScore: this.state.scores.totalScore + threeKindScore
    };
    let updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true, threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      threeKindHidden: true
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);

  };

  determineFourKindScore = () => {
    let diceArray = [this.state.diceOneValue, this.state.diceTwoValue, this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue]
    let fourKindScore;
    let arr = diceArray.sort();

    if ((arr[0] === arr[1] && arr[0] === arr[2] && arr[0] === arr[3]) || (arr[1] === arr[2] && arr[1] === arr[3] && arr[1] === arr[4])) {
      fourKindScore = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
    } else fourKindScore = 0;

    let updatedScore = {
      ...this.state.scores,
      fourKind: fourKindScore,
      totalBottom: this.state.scores.totalBottom + fourKindScore,
      totalScore: this.state.scores.totalScore + fourKindScore
    };
    let updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true, threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      fourKindHidden: true
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);

  };


  determineFullHouseScore = () => {
    let diceArray = [this.state.diceOneValue, this.state.diceTwoValue, this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue]
    let fullHouseScore;
    let arr = diceArray.sort();

    if ((arr[0] === arr[1] && arr[0] === arr[2] && arr[3] === arr[4]) || (arr[0] === arr[1] && arr[2] === arr[3] && arr[2] === arr[4])) {
      fullHouseScore = 25;
    } else fullHouseScore = 0;

    let updatedScore = {
      ...this.state.scores,
      fullHouse: fullHouseScore,
      totalBottom: this.state.scores.totalBottom + fullHouseScore,
      totalScore: this.state.scores.totalScore + fullHouseScore
    };
    let updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true, threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      fullHouseHidden: true
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  }

  determineSmallStraightScore = () => {
    let diceArray = [this.state.diceOneValue, this.state.diceTwoValue, this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue]
    let smallStraightScore;
    let arr = diceArray;

    if ((arr.includes(1) && arr.includes(2) && arr.includes(3) && arr.includes(4)) ||
      (arr.includes(2) && arr.includes(3) && arr.includes(4) && arr.includes(5)) ||
      (arr.includes(3) && arr.includes(4) && arr.includes(5) && arr.includes(6))
    ) {
      smallStraightScore = 30;
    } else smallStraightScore = 0;

    let updatedScore = {
      ...this.state.scores,
      smallStraight: smallStraightScore,
      totalBottom: this.state.scores.totalBottom + smallStraightScore,
      totalScore: this.state.scores.totalScore + smallStraightScore
    };
    let updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true, threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      smallStraightHidden: true
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineLargeStraightScore = () => {
    let diceArray = [this.state.diceOneValue, this.state.diceTwoValue, this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue]
    let largeStraightScore;
    let arr = diceArray;

    if ((arr.includes(1) && arr.includes(2) && arr.includes(3) && arr.includes(4) && arr.includes(5)) ||
      (arr.includes(2) && arr.includes(3) && arr.includes(4) && arr.includes(5) && arr.includes(6))
    ) {
      largeStraightScore = 40;
    } else largeStraightScore = 0;

    let updatedScore = {
      ...this.state.scores,
      largeStraight: largeStraightScore,
      totalBottom: this.state.scores.totalBottom + largeStraightScore,
      totalScore: this.state.scores.totalScore + largeStraightScore
    };
    let updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true, threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      largeStraightHidden: true
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineYahtzeeScore = () => {
    let diceArray = [this.state.diceOneValue, this.state.diceTwoValue, this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue]
    let yahtzeeScore;
    let checkingYahtzeeArray = diceArray.every(diceValue => diceValue === diceArray[0]);

    if (checkingYahtzeeArray === true) {
      yahtzeeScore = 50;
    } else yahtzeeScore = 0;

    let updatedScore = {
      ...this.state.scores,
      yahtzee: yahtzeeScore,
      totalBottom: this.state.scores.totalBottom + yahtzeeScore,
      totalScore: this.state.scores.totalScore + yahtzeeScore
    };
    let updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true, threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      yahtzeeHidden: true
    };
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  determineChanceScore = () => {
    let chanceScore = this.state.diceOneValue + this.state.diceTwoValue + this.state.diceThreeValue + this.state.diceFourValue + this.state.diceFiveValue;
    let updatedScore = {
      ...this.state.scores,
      chance: chanceScore,
      totalBottom: this.state.scores.totalBottom + chanceScore,
      totalScore: this.state.scores.totalScore + chanceScore
    }
    let updateDisabledScores = {
      ...this.state.disabledScores,
      ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true, threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true, yahtzee: true, chance: true,
      chanceHidden: true
    }
    this.setScoreTakingState(updatedScore, updateDisabledScores);
  };

  // Checks the runningTop score to see if 
  checkBonus = () => {
    let updatedScoresWithBonus;
    if (this.state.scores.runningTop > 62 || this.state.scores.bonus === 0) {
      updatedScoresWithBonus = {
        ...this.state.scores,
        bonus: 35,
        totalTop: this.state.scores.totalTop + 35,
        totalScore: this.state.scores.totalScore + 35
      }
      this.setState({
        scores: updatedScoresWithBonus
      })
    } return;
  };

  setScoreTakingState = (updatedScore, updateDisabledScores) => {
    this.setState({
      scores: updatedScore,
      disabledScores: updateDisabledScores,
      turnNumber: 0,
      disabledDice: [true, true, true, true, true],
      disabledTakeScoreBtn: true,
      selectedOption: '',
      disabledRollDiceBtn: false
    })
    // setTimeout is needed to make sure bonus score is updated after an initial score is taken.
    setTimeout(() => {
      this.checkBonus();
    }, 100);
  };

  // To mark dice as checked or unchecked in order to capture values and change shadow color
  handleDiceChecked = (event) => {
    const diceName = event.target.name;
    switch (diceName) {
      case 'checkBoxOne':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
      case 'checkBoxTwo':
        return this.setState(prevState => ({ diceTwoChecked: !prevState.diceTwoChecked }));
      case 'checkBoxThree':
        return this.setState(prevState => ({ diceThreeChecked: !prevState.diceThreeChecked }));
      case 'checkBoxFour':
        return this.setState(prevState => ({ diceFourChecked: !prevState.diceFourChecked }));
      case 'checkBoxFive':
        return this.setState(prevState => ({ diceFiveChecked: !prevState.diceFiveChecked }));
      default:
        return console.log("checkBoxNumber not defined");
    };
  };

  // To determine which turn number user is on
  rollDice = () => {
    switch (this.state.turnNumber) {
      case 0:
        this.obtainNumbers();
        let enableDisabled = { ...this.state.disabledScores, ones: false, twos: false, threes: false, fours: false, fives: false, sixes: false, threeKind: false, fourKind: false, fullHouse: false, smallStraight: false, largeStraight: false, yahtzee: false, doubleYahtzee: true, chance: false }
        this.setState({
          turnNumber: 1,
          disabledDice: [false, false, false, false, false],
          disabledScores: enableDisabled,
          disabledTakeScoreBtn: false,
          disabledRollDiceBtn: false
        });
        break
      case 1:
        this.obtainNumbers();
        this.setState({ turnNumber: 2 });
        break
      case 2:
        setTimeout(() => {
          this.obtainNumbers();
          setTimeout(() => {
            this.setState({ disabledRollDiceBtn: true })
          }, 100);
        }, 100);
        this.setState({ turnNumber: 3 });
        break
      case 3:
        setTimeout(() => {
          this.obtainNumbers();
        }, 10);
        this.unCheckDice();
        this.setState({ turnNumber: 1 });
        break
      default: console.log("If you see this, apparently there are more turns in Yahtzee")
    }
  };

  // To generate random number 1-6
  rolledNumber = () => {
    return Math.floor((Math.random() * (7 - 1)) + 1);
  };

  obtainNumbers = () => {
    let diceOne;
    let diceTwo;
    let diceThree;
    let diceFour;
    let diceFive;

    // if statement checks to see if the dice is checked. If not, then dice is rolled.
    // 2nd parameter passed in to diceRollDetermination is dice position number.
    if (this.state.diceOneChecked === false) {
      diceOne = this.rolledNumber();
      this.determineWhichDice(diceOne, 1)
    }

    if (this.state.diceTwoChecked === false) {
      diceTwo = this.rolledNumber();
      this.determineWhichDice(diceTwo, 2)
    }
    if (this.state.diceThreeChecked === false) {
      diceThree = this.rolledNumber();
      this.determineWhichDice(diceThree, 3)
    }

    if (this.state.diceFourChecked === false) {
      diceFour = this.rolledNumber();
      this.determineWhichDice(diceFour, 4)
    }

    if (this.state.diceFiveChecked === false) {
      diceFive = this.rolledNumber();
      this.determineWhichDice(diceFive, 5)
    }
  };

  // Depending on the dice roll, call a function with the dicePosition
  determineWhichDice = (diceRollNumber, dicePosition) => {
    let diceNumber;
    // Setting the image for the particular dice number
    switch (diceRollNumber) {
      case 1: diceNumber = diceOneImage;
        break
      case 2: diceNumber = diceTwoImage;
        break
      case 3: diceNumber = diceThreeImage;
        break
      case 4: diceNumber = diceFourImage;
        break
      case 5: diceNumber = diceFiveImage;
        break
      case 6: diceNumber = diceSixImage;
        break
      default:
        console.log("nothing hit")
    };
    // Updating image state based upon the dice position
    switch (dicePosition) {
      case 1:
        return this.setState({ diceOneImage: diceNumber, diceOneValue: diceRollNumber });
      case 2:
        return this.setState({ diceTwoImage: diceNumber, diceTwoValue: diceRollNumber });
      case 3:
        return this.setState({ diceThreeImage: diceNumber, diceThreeValue: diceRollNumber });
      case 4:
        return this.setState({ diceFourImage: diceNumber, diceFourValue: diceRollNumber });
      case 5:
        return this.setState({ diceFiveImage: diceNumber, diceFiveValue: diceRollNumber });
      default:
        return console.log("nothing hit");
    };
  };

  unCheckDice = () => {
    this.setState({
      diceOneChecked: false,
      diceTwoChecked: false,
      diceThreeChecked: false,
      diceFourChecked: false,
      diceFiveChecked: false,
    });
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
        />
      </React.Fragment>
    )
  }
}

export default MainPageContainer;