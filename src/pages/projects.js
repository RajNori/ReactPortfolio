import React from 'react';
import Projectcard from '../components/Projectcard';
import recipe from '../assets/recipe.jpg' ;
import weather from '../assets/Weather.png';
import party from '../assets/party.png';
import web from '../assets/web.jpg'

import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectcard'>
        <Projectcard name='Weater dashboard' image={weather} />
      </div>
      <div className='projectcard'>
        <Projectcard name='Recipe website' image={recipe} />
      </div>
      <div className='projectcard'>
        <Projectcard name='Party planner' image={party} />
      </div>
      <div className='projectcard'>
        <Projectcard name='Business Note-taker' image={web} />
      </div>
    </div>
  );
}

export default Projects;
