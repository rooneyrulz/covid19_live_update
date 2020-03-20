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
      color: '#111'
    },
    deathHeading: {
      color: '#9D2933'
    }
  };

  const [activeStats, setActiveStats] = useState(null);
  const [newStats, setNewStats] = useState(null);

  useEffect(() => {
    getSumOfStats();
    getAllStatsWithCountry();

    const activeCases = stats.map(stat => stat.active);
    const totalActiveCases = activeCases.reduce(
      (sum, num) => (sum += num),
      activeCases[0]
    );

    setActiveStats(loading ? null : totalActiveCases);
  }, [getSumOfStats, getAllStatsWithCountry, loading]);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div className='Dashboard'>
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
      <hr />
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
      <hr />
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
