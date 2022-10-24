import React, { useEffect, useMemo } from "react";
import Select from "react-select";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { getAllStatsWithCountry, getStatByCountry } from "actions/globalStat";

import TopStat from "components/TopStat";
import BottomStat from "components/BottomStat";
import Chart from "components/Chart";
import Alert from "layouts/AlertContainer";
import CountryFlag from "components/CountryFlag";

const GlobalCase = () => {
  const { stats, stat, loading } = useSelector((state) => state.globalStat);
  const dispatch = useDispatch();

  const [param, setParam] = React.useState({ value: "USA", label: "USA" });

  const countries = useMemo(() => {
    if (!loading) {
      return stats.map((stat) => stat.country) || [];
    }
  }, [loading, stats]);

  const onChange = (country) => setParam(country);

  useEffect(() => {
    dispatch(getStatByCountry(param.value));
  }, [param, dispatch]);

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
        <Select
          id='select-country'
          className='select'
          isSearchable={true}
          isLoading={loading}
          defaultValue={param}
          onChange={onChange}
          options={countries?.map((c) => ({ value: c, label: c })) ?? []}
        />
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
