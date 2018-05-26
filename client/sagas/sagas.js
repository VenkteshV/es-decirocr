import { all } from 'redux-saga/effects';
import watchStartApplication from './startApplication';
export default function* rootSaga() {
  yield all([
    watchStartApplication(),
  ]);
}
