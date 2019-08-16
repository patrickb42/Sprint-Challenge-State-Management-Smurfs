import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  POST_DATA_START,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
} from '../actions';

const initialState = {
  fetchingData: false,
  receivedData: false,
  sendingData: false,
  sentData: false,
  error: {
    status: false,
    message: '',
  },
  smurfs: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA_START:
      console.log(`fetch data start`);
      return {
        ...state,
        fetchingData: true,
        error: {
          status: false,
          message: '',
        },
      };

    case FETCH_DATA_SUCCESS:
      console.log(`fetch data success`);
      console.log(payload);
      return {
        ...state,
        fetchingData: false,
        receivedData: true,
        error: {
          status: false,
          message: '',
        },
        smurfs: payload,
      };

    case FETCH_DATA_FAILURE:
      console.log(`fetch data failure`);
      console.log(payload);
      return {
        ...state,
        fetchingData: false,
        error: {
          status: true,
          message: 'error fetching data',
        },
      };

    case POST_DATA_START:
      console.log(`post data start`);
      return {
        ...state,
        sendingData: true,
        error: {
          status: false,
          message: '',
        },
      };

    case POST_DATA_SUCCESS:
      console.log(`post data success`);
      console.log(payload);
      return {
        ...state,
        sendingData: false,
        error: {
          status: false,
          message: '',
        },
        smurfs: payload,
      };

    case POST_DATA_FAILURE:
      console.log(`post data failure`);
      console.log(payload);
      return {
        ...state,
        sendingData: false,
        error: {
          status: true,
          message: 'error posting data',
        },
      };

    default:
      if (state === initialState) return state;
      else throw new Error(`${type} is not a valid type`);
  }
};
