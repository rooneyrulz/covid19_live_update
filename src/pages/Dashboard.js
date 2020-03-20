import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import { getSumOfStats, getAllStatsWithCountry } from '../actions/globalStat';

import spinnerPath from '../assets/spinner.gif';
import Spinner from '../layouts/Spinner';

const Dashboard = ({
  stats: {
    allStats: { cases, deaths, recovered },
    stats,
    loading
  },
  getSumOfStats,
  getAllStatsWithCountry
}) => {
  const useStyles = {
    caseHeading: {
      fontWeight: '100'
    },
    confirmedHeading: {
      color: '#22A7F0'
    },
    activeHeading: {
      color: '#26C281'
    },
    recoveredHeading: {
      color: '#222'
    },
    deathHeading: {
      color: '#C3272B'
    },
    confirmedAlert: { position: 'absolute', top: '2rem', right: '2rem', background: '#22A7F0', color: '#fff', padding: '.8rem 1.2rem' },
    deathAlert: { position: 'absolute', top: '6rem', right: '2rem', background: '#C3272B', color: '#fff', padding: '.8rem 1.2rem' }
  };

  const [activeStats, setActiveStats] = useState(null);
  const [newConfirmedStats, setNewConfirmedStats] = useState(null);
  const [newDeathStats, setNewDeathStats] = useState(null);

  useEffect(() => {
    getSumOfStats();
    getAllStatsWithCountry();

    const activeCases = stats.map(stat => stat.active);
    const totalActiveCases = activeCases.reduce(
      (sum, num) => (sum += num),
      activeCases[0]
    );

    const newConfirmedStats = stats.map(stat => stat.todayCases);
    const totalTodayConfirmedStats = newConfirmedStats.reduce(
      (sum, num) => (sum += num),
      newConfirmedStats[0]
    );

    const newDeathStats = stats.map(stat => stat.todayDeaths);
    const totalTodayDeathStats = newDeathStats.reduce(
      (sum, num) => (sum += num),
      newDeathStats[0]
    );

    setActiveStats(loading ? null : totalActiveCases);
    setNewConfirmedStats(loading ? null : totalTodayConfirmedStats);
    setNewDeathStats(loading ? null : totalTodayDeathStats);
  }, [getSumOfStats, getAllStatsWithCountry, loading, stats]);

  const appendNewConfirmedStats = newConfirmedStats !== null && !loading && (
    <div style={useStyles.confirmedAlert}>
      <span>New Confirmed Stats: {newConfirmedStats}</span>
    </div>
  );

  const appendNewDeathStats = newDeathStats !== null && !loading && (
    <div style={useStyles.deathAlert}>
      <span>New Death Stats: {newDeathStats}</span>
    </div>
  );

  return loading ? (
    <Spinner path={spinnerPath} width='100px' />
  ) : (
    <div className='Dashboard'>
      {appendNewConfirmedStats}
      {appendNewDeathStats}
      <div className='top'>
        <h1
          style={(useStyles.caseHeading, useStyles.confirmedHeading)}
          className='case-heading confirmed-heading'
        >
          Confirmed: {cases}
        </h1>
        <h1
          style={(useStyles.caseHeading, useStyles.activeHeading)}
          className='case-heading active-heading'
        >
          Active: {activeStats}
        </h1>
      </div>
      <br />
      <br />
      <div className='btn-group'>
        <Link className='btn-dashboard btn-local-cases' to='/local-cases'>
          Local Cases
        </Link>
        <Link className='btn-dashboard btn-global-cases' to='/global-cases'>
          Global Cases
        </Link>
      </div>
      <br />
      <br />
      <div className='bottom'>
        <h1
          style={(useStyles.caseHeading, useStyles.recoveredHeading)}
          className='case-heading recovered-heading'
        >
          Recovered: {recovered}
        </h1>
        <h1
          style={(useStyles.caseHeading, useStyles.deathHeading)}
          className='case-heading death-heading'
        >
          Death: {deaths}
        </h1>
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
