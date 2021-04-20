import axios from 'axios'

const api = axios.create({
  baseURL: 'https://shielded-wildwood-82973.herokuapp.com'
})

export const getProducts = () => api.get('products.json')

export const getVouchers = () => api.get('vouchers.json')
