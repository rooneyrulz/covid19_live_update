import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import path from '../assets/earth.gif';
import Earth from './Spinner';

const AppHeader = () => {
  const styles = {
    navLink: {
      fontSize: '1.5rem',
      textDecoration: 'none',
      color: '#fff',
    },
  };

  return (
    <div className='header-wrapper'>
      <h1>COVID-19 LIVE</h1>
      <h3>
        <NavLink style={styles.navLink} exact to='/'>
          {' '}
          Dashboard
        </NavLink>
      </h3>
      <br />
      <Earth path={path} />
      <br />
    </div>
  );
};

export default AppHeader;
