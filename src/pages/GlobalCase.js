import React, { useEffect, Fragment, useMemo } from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { getAllStatsWithCountry, getStatByCountry } from "actions/globalStat";

import TopStat from "components/TopStat";
import BottomStat from "components/BottomStat";
import SelectOption from "components/SelectOption";
import Chart from "components/Chart";
import Alert from "layouts/AlertContainer";
import CountryFlag from "components/CountryFlag";

const GlobalCase = () => {
  const { stats, stat, loading } = useSelector((state) => state.globalStat);
  const dispatch = useDispatch();

  const countries = useMemo(() => {
    if (!loading) {
      return stats.map((stat) => stat.country) || [];
    }
  }, [loading, stats]);

  const onChange = (e) => {
    dispatch(getStatByCountry(e.target.value));
  };

  useEffect(() => {
    dispatch(getAllStatsWithCountry());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStatByCountry("USA"));
  }, [dispatch]);

  const { country, cases, deaths, recovered, active, todayCases, todayDeaths } =
    stat;

  return (
    <div className='GlobalCases'>
      <div className='alert-wrapper'>
        <Alert type='confirmed' cases={todayCases} loading={loading} />
        <Alert type='death' cases={todayDeaths} loading={loading} />
      </div>
      <br />
      <div className='global-main flow'>
        <CountryFlag />
        <h2 className='title'>{country}</h2>
        <TopStat cases={cases} active={active} loading={loading} />
        <BottomStat deaths={deaths} recovered={recovered} loading={loading} />
        <select
          id='select-country'
          className='select'
          onChange={(e) => onChange(e)}
        >
          <Fragment>
            <option default={true} value='USA'>
              USA
            </option>
            {countries?.map((country) => (
              <SelectOption key={country} value={country} text={country} />
            ))}
          </Fragment>
        </select>
      </div>
      <hr />
      <div className='global-statistic statistic flow'>
        <h2 className='title'>Statistics</h2>
        <Chart
          confirmed={cases}
          active={active}
          death={deaths}
          recovered={recovered}
        />
      </div>
    </div>
  );
};

export default GlobalCase;
