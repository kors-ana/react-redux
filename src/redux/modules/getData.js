import axios from "../../axios";

const FETCH_DATA_START = 'FETCH_DATA_START';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export function fetchDataRequest() {
  return {
    type: FETCH_DATA_START,
  }
}

export function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data,
  }
}

export function fetchDataFail(error) {
  return {
    type: FETCH_DATA_FAIL,
    error,
  }
}

export const fetchData = () => {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios.get('/users')
      .then(response => {
        dispatch(fetchDataSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchDataFail(error))
      })
  }
}

const initialState = {
  data: [],
  loading: false,
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        loading: true,
      }
    case FETCH_DATA_SUCCESS:
      return {
        data: action.data,
        loading: false,
      }
    case FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
}
