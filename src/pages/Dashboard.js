import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getSumOfStats, getAllStatsWithCountry } from '../actions/globalStat';

import TopStat from '../components/TopStat';
import BottomStat from '../components/BottomStat';
import DashboardAction from '../components/DashboardAction';
import Alert from '../layouts/Alert';
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

  return loading ? (
    <Spinner />
  ) : (
    <div className='Dashboard'>
      <Alert type='confirmed' cases={newConfirmedStats} />
      <Alert type='death' cases={newDeathStats} />
      <h3>Global Stats</h3>
      <br />
      <TopStat cases={cases} active={activeStats} />
      <br />
      <DashboardAction />
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
