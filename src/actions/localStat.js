import { getLocalHospitalStats } from "services";
import { GET_ALL_LOCAL_STAT, GET_LOCAL_ERROR } from "./types";

export const getLocalStats = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_LOCAL_STAT,
      payload: (await getLocalHospitalStats).data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_LOCAL_ERROR,
      payload: {
        status: 500,
        message: error.message || "Something went wrong!",
      },
    });
  }
};
