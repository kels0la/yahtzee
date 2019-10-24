import React from 'react';

export const HowToPlayModal = props => {

  let showModal;

  const handleBackgroundClick = event => {
    if (event.target === event.currentTarget) props.closeHowToPlayModal(event);
  };

  if (props.showHowToPlayModal) {
    showModal =
      <React.Fragment>
        <div onClick={(event) => handleBackgroundClick(event)} className='overlaytwo'>
          <div className='w-1/6 inline-flex'></div>
          <div className='w-2/3 bg-body-background p-3 border ml-auto mr-auto border-light-gray max-h-full overflow-x-auto shadowEffect top-auto rounded-lg -mt-8 z-10 mb-8'>
            <i onClick={(event)=>props.closeHowToPlayModal(event)} className="fas fa-times float-right cursor-pointer -mt-1 text-yahtzee-red"></i>
            <h1 className='text-center clearfix'>How to Play <span className='text-yahtzee-red'>Yahtzee</span></h1>
            <hr className="border-brand-green border hrModals mb-3"></hr>
            <h2 className='underline text-brand-green'>Objective</h2>
              <p className='my-2'>The goal is to score the maximum number of points through the rolling and taking score with five dice.</p>
            <h2 className='underline text-brand-green'>Setup</h2>
              <p className='mt-2 mb-2'>- The game consists of 13 turns.</p>
              <p className='mb-2'>- Each turn consists of a maximum 3 dice rolls before you take score in one of the defined categories.</p>
              <p className='mb-2'>- Your score is determined by a different rule for each category, which is explained below.</p> 
              <p className='mb-2'>- Your final score is computed by summing up all thirteen score boxes.</p>
            <h2 className='underline text-brand-green'>Rules</h2>
              <p className='my-2'>The Yahtzee scorecard contains thirteen boxes divided between two sections: the Top and Bottom section.</p>
            <h2 className='underline text-brand-green'>The Top Section</h2>
            <p className='mb-2 mt-2'>If you score at least 63 points in the Top section, a bonus of 35 points is added to your score.</p>
            <h2 className='underline text-brand-green'>The Bottom Section</h2>
              <p className='my-2'>In the Bottom score section, your score is defined by each specific category. If you do not satisfy the requirements,
                your score will be zero for the category.</p>
            <h2 className='underline text-brand-green'>Scoring</h2>
            <h5 className='underline text-yahtzee-red mt-3'>Ones, Twos, Threes, Fours, Fives, Sixes</h5>
              <p className='mt-2 mb-2'>In each of these categories, your score is determined by the number of dice you roll the specific value.</p>
                <p className='mb-2 text-xs italic'>For example, if you take score for sixes and have 3 sixes at the end of your third roll, 
                you would receive 18 points (3 dice * 6).</p>
            <h5 className='underline text-yahtzee-red'>Three-of-a-kind</h5>
              <p className='mt-2 mb-2'>Three-of-a-kind requires 3 out of 5 dice to share the same dice value. Three-of-a-kind is calculated as sum of all dice.</p>
              <p className='mb-2 text-xs italic'>For example: If your dice values are 6, 6, 6, 1, and 2, your score will be 21.</p>
            <h5 className='underline text-yahtzee-red'>Four-of-a-kind</h5>
              <p className='mt-2 mb-2'>Just like Three-of-a-kind, Four-of-a-kind requires 4 out of 5 dice to share the same value. Four-of-a-kind is calculated as the sum of all dice.</p>
              <p className='mb-2 text-xs italic'>For example: If your dice values are 6, 6, 6, 6, and 2, your score will be 26.</p>
            <h5 className='underline text-yahtzee-red'>Full House</h5>
              <p className='mt-2 mb-2'>A Full House is worth 25 points and requires 3 dice sharing the same value - and - the other 2 dice sharing the same value.</p>
              <p className='mb-2 text-xs italic'>For example: If your dice values are 1, 1, 1, 2, and 2, you satisfy the requirements for a Full House.</p>
            <h5 className='underline text-yahtzee-red'>Small Straight</h5>
              <p className='mt-2 mb-2'>A Small Straight is worth 30 points and it is a sequence of 4 consecutive dice values.</p>
              <p className='mb-2 text-xs italic'>For example: If your dice values are 1, 2, 3, 4, and 1, you satisfy the requirements for a Small Straight.</p>
            <h5 className='underline text-yahtzee-red'>Large Straight</h5>
              <p className='mt-2 mb-2'>A Large Straight is worth 40 points and is a sequence of 5 consecutive dice values</p>
              <p className='mb-2 text-xs italic'>For example: If your dice values are 2, 3, 4, 5, and 6, you satisfy the requirements for a Large Straight.</p>
            <h5 className='underline text-yahtzee-red'>YAHTZEE!</h5>
              <p className='mt-2 mb-2'>A Yahtzee is worth 50 points and requires all dice to share the same value.</p>
              <p className='mb-2 text-xs italic'>For example: If your dice values are 1, 1, 1, 1, and 1, you satisfy the requirements for a Yahtzee.</p>
            <h5 className='underline text-yahtzee-red'>Chance</h5>
              <p className='mt-2 mb-2'>Chance does not require any specific combination of dice. Chance is calculated as the sum of all dice.
              <p className='mb-2 text-xs italic'>For example: If your dice values are 5, 5, 5, 4, and 6, your score will be 25.</p>
          </p>
          </div>
          <div className='w-1/6 inline-flex'></div>
        </div>
      </React.Fragment>
  } else showModal = null;

  return (
    <React.Fragment>
      {/* Div will need an onClick function that opens up the modal */}
      <div className='inline-flex'><span className='cursor-pointer'onClick={(event) => props.displayHowToPlayModal(event)}>How To Play</span></div>
      {showModal}
    </React.Fragment>
  );
};