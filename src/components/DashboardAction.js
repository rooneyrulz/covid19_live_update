import React from 'react';
import { Link } from 'react-router-dom';

const DashboardAction = () => {
  const useStyles = {
    btnLocal: {
      textDecoration: 'none',
      fontSize: '1.2rem',
      background: '#fff',
      color: '#000',
      padding: '.65rem 3rem',
      borderRadius: '2em',
      boxShadow: '1.3px 1.3px 1px #111',
      margin: '.3em',
    },
    btnGlobal: {
      textDecoration: 'none',
      fontSize: '1.2rem',
      background: '#fff',
      color: '#000',
      padding: '.65rem 3rem',
      borderRadius: '2em',
      boxShadow: '1.3px 1.3px 1px #111',
      margin: '.3em',
    },
  };

  return (
    <div className='btn-group'>
      <Link
        style={useStyles.btnLocal}
        className='btn-dashboard btn-local'
        to='/local-cases'
      >
        Local Cases
      </Link>
      <Link
        style={useStyles.btnGlobal}
        className='btn-dashboard btn-global'
        to='/global-cases'
      >
        Global Cases
      </Link>
    </div>
  );
};

export default DashboardAction;
