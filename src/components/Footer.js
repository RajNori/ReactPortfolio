import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import "../styles/Footer.css"

function footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <GitHubIcon />
      </div>
      <p className='copyright'>
        {<CopyrightRoundedIcon />} &nbsp; 2022 rajnori.com
      </p>
    </div>
  );
}

export default footer;
