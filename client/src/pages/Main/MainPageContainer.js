import React from 'react';
import MainPage from './MainPage';

class MainPageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <MainPage />
      </React.Fragment>
    )
  }
}

export default MainPageContainer;