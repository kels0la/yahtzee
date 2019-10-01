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