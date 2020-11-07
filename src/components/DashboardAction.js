import React from 'react';
import { Link } from 'react-router-dom';

const DashboardAction = () => {
  return (
    <div className='btn-group'>
      <Link className='btn btn-dashboard btn-local' to='/local-cases'>
        Local Cases
      </Link>
      <Link className='btn btn-dashboard btn-global' to='/global-cases'>
        Global Cases
      </Link>
    </div>
  );
};

export default DashboardAction;
