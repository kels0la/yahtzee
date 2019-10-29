import React from 'react';

export const themes = {
  listoka: {
    background: 'bg-darkest-gray',
    navBackground: 'bg-body-background',
    shadowEffect: 'shadowEffect', 
    standardBorder: 'border-medium-gray',
    hrBorderOne: 'border-brand-green',
    hrBorderTwo: 'border-darkest-gray',
    standardText: 'text-light-gray',
    specialText: 'text-brand-green',
    purchaseText: 'text-yahtzee-red',
    buttonText: 'text-darkest-gray',
    buttonBackgroundOne: 'bg-light-gray',
    buttonBackgroundTwo: 'bg-brand-green'
  },
  matador: {
    background: 'bg-darkest-gray',
    navBackground: 'bg-green',
    shadowEffect: 'shadowEffect', 
    standardBorder: 'border-medium-gray',
    hrBorderOne: 'border-brand-green',
    hrBorderTwo: 'border-darkest-gray',
    standardText: 'text-light-gray',
    specialText: 'text-pink',
    purchaseText: 'text-yahtzee-red',
    buttonText: 'text-darkest-gray',
    buttonBackgroundOne: 'bg-purple',
    buttonBackgroundTwo: 'bg-purple'
  },
  // blue: {

  // }
}

// null is default value. This will be "listoka theme" eventually
export const ThemeContext = React.createContext(themes.listoka);