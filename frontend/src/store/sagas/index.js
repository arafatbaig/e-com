import { all } from 'redux-saga/effects';
import productWatcherSaga from './ProductSaga';

export default function* rootSaga() {
  yield all([productWatcherSaga()]);
}
