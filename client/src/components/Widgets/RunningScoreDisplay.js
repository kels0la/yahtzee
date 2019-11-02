import React from 'react';
import { Link } from 'react-router-dom';

export const RunningScoreDisplay = (props) => {
  const {theme} = props;

  return (
    <React.Fragment>
      <div className={`mt-10 ml-3`}>
        <div className={`p-2 ${theme.shadowEffect} rounded-lg`}>
          <div className={`pt-2 pb-1 px-2 rounded ${theme.cardBackground} ${theme.shadowEffect} 
          ${theme.standardBorder} border`}>
            <h3 className={`font-header text-center ${theme.standardText} `}>Overall Scores</h3>
            <hr className={`${theme.specialBorder} border outsetBorder mb-3`}></hr>
            <p className={`mb-2 text-sm ${theme.standardText}`}>Running Top: {props.scores.runningTop}</p>
            <p className={`mb-2 text-sm ${theme.standardText}`}>Bonus: {props.scores.bonus}</p>
            <p className={`mb-2 text-sm ${theme.standardText}`}>Total Top: {props.scores.totalTop}</p>
            <p className={`mb-2 text-sm ${theme.standardText}`}>Total Bottom: {props.scores.totalBottom}</p>
            <hr className={`${theme.darkBorder} border outsetBorder mb-2`}></hr>
            <p className={`font-bold text-base ${theme.specialText} mb-1`}>Total Score: {props.scores.totalScore}</p>
          </div>
        </div>

        <div className={`p-2 ${theme.shadowEffect} rounded-lg mt-3`}>
          <div className={`pt-2 pb-1 px-2 rounded ${theme.cardBackground} ${theme.shadowEffect} 
          ${theme.standardBorder} border`}>
            <h3 className={`font-header text-center ${theme.standardText} `}>Basic Instructions</h3>
            <hr className={`${theme.specialBorder} border outsetBorder mb-3`}></hr>
            <p className={`mb-2 ${theme.standardText}`}><span className={`${theme.specialText}`}>
              To start:</span> Click the Roll Dice Button to begin your turn. There are three dice rolls per turn.</p>
            <p className={`mb-2 ${theme.standardText}`}><span className={`${theme.specialText}`}>
              To hold dice for next roll:
            </span> Click on them. If the shadow is green, they’re held. If the shadow is red, they’re not.</p>
            <p className={`mb-2 ${theme.standardText}`}><span className={`${theme.specialText}`}>To take score:
            </span> Select the proper radio button within the “Select" column and click the “Take Score” button
            afterwards.</p>
            <p className={`mb-2 ${theme.standardText}`}><span className={`${theme.specialText}`}>
              After you take your score:</span> Click the “Roll Dice” button to begin your next turn.</p>
            <p className={`mb-2 ${theme.standardText}`}><span className={`${theme.specialText}`}>
              For further instructions:</span> Click “How to play” in the navigation bar.</p>
            <hr className={`${theme.darkBorder} border outsetBorder mb-2 mt-px`}></hr>
            <p className={`mb-1 ${theme.standardText}`}>
              To purchase boardgame: <Link to={{ pathname: `https://www.amazon.com/Hasbro-Gaming-00950-Yahtzee/dp/B00TLEMRKM/ref=sr_1_1?keywords=yahtzee&qid=1571881733&s=toys-and-games&sr=1-1` }}
                className={`no-underline ${theme.alternativeText}`} target="_blank" rel='noopener noreferrer'>
                  Click here</Link></p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
