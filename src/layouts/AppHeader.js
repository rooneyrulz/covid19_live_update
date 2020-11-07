import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <>
      <h1 className='title'>COVID-19 TRACKER</h1>
      <NavLink exact to='/'>
        {' '}
        Go To Home
      </NavLink>
    </>
  );
};

export default AppHeader;
