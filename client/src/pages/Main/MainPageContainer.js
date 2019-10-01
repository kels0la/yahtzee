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
      imgList: [diceOne, diceTwo, diceThree, diceFour, diceFive]
    };
  }

  rolledNumber = () => { return Math.floor((Math.random() * (7 - 1)) + 1); }

  obtainNumbers = () => {
    // I'll need to include the if dice is checked logic here.
    let diceNumber1, diceNumber2, diceNumber3, diceNumber4, diceNumber5;
 
    diceNumber1 = this.rolledNumber();
    this.diceOneSwitchStatement(diceNumber1)

    diceNumber2 = this.rolledNumber();
    this.diceTwoSwitchStatement(diceNumber2)

    diceNumber3 = this.rolledNumber();
    this.diceThreeSwitchStatement(diceNumber3)

    diceNumber4 = this.rolledNumber();
    this.diceFourSwitchStatement(diceNumber4)

    diceNumber5 = this.rolledNumber();
    this.diceFiveSwitchStatement(diceNumber5)

    this.setState({
      diceOneValue: diceNumber1,
      diceTwoValue: diceNumber2,
      diceThreeValue: diceNumber3,
      diceFourValue: diceNumber4,
      diceFiveValue: diceNumber5
    });
  }

  diceOneSwitchStatement = (diceNumber) => {
    switch (diceNumber) {
      case 1:
        return this.setState({diceOneImage: diceOne})
      case 2:
        return this.setState({diceOneImage: diceTwo})
      case 3:
        return this.setState({diceOneImage: diceThree})
      case 4:
        return this.setState({diceOneImage: diceFour})
      case 5:
        return this.setState({diceOneImage: diceFive})
      case 6:
        return this.setState({diceOneImage: diceFive})
      default:
        return this.setState({diceOneImage: diceSix})
    }
  }

  diceTwoSwitchStatement = (diceNumber) => {
    switch (diceNumber) {
      case 1:
        return this.setState({diceTwoImage: diceOne})
      case 2:
        return this.setState({diceTwoImage: diceTwo})
      case 3:
        return this.setState({diceTwoImage: diceThree})
      case 4:
        return this.setState({diceTwoImage: diceFour})
      case 5:
        return this.setState({diceTwoImage: diceFive})
      case 6:
          return this.setState({diceTwoImage: diceSix})
      default:
        return this.setState({diceTwoImage: diceSix})
    }
  }

  diceThreeSwitchStatement = (diceNumber) => {
    switch (diceNumber) {
      case 1:
        return this.setState({diceThreeImage: diceOne})
      case 2:
        return this.setState({diceThreeImage: diceTwo})
      case 3:
        return this.setState({diceThreeImage: diceThree})
      case 4:
        return this.setState({diceThreeImage: diceFour})
      case 5:
        return this.setState({diceThreeImage: diceFive})
      case 6:
        return this.setState({diceThreeImage: diceSix})
      default:
        return this.setState({diceThreeImage: diceSix})
    }
  }

  diceFourSwitchStatement = (diceNumber) => {
    switch (diceNumber) {
      case 1:
        return this.setState({diceFourImage: diceOne})
      case 2:
        return this.setState({diceFourImage: diceTwo})
      case 3:
        return this.setState({diceFourImage: diceThree})
      case 4:
        return this.setState({diceFourImage: diceFour})
      case 5:
        return this.setState({diceFourImage: diceFive})
      case 6:
        return this.setState({diceFourImage: diceSix})
      default:
        return this.setState({diceFourImage: diceSix})
    }
  }

  diceFiveSwitchStatement = (diceNumber) => {
    switch (diceNumber) {
      case 1:
        return this.setState({diceFiveImage: diceOne})
      case 2:
        return this.setState({diceFiveImage: diceTwo})
      case 3:
        return this.setState({diceFiveImage: diceThree})
      case 4:
        return this.setState({diceFiveImage: diceFour})
      case 5:
        return this.setState({diceFiveImage: diceFive})
      case 6:
        return this.setState({diceFiveImage: diceSix})
      default:
        return this.setState({diceFourImage: diceSix})
    }
  }

  rollDice = () => {
    this.obtainNumbers()


    // What is this value? How is it declared? How is it passed in? Maybe not a dicenumber function. Or maybe it automatically has it? I could check with a console log once I add in the function and click the button. Good first step.
    // Assuming I have the value here, how do I proceed?
    // This does what? It displays number on the page, and state is updated? So I can use that for scoring purposes?
    // diceNumberSwitchStatement(diceNumber)
  }
  // handleDiceChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // let diceOne = Math.floor((Math.random() * (6-1)) + 1)
  // let diceTwo = Math.floor((Math.random() * (6-1)) + 1)
  // let diceThree = Math.floor((Math.random() * (6-1)) + 1)
  // let diceFour = Math.floor((Math.random() * (6-1)) + 1)
  // let diceFive = Math.floor((Math.random() * (6-1)) + 1)

  render() {
    return (
      <React.Fragment>
        <MainPage
          {...this.state}
          rollDice={this.rollDice}
        // handleDiceChange={this.handleDiceChange}

        />
      </React.Fragment>
    )
  }
}

export default MainPageContainer;