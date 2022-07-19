import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import '../styles/Home.css';

function home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi! I'm Raj. </h2>
        <div className='prompt'>
          <p>
            I'm a web developer who is passionate about creating great projects.
          </p>
          <LinkedInIcon />
          <GitHubIcon />
          <ContactMailRoundedIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              HTML, CSS, SCSS, Bootstrap, Material-UI, TailwindCSS, Javascript,
              jQuery, React, ReactNative,flutter
            </span>
          </li>
        </ol>
        <ol className='list'>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              {' '}
              Nodejs, Java, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB
            </span>
          </li>
        </ol>
        <ol className='list'>
          <li className='item'>
            <h2>Languages</h2>
            <span>C, C++, Java, JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default home;
