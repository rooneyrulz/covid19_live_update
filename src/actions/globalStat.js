import { getAllCountriesStats, getAllStats, getCountryStats } from "services";
import {
  GET_ALL_GLOBAL_STAT,
  GET_GLOBAL_STATS,
  GET_GLOBAL_STAT,
  GET_GLOBAL_ERROR,
} from "./types";

export const getSumOfStats = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_GLOBAL_STAT, payload: await getAllStats });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_GLOBAL_ERROR,
      payload: {
        status: 500,
        message: error.message || "Something went wrong!",
      },
    });
  }
};

export const getAllStatsWithCountry = () => async (dispatch) => {
  try {
    dispatch({ type: GET_GLOBAL_STATS, payload: await getAllCountriesStats });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_GLOBAL_ERROR,
      payload: {
        status: 500,
        message: error.message || "Something went wrong!",
      },
    });
  }
};

export const getStatByCountry = (country) => async (dispatch) => {
  try {
    dispatch({
      type: GET_GLOBAL_STAT,
      payload: await getCountryStats(country),
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_GLOBAL_ERROR,
      payload: {
        status: 500,
        message: error.message || "Something went wrong!",
      },
    });
  }
};
