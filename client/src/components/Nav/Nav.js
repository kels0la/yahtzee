import React, { Component } from 'react';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render(){
    return(
      <React.Fragment>
        <nav className='bg-darkest-gray p-3'>
          <div className='mt-2 mr-1'>
            Hello
          </div>
        </nav>
      </React.Fragment>
    );
  };
};