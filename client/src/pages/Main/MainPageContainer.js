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
    this.setState(prevState => ({ disabledFinalize: !prevState.disabledFinalize }))
  }

  rollDice = () => {
    console.log("turnNumber: " + this.state.turnNumber)
    switch (this.state.turnNumber) {
      case 0:
        this.obtainNumbers();
        this.setState({ turnNumber: 1, disabledDice: [false, false, false, false, false], disabledRadio: false })
        break
      case 1:
        this.obtainNumbers();
        this.setState({ turnNumber: 2 })
        break
      case 2:
        this.obtainNumbers();
        this.setState({ turnNumber: 3 })
        break
      case 3:
        let bindThis = this;
        setTimeout(() => {
            bindThis.obtainNumbers()
        }, 1);
        this.unCheckDice();
        this.setState({ turnNumber: 1 })

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

    console.log("diceOne:   " + this.state.diceOneChecked)
    console.log("diceTwo:   " + this.state.diceTwoChecked)
    console.log("diceThree: " + this.state.diceThreeChecked)
    console.log("diceFour:  " + this.state.diceFourChecked)
    console.log("diceFive:  " + this.state.diceFiveChecked)

    // if statement checks to see if the dice is checked. If not, then dice is rolled.
    // 2nd parameter passed in to diceRollDetermination is dice position number.
    if (this.state.diceOneChecked === false) {
      diceOne = this.rolledNumber();
      this.diceRollDetermination(diceOne, 1)
    }

    if (this.state.diceTwoChecked === false) {
      diceTwo = this.rolledNumber();
      this.diceRollDetermination(diceTwo, 2)
    }
    if (this.state.diceThreeChecked === false) {
      diceThree = this.rolledNumber();
      this.diceRollDetermination(diceThree, 3)
    }

    if (this.state.diceFourChecked === false) {
      diceFour = this.rolledNumber();
      this.diceRollDetermination(diceFour, 4)
    }

    if (this.state.diceFiveChecked === false) {
      diceFive = this.rolledNumber();
      this.diceRollDetermination(diceFive, 5)
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