import { call, put, fork, take } from 'redux-saga/effects';
// import { callFetch } from '../services/api';
import * as actions from '../constants/actions';
import shouldStubData from '../utils/shouldStubData';

export default function* watchStartApplication() {
  yield take( actions.START_APPLICATION );
  yield fork( connect );
}

export function* connect() {
console.log("here");
  const data = {"STUB_ENABLED": true};
  data.STUB_ENABLED = yield call(shouldStubData, data);
  yield put( { type: actions.CONFIG_LOADED, config: data } );

}
