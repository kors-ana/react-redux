import { put, takeEvery } from 'redux-saga/effects';

import axios from "../../axios";
import * as actionTypes from "../modules/constants";
import * as actions from '../modules/ducks/user.duck';

export function* fetchDataSaga() {
  yield put(actions.fetchDataRequest());
  try {
    const response = yield axios.get('/users');
    yield put(actions.fetchDataSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchDataFail(error));
  }
}

export function* watchUsers() {
  yield takeEvery(actionTypes.FETCH_DATA, fetchDataSaga)
}