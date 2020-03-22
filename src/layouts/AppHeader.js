import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import path from '../assets/earth.gif';
import Earth from './Spinner';

const AppHeader = () => {
  const styles = {
    navLink: {
      textDecoration: 'none',
      color: '#fff',
      fontSize: '1.2rem'
    }
  };

  return (
    <div>
      <h2>COVID-19 LIVE</h2>
      <NavLink style={styles.navLink} exact to='/'>
        {' '}
        Dashboard
      </NavLink>
      <br />
      <hr />
      <br />
      <Earth path={path} />
    </div>
  );
};

export default AppHeader;
