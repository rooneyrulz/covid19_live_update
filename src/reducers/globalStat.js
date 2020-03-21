import {
  GET_ALL_GLOBAL_STAT,
  GET_GLOBAL_STATS,
  GET_GLOBAL_STAT,
  GET_ERROR
} from '../actions/types';

const initialState = {
  loading: true,
  allStats: {},
  stats: [],
  stat: {},
  statError: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_GLOBAL_STAT:
      return {
        ...state,
        loading: false,
        allStats: payload
      };

    case GET_GLOBAL_STATS:
      return {
        ...state,
        loading: false,
        stats: payload
      };

    case GET_GLOBAL_STAT:
      return {
        ...state,
        loading: false,
        stat: payload
      };

    case GET_ERROR:
      return {
        ...state,
        loading: false,
        statError: payload
      };

    default:
      return state;
  }
};
