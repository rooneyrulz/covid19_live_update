import axios from 'axios';
import { ALL_STATS, STATS, STAT, STAT_ERROR } from './types';

const globalURI = 'https://corona.lmao.ninja';

export const getSumOfStats = () => async dispatch => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const { data } = await axios.get(`${globalURI}/all`, config);
    dispatch({ type: ALL_STATS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllStatsWithCountry = () => async dispatch => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const { data } = await axios.get(`${globalURI}/countries`, config);
    dispatch({ type: STATS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getStatByCountry = country => async dispatch => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const { data } = await axios.get(
      `${globalURI}/countries/${country}`,
      config
    );
    dispatch({ type: STAT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
