import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import Earth from './Spinner';

const AppHeader = () => {
  const styles = {
    navLink: {
      textDecoration: 'none',
      color: '#fff',
      fontSize: '1.3rem',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={{ padding: '.5em' }}>
      <NavLink style={styles.navLink} exact to='/'>
        {' '}
        COVID-19 TRACKER{' '}
      </NavLink>
      <Earth />
    </div>
  );
};

export default AppHeader;
