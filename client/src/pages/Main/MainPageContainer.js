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
        ones: true, onesChecked: false,
        twos: true, twosChecked: false,
        threes: true, threesChecked: false,
        fours: true, foursChecked: false,
        fives: true, fivesChecked: false,
        sixes: true, sixesChecked: false,
        threeKind: true, threeKindChecked: false,
        fourKind: true, fourKindChecked: false,
        fullHouse: true, fullHouseChecked: false,
        smallStraight: true, smallStraightChecked: false,
        largeStraight: true, largeStraightChecked: false,
        yahtzee: true, yahtzeeChecked: false,
        doubleYahtzee: true, doubleYahtzeeChecked: false,
        chance: true, chanceChecked: false,
      },
      scores: {
        ones: 0, twos: 0, threes: 0, fours: 0, fives: 0, sixes: 0, threeKind: 0, fourKind: 0, fullHouse: 0, smallStraight: 0, largeStraight: 0, yahtzee: 0, doubleYahtzee: 0, chance: 0, totalScore: 0, runningTop: 0, bonus: 0, totalTop: 0, totalBottom: 0
      },
      selectedOption: ''
    };
  }
  unCheckRadios = () => {
    this.setState({
      disabledScores: {
        onesChecked: false,
        twosChecked: false,
        threesChecked: false,
        foursChecked: false,
        fivesChecked: false,
        sixesChecked: false,
        threeKindChecked: false,
        fourKindChecked: false,
        fullHouseChecked: false,
        smallStraightChecked: false,
        largeStraightChecked: false,
        yahtzeeChecked: false,
        doubleYahtzeeChecked: false,
        chanceChecked: false,
      },
      selectedOption: ''
    })
  }

  unCheckDice = () => {
    this.setState({
      diceOneChecked: false,
      diceTwoChecked: false,
      diceThreeChecked: false,
      diceFourChecked: false,
      diceFiveChecked: false,
    });
  };

  handleTakeScoreDisable = () => {
    this.setState(prevState => ({ disabledTakeScoreBtn: !prevState.disabledTakeScoreBtn }));
  };

  handleRollDiceDisable = () => {
    this.setState(prevState => ({ disabledRollDiceBtn: !prevState.disabledRollDiceBtn }));
  };

  rollDice = () => {
    console.log("turnNumber: " + this.state.turnNumber)
    switch (this.state.turnNumber) {
      case 0:
        this.obtainNumbers();
        this.setState({
          turnNumber: 1, disabledDice: [false, false, false, false, false], disabledScores: { ones: false, twos: false, threes: false, fours: false, fives: false, sixes: false, threeKind: false, fourKind: false, fullHouse: false, smallStraight: false, largeStraight: false, yahtzee: false, doubleYahtzee: false, chance: false }
        });
        break
      case 1:
        this.obtainNumbers();
        this.setState({ turnNumber: 2 });
        break
      case 2:
        this.obtainNumbers();
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

  handleRadioButtonSelection = (event) => {
    const value = event.target.value;
    this.setState({
      selectedOption: value
    });
  };

  determineOnesScore = () => {
    let diceArray = [this.state.diceOneValue, this.state.diceTwoValue, this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue]
    // This creates a new array with only ones, which I can then do a .length to determine how many and add to score.
    let diceArrayFiltering = diceArray.filter((diceValue) => {
      return diceValue === 1
    });

    let onesScore = diceArrayFiltering.length;
    let updatedScore = {...this.state.scores, ones: onesScore}

      this.setState({
        scores: updatedScore,
        disabledScores: { ones: true, twos: true, threes: true, fours: true, fives: true, sixes: true, threeKind: true, fourKind: true, fullHouse: true, smallStraight: true, largeStraight: true, yahtzee: true, doubleYahtzee: true, chance: true },
        turnNumber: 0
      })

    
  };

  scoreSelectionLogic = (selectedOption) => {
    switch (selectedOption) {
      case 'onesScore':
        this.determineOnesScore();
        break
      case 'twosScore':
        break
      case 'threesScore':
        break
      case 'foursScore':
        break
      case 'fivesScore':
        break
      case 'sixesScore':
        break
      case 'threeKindScore':
        break
      case 'fourKindScore':
        break
      case 'smallStraightScore':
        break
      case 'largeStraightScore':
        break
      case 'yahtzeeScore':
        break
      case 'doubleYahtzeeScore':
        break
      case 'chanceScore':
        break;
      default: console.log("Error: Scores closed")
    };
  };

  handleSubmitSelection = (event) => {
    event.preventDefault();
    // something to do with this.state.selectedOption. I think a Switch Statement here. If this.state.selectedOption = XXX
    // Then you do this. Then at the end, radios are unchecked.
    // The this is add to score, updated scores, disabled particular radio button. Let's start with ones.
    this.scoreSelectionLogic(this.state.selectedOption)

    console.log("You have submitted: ", this.state.selectedOption)
    
  }

  handleChange = (event) => {
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

  render() {
    return (
      <React.Fragment>
        <MainPage
          {...this.state}
          rollDice={this.rollDice}
          onChange={this.handleChange}
          handleRadioButtonSelection={this.handleRadioButtonSelection}
          handleSubmitSelection={this.handleSubmitSelection}
        />
      </React.Fragment>
    )
  }
}

export default MainPageContainer;