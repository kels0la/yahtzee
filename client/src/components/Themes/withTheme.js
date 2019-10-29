import React from 'react';
import { ThemeContext } from './ThemeContext';

const withTheme = (Component) => 
class withTheme extends React.Component {
  constructor(props) {
    super(props);

    // Hmm... How do I get this to switch. Time to learn. How does it interact with the click of those buttons? 
    // Obviously it needs to be imported where the button is located?
    this.state = {
      
    };
  }
  render() {
    return(
      <ThemeContext.Provider value={'listoka'}>
        <Component {...this.props} />
      </ThemeContext.Provider>
    )
  }
}


export default withTheme;