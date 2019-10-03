import React from 'react';
import MainPage from './MainPage';

import diceOne from '../../assets/images/diceOne.png';
import diceTwo from '../../assets/images/diceTwo.png';
import diceThree from '../../assets/images/diceThree.png';
import diceFour from '../../assets/images/diceFour.png';
import diceFive from '../../assets/images/diceFive.png';
import diceSix from '../../assets/images/diceSix.png';

class MainPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceOneValue: 0,
      diceTwoValue: 0,
      diceThreeValue: 0,
      diceFourValue: 0,
      diceFiveValue: 0,
      diceOneImage: diceOne,
      diceTwoImage: diceTwo,
      diceThreeImage: diceThree,
      diceFourImage: diceFour,
      diceFiveImage: diceFive,
      diceOneChecked: false,
      diceTwoChecked: false,
      diceThreeChecked: false,
      diceFourChecked: false,
      diceFiveChecked: false,
      turnNumber: 0,
      disabledDice: [true, true, true, true, true],
      disabledButton: false,
      disabledRadio: true,
      disabledFinalize: true
    };
  }

  unCheckDice = () => {
    this.setState({
      diceOneChecked: false,
      diceTwoChecked: false,
      diceThreeChecked: false,
      diceFourChecked: false,
      diceFiveChecked: false
    });
  };

  disabledFinalize = () => {
    this.setState(prevState => ({disabledFinalize: !prevState.disabledFinalize}))
  }

  rollDice = () => {
    switch (this.state.turnNumber) {
      case 0:
        this.obtainNumbers();
        this.setState({turnNumber: 1, disabledDice: [false, false, false, false, false], disabledRadio: false})
        return
      case 1:
        this.obtainNumbers();
        this.setState({turnNumber: 2})
        return
      case 2:
        this.obtainNumbers();
        this.setState({turnNumber: 3})
        return
      case 3:
        this.obtainNumbers();
        this.setState({turnNumber: 0})
        this.unCheckDice();
        // this.dontAllowRollUntilSomethingIsSelected
        // I'll need to force the person to select something here. Disable roll dice button until selection. Then once selection happens, it's re-enabled
        return
      default: console.log("If you see this, apparently there are more turns in Yahtzee")
    }
  };

  handleChange = (event) => {
    const diceName = event.target.name;
    switch (diceName) {
      case 'checkBoxOne':
        return this.setState(prevState => ({diceOneChecked: !prevState.diceOneChecked}));
      case 'checkBoxTwo':
        return this.setState(prevState => ({diceTwoChecked: !prevState.diceTwoChecked}));
      case 'checkBoxThree':
        return this.setState(prevState => ({diceThreeChecked: !prevState.diceThreeChecked}));
      case 'checkBoxFour':
        return this.setState(prevState => ({diceFourChecked: !prevState.diceFourChecked}));
      case 'checkBoxFive':
        return this.setState(prevState => ({diceFiveChecked: !prevState.diceFiveChecked}));
      default:
        return console.log("checkBoxNumber not defined");
    };
  };

  rolledNumber = () => { return Math.floor((Math.random() * (7 - 1)) + 1); };

  obtainNumbers = () => {
    let diceNumber1, diceNumber2, diceNumber3, diceNumber4, diceNumber5;
    // if statement checks to see if the dice is checked. If not, then dice is rolled.
    // 2nd parameter passed in to diceRollDetermination is dice position number.
    if (this.state.diceOneChecked === false) {
      diceNumber1 = this.rolledNumber();
      this.diceRollDetermination(diceNumber1, 1)
    } 

    if (this.state.diceTwoChecked === false) {
      diceNumber2 = this.rolledNumber();
      this.diceRollDetermination(diceNumber2, 2)
    } 
    if (this.state.diceThreeChecked === false) {
      diceNumber3 = this.rolledNumber();
      this.diceRollDetermination(diceNumber3, 3)
    } 

    if (this.state.diceFourChecked === false) {
      diceNumber4 = this.rolledNumber();
      this.diceRollDetermination(diceNumber4, 4)
    } 

    if (this.state.diceFiveChecked === false) {
      diceNumber5 = this.rolledNumber();
      this.diceRollDetermination(diceNumber5, 5)
    } 
  };

  // Depending on the dice roll, call a function with the dicePosition
  diceRollDetermination = (diceRollNumber, dicePosition) => {
    switch (diceRollNumber) {
      case 1:
        return this.determineWhichDice(dicePosition, diceRollNumber);
      case 2:
        return this.determineWhichDice(dicePosition, diceRollNumber);
      case 3:
        return this.determineWhichDice(dicePosition, diceRollNumber);
      case 4:
        return this.determineWhichDice(dicePosition, diceRollNumber);
      case 5:
        return this.determineWhichDice(dicePosition, diceRollNumber);
      case 6:
        return this.determineWhichDice(dicePosition, diceRollNumber);
      default:
        return console.log("diceRollNumber not defined");
    };
  };

  determineWhichDice = (dicePosition, diceRollNumber) => {
    let diceNumber;
    // Setting the image for the particular dice number
    switch (diceRollNumber) {
      case 1: diceNumber = diceOne;
        break
      case 2: diceNumber = diceTwo;
        break
      case 3: diceNumber = diceThree;
        break
      case 4: diceNumber = diceFour;
        break
      case 5: diceNumber = diceFive;
        break
      case 6: diceNumber = diceSix;
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
        />
      </React.Fragment>
    )
  }
}

export default MainPageContainer;