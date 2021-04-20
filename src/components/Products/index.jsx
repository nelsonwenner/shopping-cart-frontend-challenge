import React, { useState, useEffect } from 'react'

import { Container, Message, Loading } from './styles'

import Product from './Product'

import { getProducts } from '@/services/api'

const Products = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchProducts()

    async function fetchProducts() {
      try {
        const { data } = await getProducts()
        setProducts(data.products)
      } catch (error) {
        setError('Ops... Looks like something went wrong')
      }
    }
  }, [])

  return products.length ? (
    <Container>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </Container>
  ) : (
    <Message>{error || <Loading aria-label="Loading products..." />}</Message>
  )
}

export default Products
