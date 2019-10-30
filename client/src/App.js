import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NoMatch from './pages/NoMatch';
import MainPageContainer from './pages/Main/MainPageContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={MainPageContainer} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }

};

export default App;