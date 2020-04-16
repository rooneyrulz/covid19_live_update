import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  const styles = {
    navLink: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: '#fff',
    },
  };

  return (
    <div className='header-wrapper'>
      <h1>COVID-19 LIVE</h1>
      <NavLink style={styles.navLink} exact to='/'>
        {' '}
        Home
      </NavLink>
    </div>
  );
};

export default AppHeader;
