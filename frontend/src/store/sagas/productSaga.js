import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchProductsSuccess, fetchProductsFailure } from '../slices/productSlice';

function* fetchProductsSaga() {
  try {
    const response = yield call(fetch, `${import.meta.env.VITE_API_BASE_URL}/products`);
    const data = yield response.json();
    yield put(fetchProductsSuccess(data));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

export default function* productWatcherSaga() {
  yield takeLatest('product/fetchProducts', fetchProductsSaga);
}
