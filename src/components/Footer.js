import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import '../styles/Footer.css';

function footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a
          href='https://www.instagram.com/raj_nori/'
          target='_blank'
          rel='noreferrer'
        >
          {<InstagramIcon />}
        </a>
        <a
          href='https://www.facebook.com/SMBspecialists'
          target='_blank'
          rel='noreferrer'
        >
          <FacebookIcon />
        </a>
        <a href='https://twitter.com/raj_nori' target='_blank' rel='noreferrer'>
          {<TwitterIcon />}
        </a>
        <a
          href='https://linkedin.com/in/rajnori'
          target='_blank'
          rel='noreferrer'
        >
          {<LinkedInIcon />}
        </a>

        <a href='https://github.com/RajNori' target='_blank' rel='noreferrer'>
          {<GitHubIcon />}
        </a>
      </div>
      <p className='copyright'>
        {<CopyrightRoundedIcon />} &nbsp; 2022 rajnori.com
      </p>
    </div>
  );
}

export default footer;
