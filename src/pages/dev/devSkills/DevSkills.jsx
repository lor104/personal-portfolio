import { useState } from 'react';
import './devSkills.scss';
import BorderedTitle from '../../../components/borderedHeading/BorderedHeading';
import MatchGame from '../../../components/matchGame/MatchGame';
import ColouredHeading from '../../../components/colouredHeading/ColouredHeading';

function DevSkills() {
  const [showSkills, setShowSkills] = useState('hide');
  const [showGame, setShowGame] = useState('show')

  const endGame = () => {
    setShowSkills('show')
    setShowGame('hide')
  }

  const resetGame = () => {
    setShowSkills('hide')
    setShowGame('show')
  }


  return (
    <div className='dev-skills'>
        <BorderedTitle title="Technical Skills" hLevel={2}/>
        <div className={`game ${showGame}`}>
          <p className='dev-skills__description'>I made a game of concentration for you to play where all the cards are skills in which I'm proficient. If you'd rather not play, <span className='dev-skills__link' onClick={endGame}>click here</span></p>
          <MatchGame endGame={endGame} />
        </div>
          <div className={`skills ${showSkills}`}>
            <div className='skills__item'>
              <ColouredHeading title="Proficient" hLevel={3} colour="honeydew"/>
              <div>
                <ul className='skills__list'>
                  {['HTML5', 'CSS3', 'JavaScript', 'React', 'Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'jQuery'].map(item => 
                    <li key={item} className='skills__list-item'>{item}</li>
                  )}
                </ul>
              </div>
            </div>
            <div className='skills__item'>
              <ColouredHeading title="Experienced" hLevel={3} colour="cantaloupe"/>
              <div>
                <ul className='skills__list'>
                  {['Git', 'node.js', 'Ruby', 'Rails'].map(item => 
                    <li key={item} className='skills__list-item'>{item}</li>
                  )}
                </ul>
              </div>
            </div>
            <div className='skills__item'>
              <ColouredHeading title="Competent" hLevel={3} colour="lavender"/>
              <div>
                <ul className='skills__list'>
                  {['SQL', 'ASP.NET', 'Wordpress'].map(item => 
                    <li key={item} className='skills__list-item'>{item}</li>
                  )}
                </ul>
              </div>
            </div>
            <div className='skills__item'>
              <ColouredHeading title="Introduced" hLevel={3} colour="peach"/>
              <div>
                <ul className='skills__list'>
                  {['React Native', "C#"].map(item => 
                    <li key={item} className='skills__list-item'>{item}</li>
                  )}
                </ul>
              </div>
            </div>
            <p>
              <span className='dev-skills__link' onClick={resetGame}>start over</span>
            </p>
          </div>
    </div>
  )
}

export default DevSkills