import React from 'react';
import { Link } from 'react-router-dom';

export const RunningScoreDisplay = props => {

  return (
    <React.Fragment>
      <div className='mt-10 ml-3'>
        <div className='p-2 shadowEffect rounded-lg'>
          <div className='pt-2 pb-1 px-2 rounded shadowEffect border-medium-gray border'>
            <h3 className='font-header text-center'>Overall Scores</h3>
            <hr className="border-brand-green border hrModals mb-3"></hr>
            <p className='mb-2 text-sm'>Running Top: {props.scores.runningTop}</p>
            <p className='mb-2 text-sm'>Bonus: {props.scores.bonus}</p>
            <p className='mb-2 text-sm'>Total Top: {props.scores.totalTop}</p>
            <p className='mb-2 text-sm'>Total Bottom: {props.scores.totalBottom}</p>
            <hr className="border-darkest-gray border hrModals mb-2"></hr>
            <p className='font-bold text-base text-brand-green mb-1'>Total Score: {props.scores.totalScore}</p>
          </div>
        </div>

        <div className='p-2 shadowEffect rounded-lg mt-3'>
          <div className='pt-2 pb-1 px-2 rounded shadowEffect border-medium-gray border'>
            <h3 className='font-header text-center'>Basic Instructions</h3>
            <hr className="border-brand-green border hrModals mb-3"></hr>
            <p className='mb-2'><span className='text-brand-green'>To start:</span> Click the Roll Dice Button to begin your turn. There are three dice rolls per turn.</p>
            <p className='mb-2'><span className='text-brand-green'>To hold dice for next roll:</span> Click on them. If the shadow is green, they’re held. If the shadow is red, they’re not.</p>
            <p className='mb-2'><span className='text-brand-green'>To take score:</span> Select the proper radio button within the “Select" column and click the “Take Score” button afterwards.</p>
            <p className='mb-2'><span className='text-brand-green'>After you take your score:</span> Click the “Roll Dice” button to begin your next turn.</p>
            <p className='mb-2'><span className='text-brand-green'>For further instructions:</span> Click “How to play” in the navigation bar.</p>
            <hr className="border-darkest-gray border hrModals mb-2 mt-px"></hr>
            <p className='mb-1'>To purchase boardgame: <Link to={{ pathname: `https://www.amazon.com/Hasbro-Gaming-00950-Yahtzee/dp/B00TLEMRKM/ref=sr_1_1?keywords=yahtzee&qid=1571881733&s=toys-and-games&sr=1-1` }} className='no-underline text-yahtzee-red' target="_blank">Click here</Link></p>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};