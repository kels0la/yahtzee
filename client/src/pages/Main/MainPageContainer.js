import React from 'react';
import MainPage from './MainPage';

class MainPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceValueOne: 1,
      diceValueTwo: 2,
      diceValueThree: 3,
      diceValueFour: 4,
      diceValueFive: 5,
    };
    //Capture indications
    // onesTaken = false,
    // twosTaken = false,
    // onesTaken = false,
    // onesTaken = false,
    // onesTaken = false,
    // threeKindTaken = false,
    // fourKindTaken = false,
    // fullHouseTaken = false,
    // smallStraightTaken = false,
    // largeStraightTaken = false,
    // chanceTaken = false,
    // yahtzeeTaken = false,
    // //To put this state on the page, and update it as a score is selected
    // bonus = 0,
    // ones = 0,
    // twos = 0,
    // threes = 0,
    // fours = 0,
    // fives = 0,
    // sixes = 0,
    // upper = 0,
    // threeKind = 0,
    // fourKind = 0,
    // fullHouse = 0,
    // smallStraight = 0,
    // largeStraight = 0,
    // chance = 0,	
    // yahtzee = 0,
    // //Tally displayed on the page and updated along with the values
    // currentUpperScore = 0,
    // currentBottomScore = 0,
    // currentTotalScore = 0,
    // //Gotta be built from the ground up. You need that old code now.
    // turnNumber = 0 //Once it hits three, execute function to indicate selection.
  }
  
  // Need to grab the id for each I think?
  rollDice() {
    
  }
  // handleDiceChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // ifOnesTaken () {
  //   if (onesTaken = true) {
  //     rollerCannotRollNumber
  //   }
  // }

  // ifAllTaken () { }

    // let diceOne = Math.floor((Math.random() * (6-1)) + 1)
    // let diceTwo = Math.floor((Math.random() * (6-1)) + 1)
    // let diceThree = Math.floor((Math.random() * (6-1)) + 1)
    // let diceFour = Math.floor((Math.random() * (6-1)) + 1)
    // let diceFive = Math.floor((Math.random() * (6-1)) + 1)

  render() {
    
    return (
      <React.Fragment>
        <MainPage 
          // {...this.state}
          // rollDice={this.rollDice}
          // handleDiceChange={this.handleDiceChange}
        />
      </React.Fragment>
    )
  }
}

export default MainPageContainer;