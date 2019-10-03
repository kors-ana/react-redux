import * as actionTypes from '../constants';


export function fetchDataRequest() {
  return {
    type: actionTypes.FETCH_DATA_START,
  }
}

export function fetchDataSuccess(data) {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    data,
  }
}

export function fetchDataFail(error) {
  return {
    type: actionTypes.FETCH_DATA_FAIL,
    error,
  }
}

export function fetchData() {
  return {
    type: actionTypes.FETCH_DATA,
  }
}

const initialState = {
  data: [],
  loading: false,
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_DATA_START:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        data: action.data,
        loading: false,
      }
    case actionTypes.FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
}
