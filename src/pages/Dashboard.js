import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import { getSumOfStats, getAllStatsWithCountry } from '../actions/globalStat';

const Dashboard = ({
  stats: {
    allStats: { cases, deaths, recovered },
    stats,
    loading
  },
  getSumOfStats,
  getAllStatsWithCountry
}) => {
  useEffect(() => {
    getSumOfStats();
    getAllStatsWithCountry();
  }, [getSumOfStats, getAllStatsWithCountry, loading]);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div className='Dashboard'>
      <div className='btn-group'>
        <Link className='btn-dashboard btn-local-cases' to='/local-cases'>
          Local Cases
        </Link>
        <Link className='btn-dashboard btn-global-cases' to='/global-cases'>
          Global Cases
        </Link>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  stats: PropTypes.object.isRequired,
  getSumOfStats: PropTypes.func.isRequired,
  getAllStatsWithCountry: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  stats: state.globalStat
});

export default connect(mapStateToProps, {
  getSumOfStats,
  getAllStatsWithCountry
})(Dashboard);
