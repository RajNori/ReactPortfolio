import React from 'react'
import Projectcard from '../components/Projectcard';
import sushi from '../assets/Sushi.jpg';


function Projects() {
  return (
<div className="projects">
<h1>My Personal Projects</h1>
<div className='projectlist'>
<Projectcard name="Recipe website" image={sushi}/>
</div>
    </div>
    );
  }
  


export default Projects