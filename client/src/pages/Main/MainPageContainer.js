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
      diceImages: [diceOne, diceTwo, diceThree, diceFour, diceFive]
    };
  }

  rollDice = () => {
    this.obtainNumbers()
  }

  handleChange = (event) => {
    const item = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }


  rolledNumber = () => { return Math.floor((Math.random() * (7 - 1)) + 1); }

  obtainNumbers = () => {
    // I'll need to include the if dice is checked logic here.
    let diceNumber1, diceNumber2, diceNumber3, diceNumber4, diceNumber5;
 
    // 2nd parameter passed in to diceSwitchStatement is dice position number
    diceNumber1 = this.rolledNumber();
    this.diceSwitchStatement(diceNumber1, 1)
    diceNumber2 = this.rolledNumber();
    this.diceSwitchStatement(diceNumber2, 2)
    diceNumber3 = this.rolledNumber();
    this.diceSwitchStatement(diceNumber3, 3)
    diceNumber4 = this.rolledNumber();
    this.diceSwitchStatement(diceNumber4, 4)
    diceNumber5 = this.rolledNumber();
    this.diceSwitchStatement(diceNumber5, 5)
  }

  determineWhichDice = (dicePosition, diceRollNumber) => {
    let diceNumber
    // Setting the image for the particular dice number
    switch (diceRollNumber){
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
    }
    // Updating image state based upon the dice position
    switch (dicePosition){
      case 1:
        return this.setState({diceOneImage: diceNumber, diceOneValue: diceRollNumber});
      case 2:
        return this.setState({diceTwoImage: diceNumber, diceTwoValue: diceRollNumber});
      case 3:
        return this.setState({diceThreeImage: diceNumber, diceThreeValue: diceRollNumber});
      case 4:
        return this.setState({diceFourImage: diceNumber, diceFourValue: diceRollNumber});
      case 5:
        return this.setState({diceFiveImage: diceNumber, diceFiveValue: diceRollNumber});
      default:
        return console.log("nothing hit");
    };
  };

  diceSwitchStatement = (diceRollNumber, dicePosition) => {
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
        return console.log("diceRollNumber not defined")
    };
  };

  render() {
    return (
      <React.Fragment>
        <MainPage
          {...this.state}
          rollDice={this.rollDice}
        />
      </React.Fragment>
    )
  }
}

export default MainPageContainer;