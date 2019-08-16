import Axios from "axios";

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

const url = 'http://localhost:3333/'

export const getData = (query) => (dispatch) => {
  (async () => {
    dispatch ({ type: FETCH_DATA_START });
    try {
      const response = await Axios.get(`${url}${query}`);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error });
    }
  })();
};

export const postData = (query, data) => (dispatch) => {
  (async () => {
    dispatch ({ type: POST_DATA_START });
    try {
      const response = await Axios.post(`${url}${query}`, data);
      dispatch({ type: POST_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: POST_DATA_FAILURE, payload: error });
    }
  })();
};

export const postSmurf = (data) => {
  postData('smurfs', data);
}
