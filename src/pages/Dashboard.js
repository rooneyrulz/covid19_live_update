import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getSumOfStats, getAllStatsWithCountry } from '../actions/globalStat';

import TopStat from '../components/TopStat';
import BottomStat from '../components/BottomStat';
import DashboardAction from '../components/DashboardAction';
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
    confirmedAlert: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      background: '#22A7F0',
      color: '#fff',
      padding: '.7rem 1.2rem',
      boxShadow: '1px 1px 1px 1px #111'
    },
    deathAlert: {
      position: 'absolute',
      top: '6rem',
      right: '2rem',
      background: '#C3272B',
      color: '#fff',
      padding: '.7rem 1.2rem',
      boxShadow: '1px 1px 1px 1px #111'
    }
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
      <span>New Confirmed Stats: +{newConfirmedStats}</span>
    </div>
  );

  const appendNewDeathStats = newDeathStats !== null && !loading && (
    <div style={useStyles.deathAlert}>
      <span>New Death Stats: +{newDeathStats}</span>
    </div>
  );

  return loading ? (
    <Spinner />
  ) : (
    <div className='Dashboard'>
      {appendNewConfirmedStats}
      {appendNewDeathStats}
      <TopStat cases={cases} active={activeStats} />
      <br />
      <br />
      <DashboardAction />
      <br />
      <br />
      <BottomStat deaths={deaths} recovered={recovered} />
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
