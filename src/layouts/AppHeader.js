import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import path from '../assets/earth.gif';
import Earth from './Spinner';

const AppHeader = () => {
  const styles = {
    navLink: {
      textDecoration: 'none',
      color: '#fff',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={{ padding: '.5em' }}>
      <NavLink style={styles.navLink} exact to='/'>
        {' '}
        COVID-19 TRACKER{' '}
      </NavLink>
      <br />
      <br />
      <Earth path={path} width={'20px'} />
    </div>
  );
};

export default AppHeader;
