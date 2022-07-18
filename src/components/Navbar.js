// eslint-disable-next-line no-unused-expressions
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='toggleButton'>
        <button></button>
      </div>
      <div className='links'>
        <Link to='/'> Home </Link>
        <Link to='/projets'> Projects </Link>
        <Link to='/experience'> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;
