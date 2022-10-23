import React, { useEffect } from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getLocalStats } from "actions/localStat";

import TopStat from "components/TopStat";
import BottomStat from "components/BottomStat";
import Chart from "components/Chart";
import Alert from "layouts/AlertContainer";
import CountryFlag from "components/CountryFlag";
import SLFlag from "assets/lk.png";

const LocalCase = () => {
  const { loading, allStats } = useSelector((state) => state.localStat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocalStats());
  }, [dispatch]);

  const {
    update_date_time,
    local_total_cases,
    local_new_cases,
    local_new_deaths,
    local_total_number_of_individuals_in_hospitals,
    local_deaths,
    local_recovered,
  } = allStats;

  return (
    <div className='LocalCases'>
      <div className='alert-wrapper'>
        <Alert type='confirmed' cases={local_new_cases} loading={loading} />
        <Alert type='death' cases={local_new_deaths} loading={loading} />
        <Alert
          local={true}
          type='suspected'
          loading={loading}
          suspectedCases={local_total_number_of_individuals_in_hospitals}
        />
      </div>
      <div className='local-stats flow'>
        <CountryFlag flag={SLFlag} />
        <h2 className='title'>Sri Lanka</h2>
        <TopStat
          cases={local_total_cases}
          active={local_total_cases - local_recovered}
          loading={loading}
        />
        <BottomStat
          local={true}
          deaths={local_deaths}
          recovered={local_recovered}
          loading={loading}
        />
      </div>
      <hr />
      <div className='dashboard-statistic statistic flow'>
        <h2 className='title'>Statistics</h2>
        <Chart
          confirmed={local_total_cases}
          active={local_total_cases - local_recovered}
          death={local_deaths}
          recovered={local_recovered}
        />
        <br />
        <p>Last Update {update_date_time}</p>
      </div>
    </div>
  );
};

export default LocalCase;
