import React, { useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Info, Name, Price, Button } from './styles'

import { addProduct } from '@/store/modules/cart/actions'

import { toast } from 'react-toastify'
import getImage from '@/utils/images'
import { formatMoney } from '@/utils/format'

const Product = ({ id, name, price, available: initialAvailable }) => {
  const dispatch = useDispatch()

  const image = useMemo(() => {
    return getImage(id)
  }, [id])

  const cartProducts = useSelector((state) => state.cart.products)

  const available = useMemo(() => {
    const productOnCart = cartProducts?.find((product) => product.id === id)
    return initialAvailable - (productOnCart?.quantity || 0)
  }, [initialAvailable, cartProducts, id])

  const handleAddToCart = useCallback(() => {
    if (available < 1) {
      toast.error('This product is no longer available')
      return
    }

    dispatch(addProduct({ id, name, price, available: initialAvailable }))
  }, [available, dispatch, id, name, price, initialAvailable])

  const priceFormatted = useMemo(() => formatMoney(price), [price])

  return (
    <Container>
      <img alt="Product cover" src={image} />
      <Info>
        <Name>{name}</Name>
        <Price>
          <span data-testid="price">$ {priceFormatted}</span>
          <div className="dot"></div>
          <span data-testid="available">{available} left</span>
        </Price>
      </Info>
      <Button onClick={handleAddToCart} disabled={available === 0}>
        {available === 0 ? 'Unavailable' : 'Buy'}
      </Button>
    </Container>
  )
}

export default Product
