import React from 'react';
import { Button, Button2 } from '../../components/Widgets';
// Importing images
import YahtzeeImg from '../../assets/images/yahtzeeimg.png';
import diceOne from '../../assets/images/diceOne.png';
import diceTwo from '../../assets/images/diceTwo.png';
import diceThree from '../../assets/images/diceThree.png';
import diceFour from '../../assets/images/diceFour.png';
import diceFive from '../../assets/images/diceFive.png';
import diceSix from '../../assets/images/diceSix.png';

const MainPage = props => (
  <React.Fragment>
    <div className='w-full h-screen bg-darkest-gray '>
      <div className='text-center'><img src={YahtzeeImg} alt='yahtzee' /></div>
        <div className='px-3 -mt-5'><hr className="border-medium-gray border-3 hrModals"></hr></div>
      <div className='p-3 flex'>
        <div className='table text-sm border-light-gray border p-1 shadowEffect'>
        <form>
          <div className='table-row'>
            <div className='table-cell border-b-2 border-red pb-1 text-base text-red'>Label</div>
            <div className='table-cell text-center pl-2 pl-2 border-b-2 border-red pb-1 text-base text-red'>Score</div>
            <div className='table-cell pl-2 border-b-2 border-red pb-1 text-base text-red text-center'>Select</div>
          </div>

          <div className='table-row'>
            <div className='table-cell pt-1'>Ones</div>
            <div className='table-cell text-center pl-2' id='onesScore'>Insert Score</div>
            <div className='table-cell pl-2 text-center'>
              <label>
              <input type="radio" name='selectingScore' className='mb-0'
                // checked={true}
                // onChange={this.handleScoringSelection}
              />
              </label>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell'>Twos</div>
            <div className='table-cell text-center pl-2' id='twosScore'>Insert Score</div>
            <div className='table-cell pl-2 text-center'>
              <label>
              <input type="radio" name='selectingScore' className='mb-0'
                // checked={true}
                // onChange={this.handleScoringSelection}
              />
              </label>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell'>Threes</div>
            <div className='table-cell text-center pl-2' id='threesScore'>Insert Score</div>
            <div className='table-cell pl-2 text-center'>
              <label>
              <input type="radio" name='selectingScore' className='mb-0'
                // checked={true}
                // onChange={this.handleScoringSelection}
              />
              </label>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell'>Fours</div>
            <div className='table-cell text-center pl-2' id='foursScore'>Insert Score</div>
            <div className='table-cell pl-2 text-center'>
              <label>
              <input type="radio" name='selectingScore' className='mb-0'
                // checked={true}
                // onChange={this.handleScoringSelection}
              />
              </label>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell'>Fives</div>
            <div className='table-cell text-center pl-2' id='fivesScore'>Insert Score</div>
            <div className='table-cell pl-2 text-center'>
              <label>
              <input type="radio" name='selectingScore' className='mb-0'
                // checked={true}
                // onChange={this.handleScoringSelection}
              />
              </label>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell border-b-2 border-red pb-1'>Sixes</div>
            <div className='table-cell text-center pl-2 border-b-2 border-red pb-1' id='sixesScore'>Insert Score</div>
            <div className='table-cell border-b-2 border-red pb-1 pl-2 text-center'>
              <label>
                <input type="radio" name='selectingScore' className='mb-0'
                  // checked={true}
                  // onChange={this.handleScoringSelection}
                />
              </label>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell pt-1'>Running Top</div>
            <div className='table-cell text-center pl-2 pt-1' id='runningTopScore'>Insert Score</div>
          </div>
          <div className='table-row'>
            <div className='table-cell'>Bonus</div>
            <div className='table-cell text-center pl-2' id='bonusScore'>Insert Score</div>
          </div>
          <div className='table-row'>
            <div className='table-cell border-b-2 border-red pb-1'>Total Top</div>
            <div className='table-cell text-center pl-2 border-b-2 border-red pb-1' id='totalTopScore'>Insert Score</div>
            <div className='table-cell border-b-2 border-red pb-1'></div>
          </div>
        
        {/* Divider from top and bottom */}
        
          <div className='table-row'>
            <div className='table-cell pt-1'>3 of a Kind</div>
            <div className='table-cell text-center pl-2 pt-1' id='threeKindScore'>Insert Score</div>
            <div className='table-cell pl-2 text-center'>
              <label>
                <input type="radio" name='selectingScore' className='mb-0'
                  // checked={true}
                  // onChange={this.handleScoringSelection}
                />
              </label>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell'>4 of a Kind</div>
            <div className='table-cell text-center pl-2' id='fourKindScore'>Insert Score</div>
            <div className='table-cell pl-2 text-center'>
              <label>
                <input type="radio" name='selectingScore' className='mb-0'
                  // checked={true}
                  // onChange={this.handleScoringSelection}
                />
              </label>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell'>Full house</div>
            <div className='table-cell text-center pl-2' id='fullHouseScore'>Insert Score</div>
            <div className='table-cell pl-2 text-center'>
              <label>
                <input type="radio" name='selectingScore' className='mb-0'
                  // checked={true}
                  // onChange={this.handleScoringSelection}
                />
              </label>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell'>Small Straight</div>
            <div className='table-cell text-center pl-2' id='smallStraightScore'>Insert Score</div>
            <div className='table-cell pl-2 text-center'>
              <label>
                <input type="radio" name='selectingScore' className='mb-0'
                  // checked={true}
                  // onChange={this.handleScoringSelection}
                />
              </label>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell'>Large Straight</div>
            <div className='table-cell text-center pl-2' id='largeStraightScore'>Insert Score</div>
            <div className='table-cell pl-2 text-center'>
              <label>
                <input type="radio" name='selectingScore' className='mb-0'
                  // checked={true}
                  // onChange={this.handleScoringSelection}
                />
              </label>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell'>Yahtzee</div>
            <div className='table-cell text-center pl-2' id='yahtzeeScore'>Insert Score</div>
            <div className='table-cell  pl-2 text-center'>
              <label>
                <input type="radio" name='selectingScore' className='mb-0'
                  // checked={true}
                  // onChange={this.handleScoringSelection}
                />
              </label>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell'>2x Yahtzee</div>
            <div className='table-cell text-center pl-2' id='doubleYahtzeeScore'>Insert Score</div>
            <div className='table-cell pl-2 text-center'>
              <label>
                <input type="radio" name='selectingScore' className='mb-0'
                  // checked={true}
                  // onChange={this.handleScoringSelection}
                />
              </label>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell border-b-2 border-red pb-1'>Chance</div>
            <div className='table-cell text-center pl-2 border-b-2 border-red pb-1' id='chanceScore'>Insert Score</div>
            <div className='table-cell border-b-2 border-red pb-1 pl-2 text-center'>
              <label>
                <input type="radio" name='selectingScore' className='mb-0'
                  // checked={true}
                  // onChange={this.handleScoringSelection}
                />
              </label>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell pt-1'>Total Bottom</div>
            <div className='table-cell text-center pl-2 pt-1' id='totalBottomScore'>Insert Score</div>
          </div>
          <div className='table-row'>
            <div className='table-cell border-b-2 border-red pb-1'>Total Top</div>
            <div className='table-cell text-center pl-2 border-b-2 border-red pb-1' id='totalTopScore'>Insert Score</div>
            <div className='table-cell border-b-2 border-red pb-1'></div>
          </div>
          <div className='table-row'>
            <div className='table-cell pt-1 font-bold'>Total Score</div>
            <div className='table-cell text-center pl-2 pt-1 font-bold' id='totalTopScore'>Insert Score</div>
            <div className='table-cell pl-2 pt-1'><Button2 type="submit" text='Finalize Turn'></Button2></div>
          </div>
          </form>
        </div>
        {/* Dice and Submit Button */}
        <span>
          <Button text='Roll Dice' styles='text-light-gray border-red'></Button>
        </span>
        <div className='inline-flex pl-3'>
          <div className='pl-1 '>
            <input type="checkbox" className='hidden' id="cb1" />
              <label for='cb1'>
                <img className='border border-light-gray rounded-lg shadowEffectSmall h-16 w-16 cursor-pointer'  src={diceOne} />
              </label>
          </div>
          <div className='pl-1 '>
            <input type="checkbox" className='hidden' id="cb2" />
              <label for='cb2'>
                <img className='border border-light-gray rounded-lg shadowEffectSmall h-16 w-16 cursor-pointer'  src={diceTwo} />
              </label>
          </div>
          <div className='pl-1 '>
            <input type="checkbox" className='hidden' id="cb3" />
              <label for='cb3'>
                <img className='border border-light-gray rounded-lg shadowEffectSmall h-16 w-16 cursor-pointer'  src={diceThree} />
              </label>
          </div>
          <div className='pl-1 '>
            <input type="checkbox" className='hidden' id="cb4" />
              <label for='cb4'>
                <img className='border border-light-gray rounded-lg shadowEffectSmall h-16 w-16 cursor-pointer'  src={diceFour} />
              </label>
          </div>
          <div className='pl-1 '>
            <input type="checkbox" className='hidden' id="cb5" />
              <label for='cb5'>
                <img className='border border-light-gray rounded-lg shadowEffectSmall h-16 w-16 cursor-pointer'  src={diceFive} />
              </label>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default MainPage;