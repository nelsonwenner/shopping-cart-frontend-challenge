import { all, takeLatest } from 'redux-saga/effects'

import { addProduct, removeProduct, addVoucher } from './cart/sagas'
import { CartTypes } from './cart/types'

export default function* rootSaga() {
  return yield all([
    takeLatest(CartTypes.ADD_REQUESTED, addProduct),
    takeLatest(CartTypes.REMOVE_REQUESTED, removeProduct),
    takeLatest(CartTypes.ADD_VOUCHER_REQUESTED, addVoucher)
  ])
}
