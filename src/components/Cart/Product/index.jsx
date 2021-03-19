import React, { useMemo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import * as S from './styles'

import { addProduct, removeProduct } from '@/store/modules/cart/actions'
import { formatMoney } from '@/utils/format'
import getImage from '@/utils/images'

const Product = ({ id, name, quantity, price, available }) => {
  const dispatch = useDispatch()

  const image = useMemo(() => {
    return getImage(id)
  }, [id])

  const handleIncreaseOnCart = useCallback(() => {
    if (quantity === available) {
      return toast.error('This product is no longer available')
    }

    dispatch(addProduct({ id, name, price, available }))
  }, [available, dispatch, id, name, price, quantity])

  const handleDecreaseOnCart = useCallback(() => {
    dispatch(removeProduct(id))
  }, [dispatch, id])

  const priceFormatted = useMemo(() => formatMoney(price), [price])

  return (
    <S.Container>
      <img alt={name} src={image} />

      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Row>
          <span>Quantity: {quantity}</span>
          <span>$ {priceFormatted}</span>
        </S.Row>
      </S.Content>
      <S.Controls>
        <button
          aria-label="Increase amount on cart"
          onClick={handleIncreaseOnCart}
        >
          +
        </button>
        <button
          aria-label="Decrease amount on cart"
          onClick={handleDecreaseOnCart}
        >
          -
        </button>
      </S.Controls>
    </S.Container>
  )
}

export default Product
