import React, { useEffect, useMemo } from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getSumOfStats, getAllStatsWithCountry } from "actions/globalStat";

// COMPONENTS
import TopStat from "components/TopStat";
import BottomStat from "components/BottomStat";
import DashboardAction from "components/DashboardAction";
import Chart from "components/Chart";

// LAYOUTS
import Alert from "layouts/AlertContainer";

const Dashboard = () => {
  const {
    stats,
    allStats: { cases, deaths, recovered },
    loading,
  } = useSelector((state) => state.globalStat);

  const dispatch = useDispatch();

  const totalCases = useMemo(() => {
    if (!loading) {
      const activeCases = stats
        .map((stat) => stat.active)
        .reduce((sum, num) => (sum += num), 0);

      const newConfirmedStats = stats
        .map((stat) => stat.todayCases)
        .reduce((sum, num) => (sum += num), 0);

      const newDeathStats = stats
        .map((stat) => stat.todayDeaths)
        .reduce((sum, num) => (sum += num), 0);

      return {
        activeCases,
        newConfirmedStats,
        newDeathStats,
      };
    }
  }, [stats, loading]);

  useEffect(() => {
    dispatch(getSumOfStats());
    dispatch(getAllStatsWithCountry());
  }, [dispatch]);

  return (
    <div className='Dashboard'>
      <div className='alert-wrapper'>
        <Alert type='confirmed' cases={totalCases?.newConfirmedStats} />
        <Alert type='death' cases={totalCases?.newDeathStats} />
      </div>
      <div className='dashboard-main flow'>
        <h2 className='title'>Global Stats</h2>
        <TopStat cases={cases} active={totalCases?.activeStats} />
        <BottomStat deaths={deaths} recovered={recovered} />
        <DashboardAction />
      </div>
      <hr />
      <div className='dashboard-statistic statistic flow'>
        <h2 className='title'>Statistics</h2>
        <Chart
          confirmed={cases}
          active={totalCases?.activeStats}
          death={deaths}
          recovered={recovered}
        />
      </div>
    </div>
  );
};

export default Dashboard;
