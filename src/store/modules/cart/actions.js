import { CartTypes } from './types'

export const addProduct = (product) => {
  return {
    type: CartTypes.ADD_REQUESTED,
    product
  }
}

export const removeProduct = (id) => {
  return {
    type: CartTypes.REMOVE_REQUESTED,
    id
  }
}

export const addVoucher = (voucher) => {
  return {
    type: CartTypes.ADD_VOUCHER_REQUESTED,
    voucher
  }
}
