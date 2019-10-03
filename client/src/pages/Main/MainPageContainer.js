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
    console.log(this.state.turnNumber)
    switch (this.state.turnNumber) {
      case 0:
        this.obtainNumbers();
        this.setState({turnNumber: 1, disabledDice: [false, false, false, false, false], disabledRadio: false})
        break
      case 1:
        this.obtainNumbers();
        this.setState({turnNumber: 2})
        break
      case 2:
        this.obtainNumbers();
        this.setState({turnNumber: 3})
        break
      case 3:
        this.obtainNumbers();
        this.setState({turnNumber: 1, disabledDice: [false, false, false, false, false], disabledRadio: false})
        this.unCheckDice();
        // this.dontAllowRollUntilSomethingIsSelected
        // I'll need to force the person to select something here. Disable roll dice button until selection. Then once selection happens, it's re-enabled
        break
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
        />
      </React.Fragment>
    )
  }
}

export default MainPageContainer;