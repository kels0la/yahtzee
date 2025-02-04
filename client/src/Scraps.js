diceNumberSwitchStatement = (diceNumber, diceOrder) => {
  console.log(diceOrder)
  console.log(diceNumber)
  console.log(diceFive)
  switch(diceNumber) {
    case 1:
      diceImageOne = diceOne
      return diceImageOne
    case 2:
        this.setState({
          diceOrder: diceTwo
        })
    case 3:
        this.setState({
          diceOrder: diceThree
        })
    case 4:
        this.setState({
          diceOrder: diceFour
        })
    case 5:
        this.setState({
          diceOrder: diceFive
        })
    // the default is sixes
    default:
        this.setState({
          diceOrder: diceSix
        })
  }
}

// Code as of 10/2/19 where ordering isn't proper

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
    };
  }

  rollDice = () => {
    this.obtainNumbers();
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
    }
  }

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

// for loop for dice checking but need to be able to update/setState on a particular value in an array

let diceNumberArray = []
let rolledNumber;
for (var i = 0; i < diceChecked.length; i++) {
  let index = i + 1;
  if (this.state.diceChecked[i] === false) {
    rolledNumber = this.rolledNumber();
    diceNumberArray.push(rolledNumber)
    this.diceRollDetermination(diceNumber[i], index)
  }
}

checkScoreCombinations = (diceValueOne, diceValueTwo, diceValueThree, diceValueFour, diceValueFive) => {
  let diceValuesArray = [];

  diceValuesArray.push(diceValueOne, diceValueTwo, diceValueThree, diceValueFour, diceValueFive)
  console.log(diceValuesArray)

  diceValuesArray.filter(checkOnes);

  function checkOnes(value) {
    let oneScore = 0;
    if (value === 1) {
      oneScore += 1
      console.log(oneScore)
    } else { return }
    this.setState({

    })
  }

}

  handleRadioChange = (event) => {
    const radioButtonValue = event.target.value;
    switch (radioButtonValue) {
      case 'onesScore':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
        case 'twosScore':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
        case 'threesScore':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
        case 'foursScore':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
        case 'fivesScore':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
        case 'sixesScore':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
        case 'threeKindScore':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
        case 'fourKindScore':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
        case 'fullHouseScore':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
        case 'smallStraightScore':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
        case 'largeStraightScore':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
        case 'yahtzeeScore':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
        case 'doubleYahtzeeScore':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
        case 'chanceScore':
        return this.setState(prevState => ({ diceOneChecked: !prevState.diceOneChecked }));
      default:
        return console.log("checkBoxNumber not defined");
    };
  };
   // switch (value) {
    //   case 'onesScore':
    //     return this.setState(prevState => ({disabledScores: {onesChecked: !prevState.onesChecked}}));
    //   case 'twosScore':
    //     return this.setState(prevState => ({disabledScores: {twosChecked: !prevState.twosChecked}}));
    //   case 'threesScore':
    //     return this.setState(prevState => ({disabledScores: {threesChecked: !prevState.threesChecked}}));
    //   case 'foursScore':
    //     return this.setState(prevState => ({disabledScores: {foursChecked: !prevState.foursChecked}}));
    //   case 'fivesScore':
    //     return this.setState(prevState => ({disabledScores: {fivesChecked: !prevState.fivesChecked}}));
    //   case 'sixesScore':
    //     return this.setState(prevState => ({disabledScores: {sixesChecked: !prevState.sixesChecked}}));
    //   case 'threeKindScore':
    //     return this.setState(prevState => ({disabledScores: {threeKindChecked: !prevState.threeKindChecked}}));
    //   case 'fourKindScore':
    //     return this.setState(prevState => ({disabledScores: {fourKindChecked: !prevState.fourKindChecked}}));
    //   case 'fullHouseScore':
    //     return this.setState(prevState => ({disabledScores: {fullHouseChecked: !prevState.fullHouseChecked}}));
    //   case 'smallStraightScore':
    //     return this.setState(prevState => ({disabledScores: {smallStraightChecked: !prevState.smallStraightChecked}}));
    //   case 'largeStraightScore':
    //     return this.setState(prevState => ({disabledScores: {largeStraightChecked: !prevState.largeStraightChecked}}));
    //   case 'yahtzeeScore':
    //     return this.setState(prevState => ({disabledScores: {yahtzeeChecked: !prevState.yahtzeeChecked}}));
    //   case 'doubleYahtzeeScore':
    //     return this.setState(prevState => ({disabledScores: {doubleYahtzeeChecked: !prevState.doubleYahtzeeChecked}}));
    //     case 'chanceScore':
    //     return this.setState(prevState => ({disabledScores: {chanceChecked: !prevState.chanceChecked}}));
    //   default:
    // }

    determineOnesScore = () => {
      let diceArray = [this.state.diceOneValue, this.state.diceTwoValue, this.state.diceThreeValue, this.state.diceFourValue, this.state.diceFiveValue]
      // This creates a new array with only ones, which I can then do a .length to determine how many and add to score.
      let diceArrayFiltering = diceArray.filter((diceValue) => {
        return diceValue === 1
      });
  
      let onesScore = diceArrayFiltering.length;
      const updatedScore = {...this.state.scores}
      updatedScore.ones = onesScore;
      setTimeout(() => {
        this.setState(updatedScore)
      }, 10);
      
    };

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

    handleTakeScoreDisable = () => {
      this.setState(prevState => ({ disabledTakeScoreBtn: !prevState.disabledTakeScoreBtn }));
    };
  
    handleRollDiceDisable = () => {
      this.setState(prevState => ({ disabledRollDiceBtn: !prevState.disabledRollDiceBtn }));
    };
  
     const showModal = props.showRestartModal 
    ?
      <div onClick={(event) => handleBackgroundClick(event)} className='overlay'>
        <div className='w-1/3'></div>
        <div className='w-1/3 modalTop bg-body-background ml-auto mr-auto p-3 border border-light-gray shadowEffect pin-x absolute rounded-lg mt-32 z-10 mb-3'>
          <h2 className='mb-3 text-center'>Are you sure you want to do that?</h2>
          <hr className="border-brand-green border outsetBorder mb-3"></hr>
          <p className='mb-3 text-center'>Click <span className='text-brand-green'>"New Game"</span> to swallow your pride. Or...</p>
          <p className='mb-3 text-center'>Click <span className='text-brand-green'>"Keep Trying"</span> to suck it up and continue on.</p>
          <hr className="border-brand-green border outsetBorder mb-3"></hr>
          <div className='justify-between flex'>
            <ResetButton
              classprops='main-button outline-button p-0 inline-block px-1 border-black border rounded text-sm bg-light-gray'
              text='New Game'
              styles='text-darkest-gray font-bold'
              onClick={(event) => props.resetGame(event)} />
            <Button2
              classprops='outline-button-two p-0 px-1 border-black border rounded text-sm bg-brand-green h-6'
              text="Keep Trying"
              styles='font-bold text-darkest-gray'
              onClick={(event) => props.closeRestartModal(event)} />
          </div>
        </div>
        <div className='w-1/3'></div>
      </div> 
    : null