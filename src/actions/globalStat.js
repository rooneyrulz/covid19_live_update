import axios from 'axios';
import {
  GET_ALL_GLOBAL_STAT,
  GET_GLOBAL_STATS,
  GET_GLOBAL_STAT,
  GET_ERROR,
} from './types';

const globalURI = 'https://corona.lmao.ninja';

export const getSumOfStats = () => async (dispatch) => {
  const config = {
    header: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  try {
    const { data } = await axios.get(`${globalURI}/v2/all`, config);
    dispatch({ type: GET_ALL_GLOBAL_STAT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllStatsWithCountry = () => async (dispatch) => {
  const config = {
    header: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  try {
    const { data } = await axios.get(`${globalURI}/v2/countries`, config);
    dispatch({ type: GET_GLOBAL_STATS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getStatByCountry = (country) => async (dispatch) => {
  const config = {
    header: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  try {
    const { data } = await axios.get(
      `${globalURI}/v2/countries/${country}`,
      config
    );
    dispatch({ type: GET_GLOBAL_STAT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
